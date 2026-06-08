"use client";
import CardForm from "@/components/cards/CardForm";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import BackgroundGradient from "@/components/backgrounds/GradientBackground";
import { useState } from "react";
import { forgotPassword } from "@/services/authService";

export default function LoginPage() {
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState<{
    email?: string;
  }>({});

  async function handlePassword(e: React.FormEvent) {
    e.preventDefault();

    if (!email) {
      setErrors({
        email: !email ? "Campo obrigatório" : undefined,
      });
      return;
    }

    try {
      const response = await forgotPassword({email});
      
      alert(response.message);
      
      
    } catch (error) {
      console.error(error);
      alert("Erro ao recuperar senha");
    }
  }

  return (
    <BackgroundGradient>
      <div className="flex flex-col items-center w-full">
        <header className="text-left w-full mb-8 sm:w-[80%]">
          <p className="text-gray-600 uppercase text-sm font-bold tracking-tight">
            Esqueci minha senha{" "}
          </p>
          <h1 className="text-4xl font-bold">
            Redefinir Senha<span className="text-red-600">.</span>
          </h1>
        </header>

        <CardForm>
          <form onSubmit={handlePassword} className="flex flex-col items-start w-full max-w-xl space-y-5">
            <div className="flex items-center gap-2 mb-28 mt-7">
              <div className="w-1 h-3 bg-red-600 rounded-full"></div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-800">
                Insira seu email para recuperar sua senha
              </span>
            </div>

            <div className="w-full space-y-4">
              <Input
                label="E-mail"
                value={email}
                placeholder="Digite seu email"
                onBlur={() => {
                  setErrors((prev) => ({
                    ...prev,
                    email: !email ? "Campo obrigatório" : undefined,
                  }));
                }}
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email}
              />

              <div className="space-y-1"></div>
            </div>

            <div className="w-full flex justify-center pt-4">
              <Button
                label="Recuperar Acesso"
                variant="primary"
                type="submit"
              />
            </div>
          </form>
        </CardForm>
      </div>
    </BackgroundGradient>
  );
}
