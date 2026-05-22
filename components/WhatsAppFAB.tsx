'use client';

import { buildWhatsAppUrl } from '@/lib/content';

function WhatsAppIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.973-2.557-1.144-2.685-.144-.115-.331-.13-.516-.13-.286 0-.57.07-.741.243-.515.5-1.46 1.46-1.46 2.443 0 1.073.658 2.114 1.058 2.658 1.144 1.617 2.529 3.06 4.246 4.073.501.298 1.945.974 2.515.974 1.46 0 3.06-1.317 3.06-2.78 0-.143-.027-.286-.114-.43-.314-.601-1.46-.945-2.06-1.245zM16.001 27.5c-1.83 0-3.6-.516-5.12-1.476l-3.56.943.972-3.476A10.7 10.7 0 0 1 5.5 16C5.5 10.21 10.21 5.5 16 5.5S26.5 10.21 26.5 16 21.79 27.5 16.001 27.5zM16.001 3C8.83 3 3 8.83 3 16c0 2.473.674 4.787 1.873 6.776L3 30l7.435-1.951C12.33 29.166 14.123 29.5 16 29.5c7.17 0 13-5.83 13-13S23.17 3 16.001 3z" />
    </svg>
  );
}

export function WhatsAppFAB() {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-verde-vibrant text-white shadow-soft transition-transform hover:scale-105 md:bottom-7 md:right-7 md:h-16 md:w-16"
    >
      <span
        className="absolute inset-0 -z-10 rounded-full bg-verde-vibrant animate-pulseRing"
        aria-hidden="true"
      />
      <WhatsAppIcon className="h-7 w-7 md:h-8 md:w-8" />
      <span className="sr-only">Abrir conversa no WhatsApp</span>
    </a>
  );
}
