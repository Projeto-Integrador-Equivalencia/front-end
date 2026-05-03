import Table from "@/components/ui/Table/Table";
import CoursesRow from "./CoursesRow";

export default function CoursesTable({ data }: any) {
  return (
    <Table>
      {data.map((item: any) => (
        <CoursesRow key={item.codigo} item={item} />
      ))}
    </Table>
  );
}
