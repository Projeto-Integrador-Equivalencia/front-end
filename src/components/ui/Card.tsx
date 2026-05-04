import React from "react";

type CardProps = {
  className?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white overflow-hidden shadow-2xl shadow-black/80 ${className}`}
    >
      {children}
    </div>
  );
}
