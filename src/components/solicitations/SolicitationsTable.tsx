"use client";

import React, { useState } from "react";
import Table from "@/components/ui/Table/Table";
import SolicitationsRow from "./SolicitationsRow";
import EmptyState from "@/components/ui/Table/EmptyState";
import TableHeader from "../ui/Table/TableHeader";

export default function SolicitationsTable({ data }: any) {
  if (!data || !data.length) return <EmptyState />;

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
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <TableHeader columns={ColunasTabela} />
      <Table>
        {currentData.map((item: any, index: number) => (
          <SolicitationsRow key={index} item={item} />
        ))}
      </Table>
    </div>
  );
}