import React from "react";

export type PopUpProps = {
  className?: string;
  children?: React.ReactNode;
  img?: string;
  title?: string;
  button?: string;
  textColor?: string;
} & React.HTMLAttributes<HTMLElement>;

export default function PopUp({
  children,
  img,
  title,
  button,
  textColor,
  className = "",
}: PopUpProps) {
  return (
    <dialog
      open={true}
      className={`absolute overflow-hidden place-self-center inset-0 h-8/12 w-[50%] shadow-2xl 
    shadow-black/80 rounded-[50px] place-items-center ${className}`}
    >
      <div className="mt-10 space-y-5 place-items-center">
        <img src={img} alt="Imagem ilustrativa" className="w-[150px]" />
        <h1 className="text-white text-3xl font-bold mt-[25px]">{title}</h1>
      </div>

      <div className="mt-[100px] space-y-5">
        <button
          className={`bg-white font-bold rounded-sm w-full h-12 cursor-pointer ${textColor}`}
        >
          {button}
        </button>
        <button className="border-2 border-white text-white font-bold rounded-sm w-full h-12 cursor-pointer ">
          RETORNAR A TELA INICIAL
        </button>
      </div>
    </dialog>
  );
}
//Lembrar de tirar o open={true} para fazer a logica do botão na tela de envio de solicitação
