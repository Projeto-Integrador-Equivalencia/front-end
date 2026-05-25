import React from "react";
import { DecorativeDots } from "../ui/DecorativeDots";

interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="overflow-hidden relative w-full bg-zinc-950 text-white px-6 py-6 md:px-16 md:py-10 select-none border-t border-zinc-900">
      {/* Container alinhado para o conteúdo */}
      <div className="max-w-7xl mx-auto flex flex-col gap-2">
        {/* Descrição superior em Caixa Alta */}
        <span className="text-xs md:text-sm font-semibold tracking-widest text-zinc-400 uppercase">
          {description}
        </span>

        {/* Título Principal */}
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          {title}
        </h1>
      </div>
      <DecorativeDots variant="top" />
    </section>
  );
}
