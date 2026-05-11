/*
    Usem essa função nas páginas para caso ele esteja deslogado, não consiga voltar para a página sem fazer o login (Clicando na
    seta de retornar por exemplo)
*/


"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function useAuth() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    }
  }, []);
}