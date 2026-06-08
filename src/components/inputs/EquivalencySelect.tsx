"use client";

interface EquivalencySelectProps {
  value: string;
  onChange: (value: string) => void;
}

export default function EquivalencySelect({value, onChange}: EquivalencySelectProps) {
  const opcoes = [
    { value: "CTPS", label: "CTPS" },
    { value: "Militar", label: "Militar" },
    { value: "Autônomo Inscrito", label: "Autônomo Inscrito" },
    { value: "Autônomo Não Inscrito", label: "Autônomo Não Inscrito" },
    { value: "Proprietário", label: "Proprietário" }
  ];

  return (
    <select
        id="equivalencia-select"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-3 rounded-lg bg-white text-sm text-zinc-800 outline-none"
      >
        <option value="">-- Selecione o tipo para envio de arquivos --</option>
        
        {opcoes.map((opcao) => (
          <option key={opcao.value} value={opcao.value}>
            {opcao.label}
          </option>
        ))}
      </select>
  );
}