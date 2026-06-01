interface Props {
  columns: string[];
}

export default function TableHeader({ columns }: Props) {
  return (
    <div className="grid grid-cols-6 text-base text-gray-500 border-b border-gray-300">
      {columns.map((col) => (
        <div key={col}>{col}</div>
      ))}
    </div>
  );
}