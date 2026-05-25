import Table from "@/components/ui/Table/Table";
import CoursesRow from "./CoursesRow";
import EmptyState from "../ui/Table/EmptyState";

export default function CoursesTable({ data }: any) {
  if (!data.length) return <EmptyState />;

  return (
    <Table>
      {data.map((item: any) => (
        <CoursesRow key={item.codigo} item={item} />
      ))}
    </Table>
  );
}
