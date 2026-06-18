"use client";

import CardWhite from "@/components/cards/CardWhite";
import { PageHeader } from "@/components/headers/PageHeader";
import SolicitationsTable from "@/components/solicitations/SolicitationsTable";
import { DecorativeDots } from "@/components/ui/DecorativeDots";
import { useAuth } from "@/hooks/userAuth";
import { getAdvisorById } from "@/services/AdvisorService";
import { getEquivalencies } from "@/services/equivalencyService";
import { api } from "@/services/api";
import { getStudentById } from "@/services/StudentService";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const { token, user } = useAuth();
  const [requests, setRequests] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user || !token) return;

    async function buscar() {
      setLoading(true);

      try {
        const response = await api.get(
          `/requests/advisor/${user.id}/course/${user.courseId || 1}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );

        const data = response.data.data || [];

        const enriched = await Promise.all(
          data.map(async (item: any) => {
            const props = item.props;

            const student = props.studentId
              ? await getStudentById(props.studentId)
              : null;

            const advisor = props.advisorId
              ? await getAdvisorById(props.advisorId)
              : null;

            const eqResponse = await getEquivalencies();
            const eqList = eqResponse.data;

            const eq = eqList.find((e: any) => {
              const id = e?.props?.id;
              return id === props.equivalencyId;
            });

            return {
              ...item,
              studentName: student?.name,
              advisorName: advisor?.name,
              equivalence: eq?.props?.name ?? "Sem nome",
            };
          }),
        );

        setRequests(enriched);
      } catch {
        setError("Erro ao carregar solicitações");
      } finally {
        setLoading(false);
      }
    }

    buscar();
  }, [token, user]);

  return (
    <div className="bg-c02">
      <PageHeader
        description="Visualize as solicitações realizadas"
        title="Solicitações dos Alunos."
      />

      <div className="pb-16 pt-16 grid place-items-center">
        <Link href="/">Sair</Link>

        <CardWhite>
          {loading && <p>Carregando...</p>}
          {error && <p>{error}</p>}
          {!loading && !error && <SolicitationsTable data={requests} />}
        </CardWhite>


      </div>
    </div>
  );
}
