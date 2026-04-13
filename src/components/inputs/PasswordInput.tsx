"use client";

import { useState } from "react";
import Input, { InputProps } from "../ui/Input";

export default function PasswordInput(props: InputProps) {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col gap-1">
      <div className="relative">
        <Input
          type={show ? "text" : "password"}
          className="pr-16" 
          {...props}
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-600 hover:text-black"
        >
          {show ? "Ocultar" : "Mostrar"}
        </button>
      </div>
    </div>
  );
}