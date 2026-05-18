export default function BackgroundGradient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen relative bg-(--c01) flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-x-0 w-full bg-linear-to-b from-red-700 to-red-950 h-100 z-0 top-1/2 -translate-y-1/2">
        <img
          src="/images/PontosBL.png" 
          alt="Fatec Atibaia"
          className="w-[5%] sm:w-10 absolute top-4 right-4"
        />
        <img
          src="/images/PontosTR.png"
          alt="Fatec Atibaia"
          className="w-[5%] sm:w-10 absolute bottom-4 left-4"
        />
      </div>
      <img
        src="/images/PontosBR.png"
        alt="Fatec Atibaia"
        className="w-0 sm:w-10 absolute bottom-24 right-24 z-0"
      />
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
}