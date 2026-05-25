import CardWhite from "@/components/cards/CardWhite";
import { PageHeader } from "@/components/headers/PageHeader";
import SolicitationsTable from "@/components/solicitations/SolicitationsTable";
import { DecorativeDots } from "@/components/ui/DecorativeDots";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-c02">
      <PageHeader
        description="Visualize as solicitações realizadas"
        title="Solicitações dos Alunos."
      />
      <div className="pb-16 pt-16 grid size-full grid-cols-* gap-* place-items-center ">
        <Link
          href="/"
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
          <span>Sair da conta</span>
        </Link>
        <CardWhite>
          <SolicitationsTable data={""}></SolicitationsTable>
        </CardWhite>
        <div>
          <DecorativeDots variant="bottom" />
        </div>
      </div>
    </div>
  );
}
