import React from "react";
import Card from "../ui/Card";

type Props = {
} & React.HTMLAttributes<HTMLElement>;

export default function CardDashboard({
  children
}: Props) {
  return (
      <Card className="max-w-115 max-h-168 mx-auto w-[27%] h-[70%] place-items-center">
       <div className="mt-17.5">
        {children}
       </div>
      </Card>
  );
}