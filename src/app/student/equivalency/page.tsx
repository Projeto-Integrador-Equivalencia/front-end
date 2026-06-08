"use client";

import { UploadButton } from "@/components/ui/UploadButton";
import CardBlackWhite from "@/components/cards/CardBalckWhite";
import EquivalencySelect from "@/components/inputs/EquivalencySelect";
import BackgroundWhiteRed from "@/components/backgrounds/WhiteRedBackground";
import Input from "@/components/ui/Input";
import { FormEvent, useState } from "react";
import { useAuth } from "@/hooks/userAuth";
import { CreateRequestInput } from "@/interfaces/requests";
import { createRequest } from "@/services/requestService";

const equivalencyIds: Record<string, number> = {
  CTPS: 1,
  Militar: 2,
  "Autônomo Inscrito": 3,
  "Autônomo Não Inscrito": 4,
  Proprietário: 5,
};

export default function Equivalency() {
  const [equivalencia, setEquivalencia] = useState("");

  const { user, token } = useAuth();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validação inicial do Select
    if (!equivalencia) {
      alert("Por favor, selecione um tipo de equivalência.");
      return;
    }

    const currentForm = e.currentTarget;
    const formData = new FormData(currentForm);
    const arquivosPreenchidos = (formData.getAll("files") as File[]).filter(
      (file) => file.name !== "" && file.size > 0,
    );

    if (arquivosPreenchidos.length === 0) {
      alert("Por favor, faça upload de pelo menos um documento obrigatório.");
      return;
    }

    const dadosFormulario: CreateRequestInput = {
      advisorId: null,
      equivalencyId: equivalencyIds[equivalencia],
      studentId: user!.id,
      experiences: [
        {
          role: String(formData.get("role")),
          cnpj: String(formData.get("cnpj")),
          startDate: new Date(String(formData.get("startDate"))).toISOString(),
          endDate: formData.get("endDate")
            ? new Date(String(formData.get("endDate"))).toISOString()
            : new Date().toISOString(),
        },
      ],
      files: arquivosPreenchidos,
    };
    console.log({ formData });

    // if (!dadosFormulario.termosAceitos) {
    //   alert("Você precisa aceitar os termos e condições para avançar.");
    //   return;
    // }

    console.log("Dados prontos para envio:", dadosFormulario);

    try {
      await createRequest(dadosFormulario, token || "");
      alert("Solicitação enviada com sucesso!");
      currentForm.reset(); // Limpa o formulário após o sucesso
      setEquivalencia("");
    } catch (error: any) {
      console.error("Erro ao enviar:", error);
      console.log("Objeto de erro do Backend:", error.response.data);
      alert("Ocorreu um erro ao enviar a solicitação.");
    }
  };

  const uploadButtonsPorEquivalencia: Record<string, React.ReactNode[]> = {
    CTPS: [
      <UploadButton
        key="ctps-capa"
        id="ctps-capa"
        name="files"
        text="1ª página da carteira de trabalho"
      />,
      <UploadButton
        key="ctps-contrato"
        id="ctps-contrato"
        name="files"
        text="Página do registro do contrato de trabalho"
      />,
      <UploadButton
        key="dados-pessoais-ctps"
        id="dados-pessoais"
        name="files"
        text="Documento que contém o RG e CPF"
      />,
    ],
    Militar: [
      <UploadButton
        key="militar-cartao"
        id="militar-cartao"
        name="files"
        text="Cópia de cartão de identificação"
      />,
      <UploadButton
        key="militar-relatorio"
        id="militar-relatorio"
        name="files"
        text="Relatório do oficial superior"
      />,
      <UploadButton
        key="dados-pessoais-militar"
        id="dados-pessoais"
        name="files"
        text="Documento que contém o RG e CPF"
      />,
    ],
    "Autônomo Inscrito": [
      <UploadButton
        key="autonomo-inscricao"
        id="autonomo_inscrito-inscricao"
        name="files"
        text="Inscrição nos órgãos competentes"
      />,
      <UploadButton
        key="autonomo-declaracao"
        id="autonomo_inscrito-declaracao"
        name="files"
        text="Declaração do Contador da Empresa"
      />,
      <UploadButton
        key="dados-pessoais-inscrito"
        id="dados-pessoais"
        name="files"
        text="Documento que contém o RG e CPF"
      />,
    ],
    "Autônomo Não Inscrito": [
      <UploadButton
        key="autonomo-nao-declaracao"
        id="autonomo_nao_inscrito-declaracao"
        name="files"
        text="Declaração de atividade exercida, com firma reconhecida"
      />,
      <UploadButton
        key="dados-pessoais-nao-inscrito"
        id="dados-pessoais"
        name="files"
        text="Documento que contém o RG e CPF"
      />,
    ],
    Proprietário: [
      <UploadButton
        key="proprietario-social"
        id="proprietario-social"
        name="files"
        text="Contrato Social"
      />,
      <UploadButton
        key="proprietario-declaracao"
        id="proprietario-declaracao"
        name="files"
        text="Declaração do Contador da Empresa"
      />,
      <UploadButton
        key="dados-pessoais-proprietario"
        id="dados-pessoais"
        name="files"
        text="Documento que contém o RG e CPF"
      />,
    ],
  };
  return (
    <BackgroundWhiteRed>
      <div className="flex flex-col min-h-screen w-full">
        <form onSubmit={onSubmit} className="flex flex-col min-h-screen w-full">
          <main className=" flex flex-col items-center w-full px-4 pt-2 pb-10">
            <div className="w-full max-w-275 -mt-12 mb-12 text-left">
              <p className="text-zinc-500 mt-20 uppercase text-xs font-bold tracking-widest">
                Solicitação de Estágio de Equivalência
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-zinc-900">
                Selecione o tipo de equivalência
                <span className="text-red-600">.</span>
              </h1>
            </div>

            <CardBlackWhite
              leftContent={
                <div className="w-full h-full flex flex-col justify-start space-y-6 pt-0">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-3 bg-red-600 rounded-full"></div>
                      <span className="text-[10px] text-white font-bold uppercase tracking-tighter">
                        Tipo de Equivalência
                      </span>
                    </div>
                    <EquivalencySelect
                      value={equivalencia}
                      onChange={setEquivalencia}
                    />
                  </div>

                  {equivalencia && (
                    <div className="space-y-4 flex flex-col">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-3 bg-red-600 rounded-full"></div>
                        <span className="text-[10px] text-white font-bold uppercase tracking-tighter">
                          Upload de Arquivos
                        </span>
                      </div>
                      {uploadButtonsPorEquivalencia[equivalencia]}
                    </div>
                  )}
                </div>
              }
              rightContent={
                <div className="w-full h-full flex flex-col justify-start space-y-4 pt-0 -mt-20">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-3 bg-red-600 rounded-full"></div>
                    <span className="text-[10px] text-zinc-800 font-bold uppercase tracking-tighter">
                      Termos de Documentação
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <Input label="Profissão" name="role" required></Input>
                    <Input label="CNPJ" name="cnpj" required></Input>
                    <Input
                      label="Data de inicio de contrato"
                      name="startDate"
                      type="date"
                    ></Input>
                    <Input
                      label="Data de finalização de contrato"
                      name="endDate"
                      type="date"
                    ></Input>
                  </div>

                  <div className="flex items-center gap-3 py-2">
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded border-zinc-300 accent-red-600"
                      id="check-termos"
                    />
                    <label
                      htmlFor="check-termos"
                      className="text-[11px] text-zinc-600 leading-tight"
                    >
                      Li e aceito os{" "}
                      <span className="underline font-bold cursor-pointer">
                        termos e condições
                      </span>
                      .
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-2/4 bg-red-700 text-white hover:bg-red-800 font-bold py-4 rounded-md transition-colors"
                  >
                    SOLICITAR EQUIVALÊNCIA
                  </button>
                </div>
              }
            />
          </main>
        </form>
      </div>
    </BackgroundWhiteRed>
  );
}
