import Image from "next/image";

export default function Header() {
    return (
        <header className="absolute top-0 left-0 w-full h-20 bg-black border-[3px] border-[#007acc] flex items-center justify-center">
            <div className="relative w-full max-w-[1600px] flex items-center justify-center">
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