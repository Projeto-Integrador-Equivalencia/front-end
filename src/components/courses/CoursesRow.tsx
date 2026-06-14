import TableRow from "@/components/ui/Table/TableRow";
import TableCell from "@/components/ui/Table/TableCell";
import type { Course } from "@/interfaces/course";

interface CoursesRowProps {
  item: Course;
}

function formatDate(value?: string) {
  if (!value) return "-";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return "-";

  return new Intl.DateTimeFormat("pt-BR").format(date);
}

export default function CoursesRow({ item }: CoursesRowProps) {
  return (
    <TableRow>
      <TableCell>{item.name}</TableCell>
      <TableCell>{item.code}</TableCell>
      <TableCell>{item.createdByAdminName ?? item.createdByAdminId}</TableCell>
      <TableCell>{item.semesterAmount}</TableCell>
      <TableCell>{item.shift}</TableCell>
      <TableCell>{formatDate(item.createdAt)}</TableCell>
    </TableRow>
  );
}
