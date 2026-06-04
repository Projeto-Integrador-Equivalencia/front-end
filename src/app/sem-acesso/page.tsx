"use client";

import { useRouter } from "next/navigation";

export default function SemAcesso() {
  const router = useRouter();

  const handleGoBack = () => {
    // Remove os cookies para garantir que o usuário deslogue ao voltar para o login
    document.cookie = "token=; path=/; max-age=0;";
    document.cookie = "role=; path=/; max-age=0;";
    router.push("/login");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 dark:bg-gray-900">
      <div className="w-full max-w-md text-center">
        {/* Ícone de Alerta Animado */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-12 w-12 animate-pulse"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
            />
          </svg>
        </div>

        {/* Textos Informativos */}
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Acesso Negado
        </h1>
        
        <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
          Ops! Você não tem permissão para visualizar esta área do sistema acadêmico. Seu nível de acesso não corresponde a esta rota.
        </p>

        {/* Botão de Ação */}
        <div className="mt-8">
          <button
            onClick={handleGoBack}
            className="inline-flex w-full justify-center rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 transition-colors duration-200 cursor-pointer"
          >
            Voltar para a Página de Login
          </button>
        </div>
      </div>
    </div>
  );
}