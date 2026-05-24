import TableRow from "@/components/ui/Table/TableRow";
import TableCell from "@/components/ui/Table/TableCell";

export default function CoursesRow({ item }: any) {
  return (
    <TableRow>
      <TableCell>{item.nome}</TableCell>
      <TableCell>{item.codigo}</TableCell>
      <TableCell>{item.criador}</TableCell>
      <TableCell>{item.semestre}</TableCell>
      <TableCell>{item.turno}</TableCell>
      <TableCell>{item.data}</TableCell>
    </TableRow>
  );
}