import Image from "next/image";

export default function Header() {
    return (
        <header className="w-full absolute top-0 left-0 h-20 bg-black  flex items-center justify-center">
            <div className="relative w-full max-w-400 flex items-center justify-center">
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
        </header>
    );
}