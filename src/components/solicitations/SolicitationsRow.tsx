import TableRow from "@/components/ui/Table/TableRow";
import TableCell from "@/components/ui/Table/TableCell";
import Link from "next/link";
import { userAgent } from "next/server";
import { useAuth } from "@/hooks/userAuth";

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

  const dataCriacao =
    requestProps?.createdAt ??
    requestProps?.createdat ??
    requestProps?.created_at ??
    item?.createdAt ??
    item?.createdat;

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
      </TableCell>
    </TableRow>
  );
}
