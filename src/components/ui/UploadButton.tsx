import React, { useState } from "react";
import "@/app/globals.css";

interface PropsUpload {
  id: string;
  text: string;
  className?: string;
}

function UploadIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.83333 10V3.20833L3.66667 5.375L2.5 4.16667L6.66667 0L10.8333 4.16667L9.66667 5.375L7.5 3.20833V10H5.83333ZM1.66667 13.3333C1.20833 13.3333 0.816111 13.1703 0.49 12.8442C0.163889 12.5181 0.000555556 12.1256 0 11.6667V9.16667H1.66667V11.6667H11.6667V9.16667H13.3333V11.6667C13.3333 12.125 13.1703 12.5175 12.8442 12.8442C12.5181 13.1708 12.1256 13.3339 11.6667 13.3333H1.66667Z"
        fill="#121212"
      />
    </svg>
  );
}

function AddIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.16667 4.16667H7.5V7.5H4.16667V9.16667H7.5V12.5H9.16667V9.16667H12.5V7.5H9.16667V4.16667ZM8.33333 0C3.73333 0 0 3.73333 0 8.33333C0 12.9333 3.73333 16.6667 8.33333 16.6667C12.9333 16.6667 16.6667 12.9333 16.6667 8.33333C16.6667 3.73333 12.9333 0 8.33333 0ZM8.33333 15C4.65833 15 1.66667 12.0083 1.66667 8.33333C1.66667 4.65833 4.65833 1.66667 8.33333 1.66667C12.0083 1.66667 15 4.65833 15 8.33333C15 12.0083 12.0083 15 8.33333 15Z"
        fill="#9C9C9C"
      />
    </svg>
  );
}



export function UploadButton({
  id,
  text,
  className,
}: PropsUpload) {

  const [fileName, setFileName] = useState(text);

  function handleFileChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (file) {
      setFileName(file.name);
    }
  }

  return (
    <label
      htmlFor={id}
      className={`flex items-center w-full bg-white text-c11 border-2 px-5 py-3 rounded-md font-medium cursor-pointer ${className}`}
    >
      <UploadIcon />

      <span className="ml-3 text-sm text-zinc-400">
        {fileName}
      </span>

      <input
        type="file"
        name={id}
        id={id}
        className="hidden"
        accept="image/*,.pdf"
        multiple
        onChange={handleFileChange}
      />
    </label>
  );
}
interface AddUpProps {
  id: string;
  onClick?: React.MouseEventHandler;
}

export function AddUpButton({ id, onClick }: AddUpProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center w-full bg-c10 text-c06 px-5 py-3 rounded-md font-select font-medium`}
    >
      <AddIcon />
      <label className="ml-2">Adicionar mais arquivos...</label>
    </button>
  );
}
