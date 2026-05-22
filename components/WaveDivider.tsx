type WaveDividerProps = {
  /** Cor de quem está em cima (a curva é desenhada nessa cor). */
  topColor?: string;
  /** Cor do fundo da seção logo abaixo — usada para o "preenchimento" da onda. */
  fillColor?: string;
  /** Inverte verticalmente, útil para curva ascendente. */
  flip?: boolean;
  className?: string;
  /** Altura visual em px. */
  height?: number;
};

export function WaveDivider({
  topColor = '#F4F4EF',
  fillColor = '#F4F4EF',
  flip = false,
  className = '',
  height = 80,
}: WaveDividerProps) {
  return (
    <div
      className={`pointer-events-none relative w-full overflow-hidden ${className}`}
      style={{ height, backgroundColor: topColor, lineHeight: 0 }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        style={{ transform: flip ? 'scaleY(-1)' : undefined }}
      >
        <path
          d="M0,64 C240,128 480,0 720,40 C960,80 1200,120 1440,56 L1440,120 L0,120 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}
