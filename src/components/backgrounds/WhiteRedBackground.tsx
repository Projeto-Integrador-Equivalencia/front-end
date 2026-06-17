import React from "react";
import Background from "../ui/Background";

type Props = {} & React.HTMLAttributes<HTMLElement>;

export default function BackgroundWhiteRed({ children, className }: Props) {
  return (
    <Background>
      <div
        className={`absolute bottom-0 left-0 z-0 w-full h-3/4 rounded-xl md:h-1/2 md:rounded-none bg-[#cc0000] ${className}`}
      />
      <div className="relative z-10 flex-1 flex flex-col w-full h-full">
        {children}
      </div>
    </Background>
  );
}
