type LogoProps = {
  variant?: 'dark' | 'light';
  className?: string;
};

export function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const verdColor = variant === 'dark' ? 'text-verde-dark' : 'text-creme';
  return (
    <span
      className={`inline-flex items-baseline font-black tracking-tight leading-none ${className}`}
      aria-label="VERDFORT"
    >
      <span className={verdColor}>VERD</span>
      <span className="text-verde-vibrant">FORT</span>
    </span>
  );
}
