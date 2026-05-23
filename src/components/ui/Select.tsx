import { recvTaskMessageInWorker } from "next/dist/build/swc/generated-native";
import React from "react";

export type SelectProps = {
  label?: string;
  id?: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export type OptionProps = {
  id?: string;
  value?: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Option({ id, value, className, children }: OptionProps) {
  return (
    <option id={id} value={value} className={className}>
      {children}
    </option>
  );
}

function Rect() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="24"
      viewBox="0 0 16 24"
      fill="fill"
      aria-hidden="true"
      style={{ display: "inline" }}
    >
      <g>
        <rect fill="#FF0000" id="rect1" width="4" height="10" x="0" y="6" />
      </g>
    </svg>
  );
}

export function Select({ label, id, className, children }: SelectProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          className="font-select text-xs text-c05 tracking-wider font-semibold uppercase"
          htmlFor={id}
        >
          <Rect /> {label}
        </label>
      )}

      <div className="relative my-4">
        <select
          id={id}
          className={`w-full bg-white text-c11 border-2 px-5 py-3 rounded-md font-select font-medium ${className}`}
        >
          {children}
        </select>
      </div>
    </div>
  );
}
