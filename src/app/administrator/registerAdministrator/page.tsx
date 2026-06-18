"use client";

import { useState } from "react";

import BackgroundGradient from "@/components/backgrounds/GradientBackground";
import CardForm from "@/components/cards/CardForm";
import PasswordInput from "@/components/inputs/PasswordInput";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { registerAdministrator } from "@/services/administratorService";
import { RegisterAdministratorData } from "@/interfaces/administrator";
import { stringify } from "querystring";

export default function CadastroAdministradorPage() {
  const [mensagem, setMensagem] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");

  const [errors, setErrors] = useState<{
    nome?: string;
    email?: string;
    cpf?: string;
    senha?: string;
    confirmSenha?: string;
  }>({});

  async function handleCadastro(e: React.FormEvent) {
    e.preventDefault();

    if (!nome || !email || !cpf || !senha || !confirmSenha) {
      setErrors({
        nome: !nome ? "Campo obrigatorio" : undefined,
        email: !email ? "Campo obrigatorio" : undefined,
        cpf: !cpf ? "Campo obrigatorio" : undefined,
        senha: !senha ? "Campo obrigatorio" : undefined,
        confirmSenha: !confirmSenha ? "Campo obrigatório" : undefined,
      });
      return;
    }

    const CreateAdmInput: RegisterAdministratorData = {
      name: nome,
      cpf: cpf,
      email: email,
      password: senha,
    };

    if (senha !== confirmSenha) {
      setErrors({
        confirmSenha: "As senhas não coincidem",
      });

      return;
    }

    try {
      await registerAdministrator(CreateAdmInput);

      setMensagem("Administrador cadastrado com sucesso!");
      


      setNome("");
      setEmail("");
      setCpf("");
      setSenha("");
      setConfirmSenha("");
      setErrors({});

    } catch (error) {
      console.error(error);
      setMensagem("Erro ao realizar cadastro");
    }
  }

  return (
    <BackgroundGradient>
      <div className="flex flex-col items-center w-full">
        <header className="text-left w-full mb-1 sm:w-[80%]">
          <p className="text-gray-600 uppercase text-sm font-bold tracking-tight">
            Preencha os dados
          </p>

          <h1 className="text-4xl font-bold">
            Cadastro de administrador
            <span className="text-red-600">.</span>
          </h1>
        </header>

        <CardForm>
          <form
            onSubmit={handleCadastro}
            className="flex flex-col items-start w-full max-w-5xl space-y-1"
          >
            <div className="flex items-center gap-2 mb-1 mt-1">
              <div className="w-1 h-3 bg-red-600 rounded-full"></div>

              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-800">
                Dados do Administrador
              </span>
            </div>

            <div className="w-full space-y-1">
              <div className="flex flex-col gap-1 w-full">
                <Input
                  label="Nome"
                  placeholder="Digite o nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  onBlur={() => {
                    setErrors((prev) => ({
                      ...prev,
                      nome: !nome ? "Campo obrigatorio" : undefined,
                    }));
                  }}
                  error={errors.nome}
                />

                <Input
                  label="E-mail"
                  type="email"
                  placeholder="Digite o e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => {
                    const emailRegex = /^[a-zA-Z0-9]+@cps\.sp\.gov\.br$/;
                    setErrors((prev) => ({
                      ...prev,
                      email: !email 
                        ? "Campo obrigatorio" 
                        : !emailRegex.test(email)
                          ? "Email inválido. Use: nome@cps.sp.gov.br"
                          : undefined,
                    }));
                  }}
                  error={errors.email}
                />
                <Input
                  label="CPF"
                  type="tel"
                  inputMode="numeric"
                  placeholder="Digite o CPF"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value.replace(/\D/g, ""))}
                  onBlur={() => {
                    setErrors((prev) => ({
                      ...prev,
                      cpf: !cpf ? "Campo obrigatorio" : undefined,
                    }));
                  }}
                  error={errors.cpf}
                />

                <PasswordInput
                  label="Senha"
                  placeholder="Digite a senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  onBlur={() => {
                    setErrors((prev) => ({
                      ...prev,
                      senha: !senha ? "Campo obrigatorio" : undefined,
                    }));
                  }}
                  error={errors.senha}
                />

                <PasswordInput
                  label="Confirmar Senha"
                  placeholder="Confirme sua senha"
                  value={confirmSenha}
                  onChange={(e) => setConfirmSenha(e.target.value)}
                  onBlur={() => {
                    setErrors((prev) => ({
                      ...prev,
                      confirmSenha: !confirmSenha
                        ? "Campo obrigatório"
                        : undefined,
                    }));
                  }}
                  error={errors.confirmSenha}
                />
              </div>
            </div>

            {mensagem && (
              <p className="text-center w-full font-semibold text-red-500">
                {mensagem}
              </p>
            )}

            <div className="w-full flex justify-center pt-4">
              <Button
                label="REALIZAR CADASTRO"
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
