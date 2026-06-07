"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import CardWhite from "@/components/cards/CardWhite";
import CoursesTable from "@/components/courses/CoursesTable";
import { PageHeader } from "@/components/headers/PageHeader";
import Button from "@/components/ui/Button";
import { DecorativeDots } from "@/components/ui/DecorativeDots";
import { useAuth } from "@/hooks/userAuth";
import { getAdministratorById } from "@/services/administrator_service";
import { getCourses, type Course } from "@/services/course_service";

export default function Page() {
  const { token } = useAuth();
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const authToken = token;

    if (!authToken) return;

    async function buscarCursos(authToken: string) {
      setLoading(true);
      setError("");

      try {
        const cursosEncontrados = await getCourses(authToken);
        const adminNameRequests = new Map<number, Promise<string>>();

        function getAdminName(adminId: number) {
          if (!adminNameRequests.has(adminId)) {
            adminNameRequests.set(
              adminId,
              getAdministratorById(adminId, authToken).then(
                (admin) => admin.name,
              ),
            );
          }

          return adminNameRequests.get(adminId)!;
        }

        const cursosComAdministrador = await Promise.all(
          cursosEncontrados.map(async (curso) => {
            try {
              const createdByAdminName = await getAdminName(
                curso.createdByAdminId,
              );

              return {
                ...curso,
                createdByAdminName,
              };
            } catch (error) {
              console.error(error);
              return curso;
            }
          }),
        );

        setCourses(cursosComAdministrador);
      } catch (error) {
        console.error(error);
        setError("Erro ao carregar cursos");
      } finally {
        setLoading(false);
      }
    }

    buscarCursos(authToken);
  }, [token]);

  return (
    <div className="bg-c02">
      <PageHeader
        description="Visualize, crie e edite cursos"
        title="Lista de Cursos."
      />
      <div className="pb-16 pt-16 grid size-full grid-cols-* gap-* place-items-center ">
        <div className="flex items-center w-full max-w-6xl justify-between">
          <Link
            href="/administrator/dashboard"
            className="flex items-center gap-2 text-zinc-600 hover:text-zinc-900 transition-colors font-medium text-sm w-fit select-none"
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
          <Link href="/administrator/courseRegister">
            <Button label="Criar novo curso" variant="primary" />
          </Link>
        </div>
        <CardWhite>
          {loading && (
            <p className="py-20 text-center font-semibold text-zinc-500">
              Carregando cursos...
            </p>
          )}

          {!loading && error && (
            <p className="py-20 text-center font-semibold text-red-500">
              {error}
            </p>
          )}

          {!loading && !error && <CoursesTable data={courses} />}
        </CardWhite>
        <div>
          <DecorativeDots variant="bottom" />
        </div>
      </div>
    </div>
  );
}
