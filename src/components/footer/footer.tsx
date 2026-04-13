"use client";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white px-6 py-10 md:pt-[60px] md:pb-10 font-sans box-border">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          
          {/* Coluna 1 - Logo Fatec */}
          <div className="flex-1 flex items-start">
            <Image
              src="/images/logo-fatec.png"
              alt="Logo Fatec Atibaia"
              width={150}
              height={50}
              className="max-w-full h-auto"
              priority
            />
          </div>

          {/* Coluna 2 - Contato */}
          <div className="flex-1">
            <h2 className="text-[14px] font-bold uppercase mb-4">Contato</h2>
            <p className="text-[13px] text-zinc-300 leading-relaxed my-1">(11) 4402-1047 / 4402 1010</p>
            <p className="text-[13px] text-zinc-300 leading-relaxed my-1">f309adm@cps.sp.gov.br</p>

            {/* Linha Divisória 1 - Largura fixa conforme seu teste anterior */}
            <div className="block h-[1px] bg-zinc-800 my-3 w-[202px]"></div>

            <p className="text-[13px] text-zinc-300 leading-relaxed my-1">Avenida Jerônimo de Camargo, 421</p>
            <p className="text-[13px] text-zinc-300 leading-relaxed my-1">Caetetuba, Atibaia - SP</p>

            {/* Linha Divisória 2 */}
            <div className="block h-[1px] bg-zinc-800 my-3 w-[202px]"></div>

            {/* Instagram - margin-left negativa para compensar o ícone */}
            <div className="mt-3 flex justify-start">
              <a
                href="https://instagram.com/fatecatibaia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/Instagram.png"
                  alt="Siga-nos no Instagram"
                  width={30}
                  height={30}
                  className="brightness-0 invert transition-transform duration-200 hover:scale-110"
                />
              </a>
            </div>
          </div>

          {/* Coluna 3 - Institucional */}
          <div className="flex-1 md:text-right md:flex md:flex-col md:items-end">
            <div className="flex items-center gap-2 mb-5">
              <Image
                src="/images/SP.png"
                alt="SP"
                width={80}
                height={30}
                className="brightness-0 invert block" 
              />

              {/* Traço Vertical */}
              <div className="w-[2px] h-[25px] bg-white block mx-0"></div>

              <Image
                src="/images/CPS.png"
                alt="CPS"
                width={40}
                height={30}
                className="brightness-0 invert block"
              />
            </div>
            <p className="text-[13px] text-zinc-300 leading-relaxed my-1">SP.GOV</p>
            <p className="text-[13px] text-zinc-300 leading-relaxed my-1">Centro Paula Souza</p>
            <p className="text-[13px] text-zinc-300 leading-relaxed my-1">Fatec Atibaia</p>
          </div>
        </div>

        {/* Copyright sem a borda superior conforme solicitado */}
        <div className="mt-[60px] text-[11px] text-zinc-500 border-none">
          Fatec© Direitos Reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;