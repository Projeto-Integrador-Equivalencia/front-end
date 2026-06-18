"use client";

import { useEffect, useState } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import { PageHeader } from "@/components/headers/PageHeader";
import ActionHistory from "@/components/ui/ActionHistory";
import { DecorativeDots } from "@/components/ui/DecorativeDots";
import { api } from "@/services/api";
import { useAuth } from "@/hooks/userAuth";

export default function DetalheSolicitacaoPage() {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { token } = useAuth();

  const [solicitation, setSolicitation] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataParam = searchParams.get("data");

    if (dataParam) {
      try {
        const parsed = JSON.parse(dataParam);
        setSolicitation(parsed);
        setLoading(false);
        return;
      } catch {}
    }

    async function fetchData() {
      try {
        const res = await api.get(`/requests/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const dados = res.data?.data || res.data?.props || res.data;
        setSolicitation(dados);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    if (id && token) fetchData();
  }, [id, token]);

  if (loading) return <p>Carregando...</p>;
  if (!solicitation) return <p>Erro ao carregar</p>;

  const studentName = solicitation?.studentName || "";
  const advisorName = solicitation?.advisorName || "";
  const equivalence = solicitation?.equivalence || "";
  const status = solicitation?.props?.status || "";

  const getStatusColor = (statusText: string) => {
    switch (statusText?.toLowerCase()) {
      case "pendente":
        return "bg-yellow-100 text-yellow-800";
      case "aprovado":
        return "bg-green-100 text-green-800";
      case "rejeitado":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-c02 min-h-screen">
      <PageHeader title="Detalhes" description="Solicitação" />

      <div className="max-w-5xl mx-auto p-4">
        <button 
          onClick={() => router.back()} 
          className="mb-6 text-sm text-gray-600 hover:underline block"
        >
          ← Voltar
        </button>

        <div className="space-y-4">
          <div className="flex justify-between items-center border-b pb-2">
            <h3 className="text-lg font-semibold text-gray-800">
              Informações da Solicitação
            </h3>
            {status && (
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(status)}`}>
                {status}
              </span>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <span className="block text-sm font-medium text-gray-500">Nome do Estudante</span>
              <p className="text-base text-gray-900 font-medium">{studentName || "Não informado"}</p>
            </div>

            <div>
              <span className="block text-sm font-medium text-gray-500">Nome do Orientador (Advisor)</span>
              <p className="text-base text-gray-900 font-medium">{advisorName || "Não informado"}</p>
            </div>

            <div>
              <span className="block text-sm font-medium text-gray-500">Tipo da Equivalência</span>
              <p className="text-base text-gray-900 font-medium">{equivalence || "Não informado"}</p>
            </div>
          </div>
        </div>

        <hr className="my-6" />

      </div>
    </div>
  );
}