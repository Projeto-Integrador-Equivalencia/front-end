"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import DropdownMenu from "./DropdownMenu";
import { useAuth } from "@/hooks/userAuth"; // Ajuste este caminho se necessário
import Voltar from "../voltar/btVoltar";
import { Volleyball } from "lucide-react";

export default function Header() {
  const { user, signOut } = useAuth();
  const router = useRouter();

  const nomeUsuario = user?.name;

  const opcoesDoUsuario = [
    {
      label: "Sair",
      action: () => {
        signOut();
        router.refresh();
      },
    },
  ];

  return (
    <header className="sticky top-0 left-0 h-20 bg-black text-white w-full flex items-center justify-between px-8 z-50">
      <div className="flex-1">
        <Voltar />
      </div>

      <div className="flex-1 flex justify-center">
        <Link href="/">
          <Image
            src="/images/logo-fatec.png"
            alt="Logo Fatec"
            width={124}
            height={50}
            priority
          />
        </Link>
      </div>

      <div className="flex-1 flex justify-end">
        {nomeUsuario && (
          <DropdownMenu buttonText={nomeUsuario} items={opcoesDoUsuario} />
        )}
      </div>
    </header>
  );
}
