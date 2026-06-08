

export interface AcaoHistorico {
  id?: number | string;
  data: string;
  acao: string;
  autor: string;
  tipoStatus: 'criado' | 'analise' | 'aprovado'; 
}

interface ActionHistoryProps {
  requestId: string | number;
  historico?: any[];
  titulo?: string;
}

export default function ActionHistory({ requestId, historico = [] }: ActionHistoryProps){

 const listaDeAcoes = historico.length > 0 ? historico : [
    { data: "08, Fev, 2026", acao: "Solicitação Criada", autor: "Guilherme" }
  ];


  const renderizarIconeStatus = (tipo: string) => {
    switch (tipo) {
      case 'criado':
        return (
          <div className="text-[#f1b404] bg-white z-10 p-0.5 rounded-full">
            {/* Ícone de Relógio (Amarelo) */}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
        );
      case 'analise':
        return (
          <div className="text-[#006fee] bg-white z-10 p-0.5 rounded-full">
            {/* Ícone de Olho (Azul) */}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
        );
      case 'aprovado':
        return (
          <div className="text-[#17b204] bg-white z-10 p-0.5 rounded-full">
            {/* Ícone de Check/Sucesso (Verde) */}
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        );
      default:
        return <div className="w-5 h-5 bg-gray-300 rounded-full z-10" />;
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto my-6 font-sans">
      {/* Título */}
      <h2 className="text-xl font-bold text-gray-900 mb-6">Histórico de Ações</h2>

      {/* Container da Timeline */}
      <div className="relative flex flex-col pl-2">
        
        {/* Linha Vertical Cinza de fundo que conecta os pontos */}
        <div className="absolute left-4.25 top-3 bottom-3 w-px bg-gray-200 z-0" />

        {/* Mapeamento dos itens */}
        {listaDeAcoes.map((item, index) => (
          <div 
            key={item.id || index} 
            className="flex flex-col sm:flex-row sm:items-center items-start gap-4 sm:gap-12 relative py-4 first:pt-0 last:pb-0"
          >
            {/* Coluna 1: Ícone + Data */}
            <div className="flex items-center gap-4 min-w-35">
              {renderizarIconeStatus(item.tipoStatus)}
              <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">
                {item.data}
              </span>
            </div>

            {/* Coluna 2: Nome da Ação */}
            <div className="sm:min-w-50 pl-9 sm:pl-0">
              <span className="text-sm text-gray-800">
                Ação: <span className="font-semibold">{item.acao}</span>
              </span>
            </div>

            {/* Coluna 3: Autor da Ação */}
            <div className="pl-9 sm:pl-0">
              <span className="text-sm text-gray-600">
                Autor: <span className="font-semibold text-gray-700">{item.autor}</span>
              </span>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
