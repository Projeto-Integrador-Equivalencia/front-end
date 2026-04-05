import { useState } from "react";
import Input from "../ui/Input";

type Props = {
  label?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function PasswordInput({
  ...props
}: Props) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Input
        type={show ? "text" : "password"}
        {...props}
      />

      <button type="button" onClick={() => setShow(!show)}>
        {show ? "Ocultar" : "Mostrar"}
      </button>
    </div>
  );
}