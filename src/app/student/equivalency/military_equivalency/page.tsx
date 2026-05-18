"use client";

import CardBlackWhite from "@/components/cards/CardBalckWhite";
import EquivalencySelect from "@/components/inputs/EquivalencySelect";
import BackgroundWhiteRed from "@/components/backgrounds/WhiteRedBackground";

export default function MilitaryEquivalency() {
  return (
    <BackgroundWhiteRed>
      <div className="flex flex-col min-h-screen w-full">
        <main className="grow flex flex-col items-center justify-start w-full px-4 pt-4 pb-10">
          <div className="w-full max-w-275 pt-8 mb-16 text-left">
            <p className="text-zinc-500 uppercase text-xs font-bold tracking-widest">
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
                  <EquivalencySelect />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-3 bg-red-600 rounded-full"></div>
                    <span className="text-[10px] text-white font-bold uppercase tracking-tighter">
                      Upload de Arquivo
                    </span>
                  </div>

                  <div className="bg-white p-3 rounded-lg flex items-center gap-3">
                    <img src="/images/setaUpload.svg" />
                    <span className="text-sm text-zinc-400">
                      Cópia de cartão de identificação
                    </span>
                  </div>

                  <div className="bg-white p-3 rounded-lg flex items-center gap-3">
                    <img src="/images/setaUpload.svg" />
                    <span className="text-sm text-zinc-400">
                      Relatório do oficial superior
                    </span>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    type="button"
                    className=" ml-12 w-3/4 bg-white text-black hover:bg-zinc-200 font-bold py-4 rounded-sm transition-all uppercase text-sm tracking-widest"
                  >
                    AVANÇAR
                  </button>
                </div>
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
                  <label className="text-xs font-bold text-zinc-700 ml-1">
                    Termos
                  </label>
                  <textarea
                    placeholder="Eu, (Seu nome) declaro que..."
                    className="w-full h-90 p-4 bg-zinc-50 border border-zinc-200 rounded-xl text-sm text-zinc-600 outline-none resize-none italic"
                  />
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
      </div>
    </BackgroundWhiteRed>
  );
}
