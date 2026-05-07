import React from "react";

type CardProps = {
  className?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white shadow-2xl shadow-black/80 mt-5 mb-5 mx-auto ${className}`}
    >
      {children}
    </div>
  );
}
