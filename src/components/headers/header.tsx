import Image from "next/image";
import DropdownMenu from "./DropdownMenu";

export default function Header() {
    const opcoesDoUsuario = [
        { label: 'Meu Perfil', href: '/perfil' },
        { label: 'Configurações', href: '/configuracoes' }
    ]
    return (
        <header className="sticky w-full absolute top-0 left-0 h-20 bg-black flex items-center justify-center">
            <div className="relative w-full max-w-300 flex items-center justify-center">
                <div className="flex flex-col items-center">
                    <Image
                        src="/images/logo_fatec_br.png"
                        alt="Logo Fatec"
                        width={124}
                        height={50}
                        priority
                    />
                </div>
            </div>
            <div className="absolute right-4 w-full max-w-50 ">
                <DropdownMenu
                    buttonText="João Silva"
                    items={opcoesDoUsuario}
                />
            </div>
        </header>
    );
}