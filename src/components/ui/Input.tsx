import React from "react";

export type InputProps = {
  label?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  label,
  error,
  id,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label htmlFor={id}>{label}</label>}

      <div className="relative">
        <input
          id={id}
          aria-invalid={!!error}
          className={`font-semibold focus:outline-none focus:ring-2 rounded-md p-2 w-full bg-(--c01)
          ${
            error
              ? "border border-red-500 focus:ring-red-500"
              : "border border-gray-300 focus:ring-blue-600"
          }${className}`}
          {...props}
        />
      </div>

      <span
        className={`block text-sm min-h-5 ${
          error ? "text-red-500 opacity-100" : "opacity-0"
        }`}
      >
        {error || " "}
      </span>
    </div>
  );
}