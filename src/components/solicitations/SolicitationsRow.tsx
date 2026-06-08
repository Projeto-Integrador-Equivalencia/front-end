import TableRow from "@/components/ui/Table/TableRow";
import TableCell from "@/components/ui/Table/TableCell";
import EmptyState from "../ui/Table/EmptyState";

const estilosStatus = {
  aprovado: "bg-green-500 text-green-900",
  reprovado: "bg-red-500 text-red-900",
  pendente: "bg-yellow-500 text-yellow-900",
};

function formatDate(value?: string) {
  if (!value) return "-";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return "-";

  return new Intl.DateTimeFormat("pt-BR").format(date);
}

export default function SolicitationsRow({ item }: any) {
  const statusFormatado =
    item.status?.toLowerCase() as keyof typeof estilosStatus;
  const estiloDinamico =
    estilosStatus[statusFormatado] || "bg-gray-200 text-gray-800";

  return (
    <TableRow>
      <TableCell>{item.equivalence}</TableCell>
      <TableCell>{item.studentName}</TableCell>
      <TableCell className={`rounded-sm px-2 py-1 w-fit ${estiloDinamico}`}>
        {item.status}
      </TableCell>
      <TableCell>{item.advisorName}</TableCell>
      <TableCell>{item.protocol}</TableCell>
      <TableCell>{formatDate(item.createdAt)}</TableCell>
    </TableRow>
  );
}
