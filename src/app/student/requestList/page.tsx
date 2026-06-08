"use client";
import CardWhite from "@/components/cards/CardWhite";
import { PageHeader } from "@/components/headers/PageHeader";
import SolicitationsTable from "@/components/solicitations/SolicitationsTable";
import { DecorativeDots } from "@/components/ui/DecorativeDots";
import { useAuth } from "@/hooks/userAuth";
import { getRequestInfo } from "@/interfaces/requests";
import { requestGetByStudentId } from "@/services/requestService";
import { getStudentById } from "@/services/StudentService";
import { request } from "http";
import Link from "next/link";
import { use, useEffect, useState } from "react";

export default function Page() {
  const { token, user } = useAuth();
  const [requests, setRequests] = useState<getRequestInfo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const authToken = token;

    if (!user) return;
    if (!authToken) return;

    async function buscarSolicitacoes(authToken: string) {
      setLoading(true);
      setError("");

      try {
        const requestsEncontradas = await requestGetByStudentId(
          user?.id ?? 1,
          authToken,
        );
        const advisorNameRequests = new Map<number, Promise<string>>();
        const studentNameRequests = new Map<number, Promise<string>>();
        const equivalenceNameRequests = new Map<number, Promise<string>>();

        function getStudentName(studentId: number) {
          if (!studentNameRequests.has(studentId)) {
            studentNameRequests.set(
              studentId,
              getStudentById(studentId, authToken).then(
                (student) => student.name,
              ),
            );
          }

          return studentNameRequests.get(studentId)!;
        }

        function getAdvisorName(advisorId: number) {
          /*if (!advisorNameRequests.has(advisorId)) {
            studentNameRequests.set(
              advisorId,
              //getAdvisorById(advisorId, authToken).then(
              //  (advisor) => advisor.name,
                
              ),
            );
          }

          return advisorNameRequests.get(advisorId)!;*/
        }

        function getEquivalence(equivalenceId: number) {}

        const req = await Promise.all(
          requestsEncontradas.map(async (req) => {
            try {
              const studentName = await getStudentName(user?.id ?? 12);
              const advisorName = await getAdvisorName(req.advisorId ?? 1);
              const equivalence = await getEquivalence(req.equivalencyId);
              //const advisorName = "Fudêncio";
              //const equivalence = "Não";
              console.log("=====================================");
              console.log(req);
              console.log(req.advisorId);
              console.log(equivalence);
              console.log(req.equivalencyId);
              console.log(advisorName);

              return { ...req, studentName, advisorName, equivalence };
            } catch (error) {
              console.error(error);
              return req;
            }
          }),
        );

        setRequests(req);
      } catch (error) {
        console.error(error);
        setError("Erro ao carregar cursos");
      } finally {
        setLoading(false);
      }
    }

    buscarSolicitacoes(authToken);
  }, [token]);

  return (
    <div className="bg-c02">
      <PageHeader
        description="Visualize as solicitações realizadas"
        title="Minhas Solicitações."
      />
      <div className="pb-16 pt-16 grid size-full grid-cols-* gap-* place-items-center ">
        <Link
          href="dashboard/"
          className="flex items-center gap-2 text-zinc-600 hover:text-zinc-900 transition-colors font-medium text-sm w-fit select-none"
        >
          {/* Ícone de Seta para a Esquerda integrado de forma nativa */}
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

          {!loading && !error && (
            <SolicitationsTable data={requests}></SolicitationsTable>
          )}
        </CardWhite>
        <div>
          <DecorativeDots variant="bottom" />
        </div>
      </div>
    </div>
  );
}
