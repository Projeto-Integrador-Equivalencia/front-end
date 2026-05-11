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
    <div className={`relative h-screen flex flex-col ${className}`}>
      {children}
    </div>
  );
}
