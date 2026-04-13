import React from "react";
import Background from "../ui/Background";


export default function BackgroundWhiteRed({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Background>
      {children}
      <div className="bg-[#cc0000] fixed -z-10 bottom-0 h-[50%] w-full"></div>
    </Background>
  );
}