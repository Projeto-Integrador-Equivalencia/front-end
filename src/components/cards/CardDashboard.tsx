import React from "react";
import Card from "../ui/Card";

type Props = {} & React.HTMLAttributes<HTMLElement>;

export default function CardDashboard({ children }: Props) {
  return (
    <Card className="max-w-[460px] max-h-[672px] mx-auto w-full h-full place-items-center">
      <div className="mt-[70px]">{children}</div>
    </Card>
  );
}
//Lembrar de rodar assim:
// <div className="grid size-full grid-cols-* gap-* place-items-center">
// ***<CardDashboard />***
// </div>
