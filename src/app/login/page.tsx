"use client";
import CardForm from "@/components/cards/CardForm";
import Input from "@/components/ui/Input";
import PasswordInput from "@/components/inputs/PasswordInput";
import Button from "@/components/ui/Button";
import BackgroundGradient from "@/components/backgrounds/GradientBackground";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/userAuth";
import Link from "next/link";
//import { loginRedirect } from "@/services/authService";

export default function LoginPage() {
  const {signIn} = useAuth();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [errors, setErrors] = useState<{
    email?: string;
    senha?: string;
  }>({});

  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    if (!email || !senha) {
      setErrors({
        email: !email ? "Campo obrigatório" : undefined,
        senha: !senha ? "Campo obrigatório" : undefined,
      });
      return;
    }

    try {
      await signIn({ email, password: senha });
      
      router.refresh();
      
      
    } catch (error) {
      console.error(error);
      alert("Erro ao fazer login");
    }
  }

  return (
    <BackgroundGradient>
      <div className="flex flex-col items-center w-full">
        <header className="text-left w-full mb-8 sm:w-[80%]">
          <p className="text-gray-600 uppercase text-sm font-bold tracking-tight">
            Preencha seus dados
          </p>
          <h1 className="text-4xl font-bold">
            Realize o seu login<span className="text-red-600">.</span>
          </h1>
        </header>

        <CardForm>
          <form
            onSubmit={handleLogin}
            className="flex flex-col items-start w-full max-w-xl space-y-5"
          >
            <div className="flex items-center gap-2 mb-28 mt-7">
              <div className="w-1 h-3 bg-red-600 rounded-full"></div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-800">
                Dados Pessoais
              </span>
            </div>

            <div className="w-full space-y-4">
              <Input
                label="E-mail"
                placeholder="Digite seu email"
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => {
                  setErrors((prev) => ({
                    ...prev,
                    email: !email ? "Campo obrigatório" : "",
                  }));
                }}
                error={errors.email}
              />

              <div className="space-y-1">
                <PasswordInput
                  label="Senha"
                  placeholder="Insira sua senha"
                  onChange={(e) => setSenha(e.target.value)}
                  onBlur={() => {
                    setErrors((prev) => ({
                      ...prev,
                      senha: !senha ? "Campo obrigatório" : "",
                    }));
                  }}
                  error={errors.senha}
                />
                <div className="w-full flex justify-end items-center gap-x-97 mt-1">
                  <Link
                    href="/recuperarSenha" 
                    className="text-[10px] text-blue-600 hover:underline font-medium"
                  >
                    Recuperar Senha
                  </Link>
                  <Link
                    href="/registerStudent" 
                    className="text-[10px] text-blue-600 hover:underline font-medium"
                  >
                    Não possui uma conta?
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center pt-4">
              <Button label="REALIZAR LOGIN" variant="primary" type="submit" />
            </div>
          </form>
        </CardForm>
      </div>
    </BackgroundGradient>
  );
}
