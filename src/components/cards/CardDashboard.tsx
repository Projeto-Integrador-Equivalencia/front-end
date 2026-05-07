import React from "react";
import Card from "../ui/Card";

type Props = {} & React.HTMLAttributes<HTMLElement>;

export default function CardDashboard({ children, className }: Props) {
  return (
    <Card
      className={`max-w-[460px] max-h-[672px] w-full h-full place-items-center ${className}`}
    >
      <div className="mt-[70px]">{children}</div>
    </Card>
  );
}
//Lembrar de rodar assim:
// <div className="grid size-full grid-cols-* gap-* place-items-center">
// ***<CardDashboard />***
// </div>
