import React from "react";

type InputProps = {
  label?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  label,
  error,
  ...props
}: InputProps) {
  return (
    <div>
      {label && <label>{label}</label>}

      <input {...props} />

      {error && <span>{error}</span>}
    </div>
  );
}