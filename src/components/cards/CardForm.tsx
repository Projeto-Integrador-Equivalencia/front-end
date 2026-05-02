import React from "react";
import Card from "../ui/Card";

type Props = {
} & React.HTMLAttributes<HTMLElement>;

export default function CardForm({
    children, 
    onSubmit 
}: Props) {
  return (
    <div className="bg-white rounded-2xl flex overflow-hidden mx-auto w-screen sm:w-[80%] h-162.5 shadow relative ">
      {/* Lado Esquerdo */}
      <div className="w-0 sm:w-1/2">
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
    </div>
  );
}