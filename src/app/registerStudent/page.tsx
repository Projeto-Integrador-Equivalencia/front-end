"use client";

import { useEffect, useState } from "react";

import BackgroundGradient from "@/components/backgrounds/GradientBackground";
import CardForm from "@/components/cards/CardForm";

import Input from "@/components/ui/Input";
import PasswordInput from "@/components/inputs/PasswordInput";
import Button from "@/components/ui/Button";

import { registerStudent } from "@/services/StudentService";
import { getCourses, type Course } from "@/services/course_service";
import { useAuth } from "@/hooks/userAuth";

export default function CadastroAlunoPage() {
  const { token } = useAuth();

  const [mensagem, setMensagem] = useState("");

  const [cursos, setCursos] = useState<Course[]>([]);
  const [carregandoCursos, setCarregandoCursos] = useState(false);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [ra, setRa] = useState("");
  const [idCurso, setIdCurso] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");

  const [errors, setErrors] = useState<{
    nome?: string;
    email?: string;
    telefone?: string;
    cpf?: string;
    rg?: string;
    ra?: string;
    idCurso?: string;
    senha?: string;
    confirmSenha?: string;
  }>({});

  useEffect(() => {
    async function buscarCursos() {
      setCarregandoCursos(true);
      try {
        const data = await getCourses();
        setCursos(data);
      } catch (error) {
        console.error(error);
        setMensagem("Erro ao carregar cursos");
      } finally {
        setCarregandoCursos(false);
      }
    }

    buscarCursos();
  }, []); // Array de dependências vazio para rodar apenas uma vez na montagem da página

  async function handleCadastro(e: React.FormEvent) {
    e.preventDefault();

    if (
      !nome ||
      !email ||
      !telefone ||
      !cpf ||
      !rg ||
      !ra ||
      !idCurso ||
      !senha ||
      !confirmSenha
    ) {
      setErrors({
        nome: !nome ? "Campo obrigatório" : undefined,
        email: !email ? "Campo obrigatório" : undefined,
        telefone: !telefone ? "Campo obrigatório" : undefined,
        cpf: !cpf ? "Campo obrigatório" : undefined,
        rg: !rg ? "Campo obrigatório" : undefined,
        ra: !ra ? "Campo obrigatório" : undefined,
        idCurso: !idCurso ? "Campo obrigatório" : undefined,
        senha: !senha ? "Campo obrigatório" : undefined,
        confirmSenha: !confirmSenha ? "Campo obrigatório" : undefined,
      });

      return;
    }

    if (senha !== confirmSenha) {
      setErrors({
        confirmSenha: "As senhas não coincidem",
      });

      return;
    }

    try {
      await registerStudent({
        name: nome,
        email,
        tel: telefone,
        cpf,
        rg,
        ra,
        courseId: Number(idCurso),
        password: senha,
      });

      setMensagem("Aluno cadastrado com sucesso!");

      setNome("");
      setEmail("");
      setTelefone("");
      setCpf("");
      setRg("");
      setRa("");
      setIdCurso("");
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
        <header className="text-left w-full mb-8 sm:w-[80%]">
          <p className="text-gray-600 uppercase text-sm font-bold tracking-tight">
            Preencha seus dados
          </p>

          <h1 className="text-4xl font-bold">
            Realize o seu cadastro
            <span className="text-red-600">.</span>
          </h1>
        </header>

        <CardForm>
          <form
            onSubmit={handleCadastro}
            className="flex flex-col items-start w-full max-w-5xl space-y-5"
          >
            <div className="flex items-center gap-2 mb-3 mt-3">
              <div className="w-1 h-3 bg-red-600 rounded-full"></div>

              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-800">
                Dados Pessoais
              </span>
            </div>

            <div className="w-full space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <Input
                  label="Nome"
                  placeholder="Digite seu nome"
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
                  label="E-mail"
                  type="email"
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => {
                    setErrors((prev) => ({
                      ...prev,
                      email: !email ? "Campo obrigatório" : undefined,
                    }));
                  }}
                  error={errors.email}
                />

                <Input
                  label="Telefone"
                  placeholder="Digite seu telefone"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  onBlur={() => {
                    setErrors((prev) => ({
                      ...prev,
                      telefone: !telefone ? "Campo obrigatório" : undefined,
                    }));
                  }}
                  error={errors.telefone}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <Input
                  label="CPF"
                  type="tel"
                  inputMode="numeric"
                  placeholder="Digite seu CPF"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value.replace(/\D/g, ""))}
                  onBlur={() => {
                    setErrors((prev) => ({
                      ...prev,
                      cpf: !cpf ? "Campo obrigatório" : undefined,
                    }));
                  }}
                  error={errors.cpf}
                />

                <Input
                  label="RG"
                  type="tel"
                  inputMode="numeric"
                  placeholder="Digite seu RG"
                  value={rg}
                  onChange={(e) => setRg(e.target.value.replace(/\D/g, ""))}
                  onBlur={() => {
                    setErrors((prev) => ({
                      ...prev,
                      rg: !rg ? "Campo obrigatório" : undefined,
                    }));
                  }}
                  error={errors.rg}
                />

                <Input
                  label="RA"
                  placeholder="Digite seu RA"
                  value={ra}
                  onChange={(e) => setRa(e.target.value)}
                  onBlur={() => {
                    setErrors((prev) => ({
                      ...prev,
                      ra: !ra ? "Campo obrigatório" : undefined,
                    }));
                  }}
                  error={errors.ra}
                />
              </div>

              <div className="w-full">
                <div className="flex flex-col gap-1">
                  <label htmlFor="curso">Curso</label>

                  <select
                    id="curso"
                    value={idCurso}
                    onChange={(e) => setIdCurso(e.target.value)}
                    className={`font-semibold focus:outline-none focus:ring-2 rounded-md p-2 w-full bg-(--c01)
                    ${
                      errors.idCurso
                        ? "border border-red-500 focus:ring-red-500"
                        : "border border-gray-300 focus:ring-blue-600"
                    }`}
                  >
                    <option value="">
                      {carregandoCursos ? "Carregando cursos..." : "Selecione"}
                    </option>

                    {cursos.map((curso) => (
                      <option key={curso.id} value={curso.id}>
                        {curso.code} - {curso.name}
                      </option>
                    ))}
                  </select>

                  <span
                    className={`block text-sm min-h-5 ${
                      errors.idCurso ? "text-red-500 opacity-100" : "opacity-0"
                    }`}
                  >
                    {errors.idCurso || " "}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <PasswordInput
                  label="Senha"
                  placeholder="Digite sua senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  onBlur={() => {
                    setErrors((prev) => ({
                      ...prev,
                      senha: !senha ? "Campo obrigatório" : undefined,
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
