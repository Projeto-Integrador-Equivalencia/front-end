import React from "react";
import Background from "../ui/Background";

type Props = {} & React.HTMLAttributes<HTMLElement>;

export default function BackgroundWhiteRed({ children }: Props) {
  return (
    <Background>
      <div className="absolute inset-0 -z-10 flex flex-col bg-[linear-gradient(to_bottom,white_50%,#cc0000_50%)]" />
      {children}
    </Background>
  );
}
