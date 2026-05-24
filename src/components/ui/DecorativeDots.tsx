import * as React from "react";

interface DecorativeDotsProps extends React.SVGProps<SVGSVGElement> {
  variant?: "top" | "bottom";
}

export function DecorativeDots({
  variant = "top",
  className,
  ...props
}: DecorativeDotsProps) {
  // Configurações de posicionamento absoluto na tela e opacidade
  const variantStyles = {
    top: "absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 text-white opacity-20 pointer-events-none hidden md:block",
    bottom:
      "absolute right-8 w-12 h-12 text-c07 pointer-events-none hidden md:block",
  };

  const chosenStyles = variantStyles[variant];

  // Matriz de coordenadas (CX, CY) perfeitamente alinhadas a partir do ponto 0,0
  // Cada ponto tem raio r="2" (diâmetro 4) e espaçamento de 12px entre os centros.
  const topDots = [
    { cx: 2, cy: 2 },
    { cx: 14, cy: 2 },
    { cx: 26, cy: 2 },
    { cx: 38, cy: 2 },
    { cx: 50, cy: 2 },
    { cx: 2, cy: 14 },
    { cx: 14, cy: 14 },
    { cx: 26, cy: 14 },
    { cx: 38, cy: 14 },
    { cx: 50, cy: 14 },
    { cx: 14, cy: 26 },
    { cx: 26, cy: 26 },
    { cx: 38, cy: 26 },
    { cx: 50, cy: 26 },
    { cx: 14, cy: 38 },
    { cx: 26, cy: 38 },
    { cx: 38, cy: 38 },
    { cx: 50, cy: 38 },
    { cx: 38, cy: 50 },
    { cx: 50, cy: 50 },
  ];

  const bottomDots = [
    { cx: 38, cy: 2 },
    { cx: 50, cy: 2 },
    { cx: 14, cy: 14 },
    { cx: 26, cy: 14 },
    { cx: 38, cy: 14 },
    { cx: 50, cy: 14 },
    { cx: 14, cy: 26 },
    { cx: 26, cy: 26 },
    { cx: 38, cy: 26 },
    { cx: 50, cy: 26 },
    { cx: 2, cy: 38 },
    { cx: 14, cy: 38 },
    { cx: 26, cy: 38 },
    { cx: 38, cy: 38 },
    { cx: 50, cy: 38 },
    { cx: 2, cy: 50 },
    { cx: 14, cy: 50 },
    { cx: 26, cy: 50 },
    { cx: 38, cy: 50 },
    { cx: 50, cy: 50 },
  ];

  const dotsToRender = variant === "top" ? topDots : bottomDots;

  return (
    <svg
      viewBox="0 0 52 52"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={`${chosenStyles} ${className || ""}`}
      {...props}
    >
      {dotsToRender.map((dot, index) => (
        <circle key={`${variant}-dot-${index}`} cx={dot.cx} cy={dot.cy} r="2" />
      ))}
    </svg>
  );
}
