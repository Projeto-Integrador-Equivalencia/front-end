"use client";

import { useEffect, useState } from "react";

import BackgroundGradient from "@/components/backgrounds/GradientBackground";
import CardForm from "@/components/cards/CardForm";

import Input from "@/components/ui/Input";
import PasswordInput from "@/components/inputs/PasswordInput";
import Button from "@/components/ui/Button";

import { createAdvisor } from "@/services/AdvisorService";
import { getCourses } from "@/services/courseService";
import { Course } from "@/interfaces/course";
import { useAuth } from "@/hooks/userAuth";
import { CreateAdvisorData } from "@/interfaces/advisor";
import { advisorCourseCreate } from "@/services/advisorCoursesService";
import { createAdvisorCourse } from "@/interfaces/advisorCourses";

export default function CadastroOrientadorPage() {
  const { token } = useAuth();

  const [mensagem, setMensagem] = useState("");

  const [cursos, setCursos] = useState<Course[]>([]);
  const [carregandoCursos, setCarregandoCursos] = useState(false);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [idCurso, setIdCurso] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");

  const [errors, setErrors] = useState<{
    nome?: string;
    email?: string;
    cpf?: string;
    idCurso?: string;
    senha?: string;
    confirmSenha?: string;
  }>({});

  useEffect(() => {
    const authToken = token;

    if (!authToken) return;

    async function buscarCursos() {
      setCarregandoCursos(true);

      try {
        const cursosEncontrados = await getCourses();

        console.log(cursosEncontrados);

        setCursos(cursosEncontrados);
      } catch (error) {
        console.error(error);
        setMensagem("Erro ao carregar cursos");
      } finally {
        setCarregandoCursos(false);
      }
    }

    buscarCursos();
  }, [token]);

  async function handleCadastro(e: React.FormEvent) {
    e.preventDefault();

    if (!nome || !email || !cpf || !idCurso || !senha || !confirmSenha) {
      setErrors({
        nome: !nome ? "Campo obrigatório" : undefined,
        email: !email ? "Campo obrigatório" : undefined,
        cpf: !cpf ? "Campo obrigatório" : undefined,
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

    const AdvisorData: CreateAdvisorData = {
      name: nome,
      email: email,
      cpf: cpf,
      password: senha,
    };

    try {
      const resp = await createAdvisor(AdvisorData);
      console.log({ resp });

      const dataExpiracao = new Date();
      dataExpiracao.setFullYear(dataExpiracao.getFullYear() + 1);

      const VinculoData: createAdvisorCourse = {
        advisorId: Number(resp.data.props.id),
        courseId: Number(idCurso),
        expirationDate: dataExpiracao.toISOString().split("T")[0],
      };
      console.log({ VinculoData });
      await advisorCourseCreate(VinculoData);

      setMensagem("Orientador cadastrado com sucesso!");

      setNome("");
      setEmail("");
      setCpf("");
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
            Preencha os dados
          </p>

          <h1 className="text-4xl font-bold">
            Cadastro de orientador
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
                Dados do Orientador
              </span>
            </div>

            <div className="w-full space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Input
                  label="Nome"
                  placeholder="Digite o nome"
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                      cpf: !cpf ? "Campo obrigatório" : undefined,
                    }));
                  }}
                  error={errors.cpf}
                />

                <div className="w-full">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="curso">Curso vinculado</label>

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
                        {carregandoCursos
                          ? "Carregando cursos..."
                          : "Selecione"}
                      </option>

                      {cursos.map((curso) => (
                        <option key={curso.id} value={curso.id}>
                          {curso.code} - {curso.name}
                        </option>
                      ))}
                    </select>

                    <span
                      className={`block text-sm min-h-5 ${
                        errors.idCurso
                          ? "text-red-500 opacity-100"
                          : "opacity-0"
                      }`}
                    >
                      {errors.idCurso || " "}
                    </span>
                  </div>
                </div>

                <PasswordInput
                  label="Senha"
                  placeholder="Digite a senha"
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
