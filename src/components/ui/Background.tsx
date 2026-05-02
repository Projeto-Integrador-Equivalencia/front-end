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
    <div
      className={`bg-c01 relative -z-50 h-screen flex flex-col ${className}`}
    >
      {children}
    </div>
  );
}