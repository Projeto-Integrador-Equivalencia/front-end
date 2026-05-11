interface CardBlackWhiteProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

export default function CardBlackWhiteProps({ leftContent, rightContent }: CardBlackWhiteProps) {
  return (
    <div className="bg-white rounded-2xl flex overflow-hidden mx-auto w-full max-w-275 min-h-162.5 shadow-xl relative">
      
      {/* Lado Esquerdo - Preto */}
      <div className="hidden sm:flex sm:w-[40%] bg-zinc-950 p-8 flex-col justify-center items-center relative">
        {leftContent}
        
        {/* Pontos decorativos lado esquerdo */}
        <img 
          src="/images/PontosBL.png" 
          className="absolute bottom-4 left-4 w-12 opacity-20 pointer-events-none" 
        />
      </div>

      {/* Lado Direito - Branco */}
      <div className="w-full sm:w-[60%] p-8 sm:p-16 flex flex-col justify-center relative">
        {rightContent}

        {/* Pontos decorativos lado direito */}
        <img 
          src="/images/PontosBR.png" 
          className="absolute bottom-4 right-4 w-12 opacity-20 pointer-events-none" 
        />
      </div>
    </div>
  );
}