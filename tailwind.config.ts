import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        verde: {
          dark: '#1F3D2B',
          vibrant: '#5BA130',
          deeper: '#162B1E',
        },
        terra: {
          DEFAULT: '#5C3A21',
          soft: '#7A4F2E',
        },
        areia: {
          DEFAULT: '#C19A6B',
          soft: '#D9BD96',
        },
        cinza: '#7A7A7A',
        creme: '#F4F4EF',
      },
      fontFamily: {
        sans: ['var(--font-barlow)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        pulseRing: {
          '0%': { transform: 'scale(1)', opacity: '0.7' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        scrollHint: {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '40%': { opacity: '1' },
          '100%': { transform: 'translateY(10px)', opacity: '0' },
        },
      },
      animation: {
        pulseRing: 'pulseRing 1.8s cubic-bezier(0.4,0,0.6,1) infinite',
        floatY: 'floatY 3s ease-in-out infinite',
        scrollHint: 'scrollHint 2s ease-in-out infinite',
      },
      backgroundImage: {
        'grain':
          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.36 0 0 0 0 0.23 0 0 0 0 0.13 0 0 0 0.18 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
      boxShadow: {
        soft: '0 30px 60px -20px rgba(31, 61, 43, 0.25)',
        card: '0 12px 30px -12px rgba(31, 61, 43, 0.18)',
      },
    },
  },
  plugins: [],
};

export default config;
