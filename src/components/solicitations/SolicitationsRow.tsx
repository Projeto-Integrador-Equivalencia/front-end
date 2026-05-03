import TableRow from "@/components/ui/Table/TableRow";
import TableCell from "@/components/ui/Table/TableCell";

export default function SolicitationsRow({ item }: any) {
  return (
    <TableRow>
      <TableCell>{item.tipo}</TableCell>
      <TableCell>{item.nomeAluno}</TableCell>
      <TableCell>{item.status}</TableCell>
      <TableCell>{item.orientador}</TableCell>
      <TableCell>{item.protocolo}</TableCell>
      <TableCell>{item.data}</TableCell>
    </TableRow>
  );
}
