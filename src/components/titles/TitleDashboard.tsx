import React from "react";
import Title from "../ui/Title";

type Props = {
} & React.HTMLAttributes<HTMLElement>;

export default function TitleDashboard({
  children
}: Props) {
  return (
      <Title className="">{children}</Title>
  );
}