
import React from "react";
import '@/app/globals.css'


interface Props {
    label: string;
    type?: "submit" | "reset" | "button" | undefined;
    variant?: "primary" | "mobileReverse" | "mobile";
    onClick?: React.MouseEventHandler;
}
// Colocar 'use client'; no começo dos arquivos que vão usar o botão

export default function Button({ label, variant = "primary", type, onClick }: Props) {
    const stylesClasses = "font-medium transition all font-poppins px-8 py-2"
    const style = {};

    const whiteBorder = "border-2 border-01 border-solid";
    const fatecGrad = "bg-gradient-to-r from-p05 to-p01"

    const variants = {
        primary: "rounded-sm text-c01 bg-button-1",
        mobile: `rounded-full text-c01 ${fatecGrad} hover:text-c12`,
        mobileReverse: `rounded-full text-c12 hover:text-c01`
    };

    const variantsHover = {
        primary: "rounded-sm hover:bg-button-2",
        mobile: `rounded-full ${whiteBorder} hover:bg-c01 `,
        mobileReverse: `rounded-full ${whiteBorder} bg-c01 hover:bg-transparent`
    };

    return <button onClick={onClick} type={type} style={style} className={`${variants[variant]} transition`}>
            <span className={`block ${stylesClasses} ${variantsHover[variant]} transition`}>
            {label}
        </span>
    </button>
}