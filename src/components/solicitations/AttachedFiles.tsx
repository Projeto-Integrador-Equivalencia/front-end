import { FileText, Image, Eye } from 'lucide-react';


export interface Documento {
  id?: number | string;
  nome: string;
  tamanho: string;
  onVisualizar?: () => void;
}


interface DocumentacaoAnexadaProps {
  documentos: Documento[];
  titulo?: string;
}

export default function DocumentacaoAnexada({ documentos, titulo = "Documentação Anexada" }: DocumentacaoAnexadaProps) {
  
  if (!documentos || documentos.length === 0) {
    return (
      <div className="w-full max-w-6xl mx-auto my-6 font-sans">
        <h2 className="text-xl font-bold text-gray-900 mb-4">{titulo}</h2>
        <p className="text-sm text-gray-500 italic">Nenhum documento anexado.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto my-6 font-sans">
      <h2 className="text-xl font-bold text-gray-900 mb-4">{titulo}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {documentos.map((doc: Documento, index: number) => {
          const ehImagem = doc.nome.toLowerCase().endsWith('.jpg') || 
                           doc.nome.toLowerCase().endsWith('.jpeg') || 
                           doc.nome.toLowerCase().endsWith('.png');

          return (
            <div 
              key={doc.id || index} 
              className="flex items-center justify-between p-4 bg-[#fcfcfc] border border-gray-200 rounded-md shadow-sm"
            >
              <div className="flex items-center gap-3 min-w-0">
                {ehImagem ? (
                  <div className="text-[#20a494] bg-[#eefaf8] p-2 rounded-md shrink-0">
                    <Image className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                ) : (
                  <div className="text-[#ea4335] bg-[#fdf2f2] p-2 rounded-md shrink-0">
                    <FileText className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                )}

                <div className="min-w-0">
                  <p className="text-sm font-semibold text-gray-800 truncate" title={doc.nome}>
                    {doc.nome}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {doc.tamanho}
                  </p>
                </div>
              </div>

              <button 
                type="button"
                onClick={() => doc.onVisualizar?.() || alert(`Abrindo: ${doc.nome}`)}
                className="text-[#007fff] hover:text-blue-700 p-1.5 rounded-full hover:bg-blue-50 transition-colors shrink-0"
                aria-label={`Visualizar ${doc.nome}`}
              >
                <Eye className="w-5 h-5" strokeWidth={2.5} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}