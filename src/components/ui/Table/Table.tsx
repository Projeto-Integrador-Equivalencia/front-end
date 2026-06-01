interface TableProps {
  children: React.ReactNode;
}

export default function Table({ children }: TableProps) {
  return (
    <div className="w-full rounded-lg overflow-hidden">
      {children}
    </div>
  );
}