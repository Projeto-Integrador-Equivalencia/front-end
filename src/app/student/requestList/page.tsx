"use client";

import CardWhite from "@/components/cards/CardWhite";
import { PageHeader } from "@/components/headers/PageHeader";
import SolicitationsTable from "@/components/solicitations/SolicitationsTable";
import { DecorativeDots } from "@/components/ui/DecorativeDots";
import { useAuth } from "@/hooks/userAuth";
import { RequestListItem } from "@/interfaces/requests";
import { getAdvisorById } from "@/services/AdvisorService";
import { getEquivalencies } from "@/services/equivalencyService";
import { requestGetByStudentId } from "@/services/requestService";
import { getStudentById } from "@/services/StudentService";
import Link from "next/link";
import { useEffect, useState } from "react";


interface RequestComNomes extends RequestListItem {
  studentName?: string;
  advisorName?: string;
  equivalence?: string;
}

export default function Page() {
  const { token, user } = useAuth();
  const [requests, setRequests] = useState<RequestComNomes[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
  if (!user || !user.id || !token) return;

  async function buscarSolicitacoes() {
    setLoading(true);
    setError("");

    try {
        const [requestsResponse, equivalenciesResponse] = await Promise.all([
          requestGetByStudentId(user!.id),
          getEquivalencies()
        ]);

        const listaEquivalencias = equivalenciesResponse?.data || [];

        const req = requestsResponse.map((item) => {
          
          const equivalenciaEncontrada = listaEquivalencias.find(
            (eq) => eq.props.id === item.props.equivalencyId
          );

          const nomeEquivalencia = equivalenciaEncontrada 
            ? equivalenciaEncontrada.props.name 
            : "Não encontrada";

          return {
            ...item,
            studentName: user?.name || "Minha Solicitação",
            
            advisorName: item.props.advisorId ? "Atribuído" : "Não atribuído",
            
            equivalence: nomeEquivalencia,
          };
        });

        setRequests(req);
      } catch (err) {
        console.error("Erro ao carregar dados da página:", err);
        setError("Erro ao carregar solicitações");
      } finally {
        setLoading(false);
      }
  }

  buscarSolicitacoes();
}, [user, token]);

  return (
    <div className="bg-c02">
      <PageHeader
        description="Visualize as solicitações realizadas"
        title="Minhas Solicitações."
      />
      <div className="pb-16 pt-16 grid size-full grid-cols-1 place-items-center">
        <Link
          href="./dashboard"
          className="flex items-center gap-2 text-zinc-600 hover:text-zinc-900 transition-colors font-medium text-sm w-fit select-none mb-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          <span>Voltar ao Dashboard</span>
        </Link>
        <CardWhite>
          {loading && (
            <p className="py-20 text-center font-semibold text-zinc-500">
              Carregando solicitações...
            </p>
          )}

          {error && (
            <p className="py-20 text-center font-semibold text-red-500">
              {error}
            </p>
          )}

          {!loading && !error && <SolicitationsTable data={requests} />}
        </CardWhite>
        <div>
          <DecorativeDots variant="bottom" />
        </div>
      </div>
    </div>
  );
}
