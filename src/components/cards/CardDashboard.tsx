import React from "react";
import Card from "../ui/Card";

type Props = {
} & React.HTMLAttributes<HTMLElement>;

export default function CardDashboard({
  children
}: Props) {
  return (
      <Card className="max-w-[460px] max-h-[672px] mx-auto w-[27%] h-[70%] place-items-center">
       <div className="mt-[70px]">
        {children}
       </div>
      </Card>
  );
}