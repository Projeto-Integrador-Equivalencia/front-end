export default function TableRow({ children }: any) {
  return (
    <div className="grid grid-cols-6 items-center p-4 border-b border-gray-300">
      {children}
    </div>
  );
}