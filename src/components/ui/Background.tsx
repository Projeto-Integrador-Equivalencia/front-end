import React from "react";

type BackgroundProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function Background({
  className = "",
  children,
}: BackgroundProps) {
  return (
    <div className={`relative min-h-screen flex flex-col bg-c02 ${className}`}>
      {children}
    </div>
  );
}
