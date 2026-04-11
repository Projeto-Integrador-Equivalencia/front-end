
import React from "react";
import '@/app/globals.css'




interface Props {
    label: string;
    type?: "submit" | "reset" | "button" | undefined;
    variant?: "primary" | "secondary" | "tertiary";
    onClick?: React.MouseEventHandler;
}
// Colocar 'use client'; no começo dos arquivos que vão usar o botão

export default function Button({ label, variant = "primary", type, onClick }: Props) {
    const styles = "px-4 py-2 rounded-md fount-medium transition all"
    const variants = {
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        secondary: "bg-gray-500 text-white hover:bg-gray-600",
        tertiary: "bg-red-500 text-white hover:bg-red-600",
    };

    return <button onClick={onClick} type={type} className={`${styles} ${variants[variant]}`}>{label}</button>;
}