import { useRouter } from "next/navigation";
export default function Voltar() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="flex items-center relative top-2 gap-2 text-zinc-600 hover:text-zinc-900
       transition-colors font-medium text-sm select-none cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="w-4 h-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
        />
      </svg>
      <span>Voltar</span>
    </button>
  );
}
