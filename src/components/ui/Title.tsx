import React from "react";

type TitleProps = {
    className?: string;
    children?: React.ReactNode;
} & React.HTMLAttributes<HTMLHeadingElement>;

export default function Title({
  children,
  className=""
}: TitleProps) {
  return (
    <div className="mt-15 max-ml-[80px] ml-[10%]">
      <h1 className={`text-6xl font-bold z-10 ${className}`}>{children}</h1>
    </div>
  );
}