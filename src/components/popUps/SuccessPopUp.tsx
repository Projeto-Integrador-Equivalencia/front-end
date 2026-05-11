import PopUp, { PopUpProps } from "../ui/PopUp";

export default function SuccessPopUp(props: PopUpProps) {
  return (
    <PopUp
      img="/images/iconeCheck.png"
      className="bg-[#52BE4F]"
      title="Equivalência enviada com sucesso!"
      button="VISUALIZAR SOLICITAÇÃO"
      textColor="text-[#52BE4F]"
    />
  );
}
