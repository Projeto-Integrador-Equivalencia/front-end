"use client";

import { option } from "@/interfaces/equivalency";

interface EquivalencySelectProps {
  value?: number;
  options: option[]
  onChange: (value: number) => void;
}

export default function EquivalencySelect({value, options, onChange}: EquivalencySelectProps) {
  return (
    <select
        id="equivalencia-select"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full p-3 rounded-lg bg-white text-sm text-zinc-800 outline-none"
      >
        <option value="">-- Selecione o tipo para envio de arquivos --</option>
        
        {options.map((opcao) => (
          <option key={opcao.value} value={opcao.value}>
            {opcao.label}
          </option>
        ))}
      </select>
  );
}