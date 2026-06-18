"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation"; // 1. IMPORTADO O USEROUTER AQUI
import CardWhite from "@/components/cards/CardWhite";
import { PageHeader } from "@/components/headers/PageHeader";
import { AttachedFiles } from "@/components/solicitations/AttachedFiles";
import SolicitationDetails from "@/components/solicitations/SolicitationDetails";
import ActionHistory from "@/components/ui/ActionHistory";
import { DecorativeDots } from "@/components/ui/DecorativeDots";
import { useAuth } from "@/hooks/userAuth";
import { api } from "@/services/api";
import Link from "next/link";
import EditButton from "@/components/ui/UpdateButton";
import { getRequestById } from "@/services/requestService";
import { getRequestInfo } from "@/interfaces/requests";

export default function DetalheSolicitacaoPage() {
  const { id } = useParams();
  const { token } = useAuth();
  const router = useRouter();

  const [solicitation, setSolicitation] = useState<getRequestInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id || !token) return;

    async function buscarDetalhes() {
      setLoading(true);
      setError("");
      try {
        const response = await getRequestById(String(id));
        setSolicitation(response);
      } catch (err) {
        console.error("Erro ao carregar detalhes:", err);
        setError("Erro ao carregar os detalhes da solicitação.");
      } finally {
        setLoading(false);
      }
    }

    buscarDetalhes();
  }, [id, token]);

  return (
    <div className="bg-c02 min-h-screen">
      <PageHeader
        description="Visualize os detalhes da solicitação realizada pelo aluno"
        title="Detalhes da Solicitação."
      />

      <div className="pb-16 pt-16 flex flex-col items-center justify-center size-full max-w-5xl mx-auto px-4 gap-4">
        <div className="w-full flex justify-start">
          <button
            onClick={() => router.back()} 
            className="flex items-center gap-2 text-zinc-600 hover:text-zinc-900 transition-colors font-medium text-sm select-none cursor-pointer"
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
            <span>Voltar para solicitações</span>
          </button>
        </div>

        <CardWhite>
          {loading && (
            <p className="py-20 text-center font-semibold text-zinc-500">
              Carregando detalhes da solicitação...
            </p>
          )}

          {error && (
            <p className="py-20 text-center font-semibold text-red-500">
              {error}
            </p>
          )}

          {!loading && !error && (
            <>
              <SolicitationDetails data={solicitation?.data} />

              <hr className="my-6 border-gray-200" />

              <AttachedFiles
                documents={solicitation?.data.request?.props?.Documents || []}
              />

              <hr className="my-6 border-gray-200" />

              <ActionHistory
                requestId={String(id)}
                historico={solicitation?.data.logs || []}
              />
            </>
          )}
          <Link href={`/advisor/request/${String(id)}/edit`}>
            <EditButton />
          </Link>
        </CardWhite>

        <div>
          <DecorativeDots variant="bottom" />
        </div>
      </div>
    </div>
  );
}
