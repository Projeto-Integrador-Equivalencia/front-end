"use client";

import { useState } from "react";

import BackgroundGradient from "@/components/backgrounds/GradientBackground";
import CardForm from "@/components/cards/CardForm";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

import { registerCourse, type CourseShift } from "@/services/course_service";

import { useAuth } from "@/hooks/userAuth";

export default function CadastroCursoPage() {
  const { user, token } = useAuth();

  const [mensagem, setMensagem] = useState("");

  const [nome, setNome] = useState("");
  const [codigo, setCodigo] = useState("");
  const [periodo, setPeriodo] = useState<CourseShift | "">("");
  const [qtdSemestres, setQtdSemestres] = useState("");

  const [errors, setErrors] = useState<{
    nome?: string;
    codigo?: string;
    periodo?: string;
    qtdSemestres?: string;
  }>({});

  async function handleCadastro(e: React.FormEvent) {
    e.preventDefault();

    if (!nome || !codigo || !periodo || !qtdSemestres) {
      setErrors({
        nome: !nome ? "Campo obrigatório" : undefined,
        codigo: !codigo ? "Campo obrigatório" : undefined,
        periodo: !periodo ? "Campo obrigatório" : undefined,
        qtdSemestres: !qtdSemestres ? "Campo obrigatório" : undefined,
      });

      return;
    }

    if (!user || !token) {
      setMensagem("Administrador não autenticado");
      return;
    }

    try {
      await registerCourse(
        {
          name: nome,
          code: codigo,
          shift: periodo,
          semesterAmount: Number(qtdSemestres),
          createdByAdminId: user.id,
        },
        token,
      );

      setMensagem("Curso cadastrado com sucesso!");

      setNome("");
      setCodigo("");
      setPeriodo("");
      setQtdSemestres("");
      setErrors({});
    } catch (error) {
      console.error(error);
      setMensagem("Erro ao cadastrar curso");
    }
  }

  return (
    <BackgroundGradient>
      <div className="flex flex-col items-center w-full">
        <header className="text-left w-full mb-8 sm:w-[80%]">
          <button className="flex items-center gap-2 text-sm font-medium text-zinc-700 mb-4 hover:opacity-80">
            ← Voltar para Cursos
          </button>

          <h1 className="text-3xl font-bold text-zinc-900">
            Preencha os campos necessários para criação do curso
          </h1>
        </header>

        <CardForm>
          <form
            onSubmit={handleCadastro}
            className="flex flex-col items-start w-full max-w-3xl space-y-6"
          >
            <div className="flex items-center gap-2">
              <div className="w-1 h-3 bg-red-600 rounded-full"></div>

              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-800">
                Dados do Curso
              </span>
            </div>
            <div className="w-full space-y-2">
              <div className="flex flex-col gap-5 w-full">
                <Input
                  label="Nome"
                  placeholder="Digite o nome do curso"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  onBlur={() => {
                    setErrors((prev) => ({
                      ...prev,
                      nome: !nome ? "Campo obrigatório" : undefined,
                    }));
                  }}
                  error={errors.nome}
                />

                <Input
                  label="Código"
                  placeholder="Digite o código do curso"
                  value={codigo}
                  onChange={(e) => setCodigo(e.target.value)}
                  onBlur={() => {
                    setErrors((prev) => ({
                      ...prev,
                      codigo: !codigo ? "Campo obrigatório" : undefined,
                    }));
                  }}
                  error={errors.codigo}
                />

                <div className="w-full">
                  <label htmlFor="periodo" className="block text-sm mb-1">
                    Período
                  </label>

                  <select
                    id="periodo"
                    value={periodo}
                    onChange={(e) => setPeriodo(e.target.value as CourseShift)}
                    className="font-semibold focus:outline-none focus:ring-2 rounded-md p-2 w-full bg-(--c01) border border-gray-300 focus:ring-blue-600"
                  >
                    <option value="">Selecione</option>
                    <option value="Matutino">Matutino</option>
                    <option value="Vespertino">Vespertino</option>
                    <option value="Noturno">Noturno</option>
                    <option value="Integral">Integral</option>
                  </select>

                  <span
                    className={`block text-sm min-h-5 ${
                      errors.periodo ? "text-red-500 opacity-100" : "opacity-0"
                    }`}
                  >
                    {errors.periodo || " "}
                  </span>
                </div>

                <Input
                  label="Qtd. Semestres"
                  type="text"
                  inputMode="numeric"
                  placeholder="Informe quantos semestres de duração tem o curso"
                  value={qtdSemestres}
                  onChange={(e) =>
                    setQtdSemestres(e.target.value.replace(/\D/g, ""))
                  }
                  error={errors.qtdSemestres}
                />
              </div>
            </div>
            {mensagem && (
              <p className="text-center w-full font-semibold text-red-500">
                {mensagem}
              </p>
            )}

            <div className="w-full flex justify-center pt-4">
              <Button label="CRIAR CURSO" variant="primary" type="submit" />
            </div>
          </form>
        </CardForm>
      </div>
    </BackgroundGradient>
  );
}
