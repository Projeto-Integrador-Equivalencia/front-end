type Props = {
  children: React.ReactNode;
  variant?: "white-red" | "default";
};

export default function Background({
  children,
  variant = "default",
}: Props) {
  return (
    <div className="h-screen relative flex flex-col place-content-center">
      {/* Fundo principal */}
      <div
        className={
          variant === "white-red"
            ? "bg-(--c01)"
            : "bg-gray-100"
        }
      >
        {children}
      </div>

      {/* Parte vermelha (só em um tipo) */}
      {variant === "white-red" && (
        <div className="bg-[#cc0000] absolute bottom-0 h-[50%] w-full"></div>
      )}
    </div>
  );
}