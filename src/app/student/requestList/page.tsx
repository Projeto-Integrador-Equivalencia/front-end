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
        const requestsEncontradas = await requestGetByStudentId(
          user!.id);

        const advisorNameRequests = new Map<number, Promise<string>>();
        const studentNameRequests = new Map<number, Promise<string>>();
        const equivalenceNameRequests = new Map<number, Promise<string>>();

        function getStudentName(studentId: number) {
          if (!studentNameRequests.has(studentId)) {
            studentNameRequests.set(
              studentId,
              getStudentById(studentId).then(
                (student) => student.name,
              ),
            );
          }
          return studentNameRequests.get(studentId)!;
        }

        function getAdvisorName(advisorId: number) {
          if (!advisorNameRequests.has(advisorId)) {
            advisorNameRequests.set(
              advisorId,
              getAdvisorById(advisorId).then(
                (advisor) => advisor.name,
              ),
            );
          }
          return advisorNameRequests.get(advisorId)!;
        }

        function getEquivalence(equivalenceId: number) {
          if (!equivalenceNameRequests.has(equivalenceId)) {
            equivalenceNameRequests.set(
              equivalenceId,
              getEquivalencies().then((res: any) => {
                const lista = Array.isArray(res) ? res : res?.data || [];

                const eq = lista.find((item: any) => {
                  const id = item?.props?.id ?? item?.id;
                  return id === equivalenceId;
                });

                if (eq) {
                  return eq.props?.name ?? eq.name ?? "Sem nome";
                }

                return "Não encontrada";
              }),
            );
          }
          return equivalenceNameRequests.get(equivalenceId)!;
        }

        const req = await Promise.all(
          requestsEncontradas.map(async (item) => {
            try {
              const props = item.props;

              if (!props) return item;

              const studentName = await getStudentName(
                props.studentId ?? user!.id,
              );
              const advisorName = props.advisorId
                ? await getAdvisorName(props.advisorId)
                : "Não atribuído";
              const equivalence = props.equivalencyId
                ? await getEquivalence(props.equivalencyId)
                : "Não especificada";

              return { ...item, studentName, advisorName, equivalence };
            } catch (err) {
              console.error("Erro ao processar detalhes da solicitação:", err);
              return item;
            }
          }),
        );

        setRequests(req);
      } catch (err) {
        console.error(err);
        setError("Erro ao carregar solicitações");
      } finally {
        setLoading(false);
      }
    }

    buscarSolicitacoes();
  }, [user]);

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
