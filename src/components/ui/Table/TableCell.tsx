export default function TableCell({ children, className = ""}: any) {
  return <div className={`p-4 font-semibold text-sm ${className}`}>{children}</div>;
}