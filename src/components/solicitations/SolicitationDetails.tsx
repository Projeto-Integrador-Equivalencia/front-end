import React, { ReactNode } from 'react';

interface SolicitationDetailsProps {
  data?: {
    request?: {
      props?: {
        equivalencyId: ReactNode;
        protocol: string;
        status: string;
        createdAt: string;
        Professional_Experience?: Array<{
          role: string;
          cnpj: string;
        }>;
      };
    };
  };
}

export default function SolicitationDetails({ data }: SolicitationDetailsProps) {
  if (!data || !data.request || !data.request.props) {
    return (
      <div className="w-full py-4 text-center text-sm text-gray-500 animate-pulse">
        Carregando informações gerais...
      </div>
    );
  }

  const details = data.request.props;
  const experiencia = details.Professional_Experience?.[0];

  const dataCriacao = new Date(details.createdAt).toLocaleDateString('pt-BR');

  return (
    <div className="w-full">
      
      <h2 className="text-xl font-bold text-gray-900 mb-4">Informações Gerais</h2>
      
      <hr className="border-gray-200 mb-6" />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        
        <div className="flex flex-col gap-2 sm:pr-6 sm:border-r border-gray-200">
          <span className="text-xs font-bold text-gray-500 tracking-wider uppercase">
            Dados do Protocolo
          </span>
          <div className="flex flex-col gap-1 text-sm text-gray-800">
            <span className="font-medium">Protocolo: {details.protocol}</span>
            <span>Status Atual: <span className="font-semibold text-yellow-600">{details.status}</span></span>
            <span>Criado em: {dataCriacao}</span>
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:px-6 sm:border-r border-gray-200">
          <span className="text-xs font-bold text-gray-500 tracking-wider uppercase">
            Experiência Profissional
          </span>
          {experiencia ? (
            <div className="flex flex-col gap-1 text-sm text-gray-800">
              <span className="font-medium">{experiencia.role}</span>
              <span>CNPJ: {experiencia.cnpj}</span>
            </div>
          ) : (
            <span className="text-sm text-gray-400 italic">Nenhuma experiência registrada</span>
          )}
        </div>

        <div className="flex flex-col gap-2 sm:pl-6">
          <span className="text-xs font-bold text-gray-500 tracking-wider uppercase">
            Solicitação
          </span>
          <div className="flex flex-col gap-1 text-sm text-gray-800">
            
            <span>ID do Tipo: {details.equivalencyId}</span>
          </div>
        </div>

      </div>
    </div>
  );
}