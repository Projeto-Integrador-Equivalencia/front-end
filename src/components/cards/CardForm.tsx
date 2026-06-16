import React from "react";
import Card from "../ui/Card";

type Props = {} & React.HTMLAttributes<HTMLElement>;

export default function CardForm({ children, className, onSubmit }: Props) {
  return (
    <Card
      className={`rounded-2xl flex w-[90%] md:w-full max-w-6xl md:aspect-video overflow-auto ${className}`}
    >
      <div className="w-0 sm:w-1/2 overflow-hidden rounded-2xl">
        <img
          src="/images/ciemIII.jpeg"
          alt="Foto Fatec Atibaia"
          className="h-full w-full object-cover"
        />
      </div>
      
      <div className="w-full sm:w-1/2 p-1 mx-auto">
        <div className="items-center p-1.5 sm:p-6">
          {children}
        </div>
      </div>
    </Card>
  );
}
