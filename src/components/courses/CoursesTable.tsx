"use client";

import { useState } from "react";

import Table from "@/components/ui/Table/Table";
import type { Course } from "@/interfaces/course";

import CoursesRow from "./CoursesRow";
import EmptyState from "../ui/Table/EmptyState";
import TableHeader from "../ui/Table/TableHeader";

interface CoursesTableProps {
  data: Course[];
}

export default function CoursesTable({ data }: CoursesTableProps) {
  const [currentPage, setCurrentPage] = useState(1);

  if (!data.length) return <EmptyState />;

  const ColunasTabela = [
    "Nome",
    "Codigo",
    "Criado por",
    "Semestres",
    "Turno",
    "Criado em",
  ];
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
          {currentData.map((item) => (
            <CoursesRow key={item.id} item={item} />
          ))}
        </Table>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm text-gray-600">
            Pagina {currentPage} de {totalPages}
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
              Proxima
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
