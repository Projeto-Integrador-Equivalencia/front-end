import { useState } from "react";
import TableRow from "@/components/ui/Table/TableRow";
import TableCell from "@/components/ui/Table/TableCell";
import Link from "next/link";
import { userAgent } from "next/server";
import { useAuth } from "@/hooks/userAuth";
import { assignAdvisorToRequest } from "@/services/requestService";

const estilosStatus = {
  aprovado: "bg-green-500 text-green-950 font-semibold",
  reprovado: "bg-red-500 text-red-950 font-semibold",
  pendente: "bg-yellow-500 text-yellow-950 font-semibold",
  "em análise": "bg-yellow-500 text-yellow-950 font-semibold",
};

function formatDate(value?: string) {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";
  return new Intl.DateTimeFormat("pt-BR").format(date);
}

export default function SolicitationsRow({ item }: any) {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  const requestProps = item?.props ?? item?.data?.request?.props ?? item;
  const role = user?.role;
  const idReal = item?.props?.id ?? item?.id;

  const statusReal = requestProps?.status ?? item?.status ?? "Pendente";
  const statusFormatado =
    statusReal.toLowerCase() as keyof typeof estilosStatus;
  const estiloDinamico =
    estilosStatus[statusFormatado] || "bg-gray-200 text-gray-800 font-semibold";

  const protocoloReal =
    requestProps?.protocol ??
    requestProps?.Protocolo ??
    item?.protocol ??
    item?.Protocolo ??
    "-";
  console.log({ item });
  const dataCriacao =
    requestProps?.createdAt ??
    requestProps?.createdat ??
    requestProps?.created_at ??
    item?.createdAt ??
    item?.createdat;

  const handleAssignAdvisor = async () => {
    if (!idReal) return;
    try {
      setLoading(true);
      await assignAdvisorToRequest(idReal);
      alert("Orientador atribuído com sucesso!");
    } catch (error) {
      alert("Falha ao atribuir orientador.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <TableRow>
      <TableCell>{item.equivalence}</TableCell>
      <TableCell>{item.studentName}</TableCell>

      <TableCell
        className={`rounded-sm px-2 py-1 w-fit text-xs ${estiloDinamico}`}
      >
        {statusReal}
      </TableCell>

      <TableCell>{item.advisorName}</TableCell>

      <TableCell className="font-mono">{protocoloReal}</TableCell>

      <TableCell>{formatDate(dataCriacao)}</TableCell>

      <TableCell>
        <Link
          href={`/${role}/request/${idReal}`}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs py-1.5 px-3 rounded transition-colors inline-flex items-center gap-1 select-none"
        >
          <span>Visualizar</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
        {item.advisorName && (
          <button
            onClick={handleAssignAdvisor}
            disabled={loading}
            className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-medium text-xs py-1.5 px-3 rounded transition-colors inline-flex items-center gap-1 select-none disabled:cursor-not-allowed"
          >
            {loading ? (
              <span>Processando...</span>
            ) : (
              <>
                <span>Assumir Orientação</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0zM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                  />
                </svg>
              </>
            )}
          </button>
        )}
      </TableCell>
    </TableRow>
  );
}
