import CardWhite from "@/components/cards/CardWhite";
import CoursesTable from "@/components/courses/CoursesTable";
import { PageHeader } from "@/components/headers/PageHeader";
import Button from "@/components/ui/Button";
import { DecorativeDots } from "@/components/ui/DecorativeDots";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-c02">
      <PageHeader
        description="Visualize, crie e edite cursos"
        title="Lista de Cursos."
      />
      <div className="pb-16 pt-16 grid size-full grid-cols-* gap-* place-items-center ">
        <div className="flex items-center w-full max-w-6xl justify-between">
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
          <Button label="Criar novo curso" variant="primary" />
        </div>
        <CardWhite>
          <CoursesTable data={""} />
        </CardWhite>
        <div>
          <DecorativeDots variant="bottom" />
        </div>
      </div>
    </div>
  );
}
