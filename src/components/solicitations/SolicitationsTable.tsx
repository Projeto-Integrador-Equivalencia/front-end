import Table from "@/components/ui/Table/Table";
import SolicitationsRow from "./SolicitationsRow";
import EmptyState from "@/components/ui/Table/EmptyState";

export default function SolicitationsTable({ data }: any) {
  if (!data.length) return <EmptyState />;

  return (
    <Table>
      {data.map((item: any) => (
        <SolicitationsRow key={item.protocolo} item={item} />
      ))}
    </Table>
  );
}
