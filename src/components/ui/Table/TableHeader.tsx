interface Props {
  columns: string[];
}

export default function TableHeader({ columns }: Props) {
  return (
    <div className="grid grid-cols-6 bg-gray-100 p-4 font-semibold text-sm">
      {columns.map((col) => (
        <div key={col}>{col}</div>
      ))}
    </div>
  );
}