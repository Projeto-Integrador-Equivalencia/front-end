import React from "react";
import Card from "../ui/Card";

type Props = {} & React.HTMLAttributes<HTMLElement>;

export default function CardWhite({ children, className }: Props) {
  return (
    <Card
      className={`rounded-2xl flex w-full max-w-6xl aspect-[16/9] overflow-auto ${className}`}
    >
      <div className="p-1 mx-auto">{children}</div>
    </Card>
  );
}
