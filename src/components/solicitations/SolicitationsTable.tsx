"use client";
import React, { useState } from "react";
import Table from "@/components/ui/Table/Table";
import SolicitationsRow from "./SolicitationsRow";
import EmptyState from "@/components/ui/Table/EmptyState";
import TableHeader from "../ui/Table/TableHeader";

export default function SolicitationsTable({ data }: any) {
 
  if (!data || !data.length) return <EmptyState />;

  // 2. Adicionada a coluna "Ações" para alinhar com o botão de Visualizar
  const ColunasTabela = [
    "Equivalência",
    "Aluno",
    "Status",
    "Orientador",
    "Protocolo",
    "Criado em",
    "Ações", 
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <div>
        <TableHeader columns={ColunasTabela} />
        <Table>
          {currentData.map((item: any, index: number) => (
            // O seu SolicitationsRow agora vai encaixar perfeitamente aqui com as 7 colunas
            <SolicitationsRow key={`solicitacao-${index}`} item={item} />
          ))}
        </Table>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm text-gray-600">
            Página {currentPage} de {totalPages}
          </span>
          <div className="flex gap-2">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50"
            >
              Anterior
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-3 py-1 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50"
            >
              Próxima
            </button>
          </div>
        </div>
      )}
    </div>
  );
}