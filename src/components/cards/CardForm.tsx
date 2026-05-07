import React from "react";
import Card from "../ui/Card";

type Props = {} & React.HTMLAttributes<HTMLElement>;

export default function CardForm({ children, className, onSubmit }: Props) {
  return (
    <Card
      className={`rounded-2xl flex w-full max-w-6xl aspect-[16/9] overflow-auto ${className}`}
    >
      {/* Lado Esquerdo */}
      <div className="w-0 sm:w-1/2 overflow-hidden rounded-2xl">
        <img
          src="/images/ciemIII.jpeg"
          alt="Foto Fatec Atibaia"
          className="h-full w-full object-cover"
        />
      </div>
      {/* Lado Direito */}
      <div className="sm:w-1/2 p-1 mx-auto">
        <form onSubmit={onSubmit} className="items-center p-1.5 sm:p-6">
          {children}
        </form>
      </div>
    </Card>
  );
}
