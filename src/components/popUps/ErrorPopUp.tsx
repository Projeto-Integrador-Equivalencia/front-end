import PopUp, { PopUpProps } from "../ui/PopUp";

export default function ErrorPopUp(props: PopUpProps) {
  return (
    <PopUp
      img="/images/iconeError.png"
      className="bg-[#D63124]"
      title="Envio da solicitação falhou!"
      button="SOLICITAR NOVAMENTE"
      textColor="text-[#D63124]"
    />
  );
}
