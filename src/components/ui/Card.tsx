import React from "react";

type TitleProps = {
    className?: string;
    children?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export default function Card({
    children,
    className=""
}: TitleProps) {
  return (
    <div className={`bg-white overflow-hidden mx-auto shadow-2xl shadow-black/80 ${className}`}>
        {children}
    </div>
  );
}