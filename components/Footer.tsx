import { Globe, MessageCircle } from 'lucide-react';
import { Logo } from './Logo';
import { buildWhatsAppUrl, SITE, WHATSAPP_DISPLAY } from '@/lib/content';

const SERVICES = [
  { href: '#servicos', label: 'Preparo de Solo' },
  { href: '#servicos', label: 'Hidrosemeadura' },
  { href: '#servicos', label: 'Terraplanagem' },
  { href: '#servicos', label: 'Soluções Integradas' },
];

const NAV = [
  { href: '#por-que', label: 'O processo' },
  { href: '#vantagens', label: 'Vantagens' },
  { href: '#resultados', label: 'Resultados' },
  { href: '#contato', label: 'Contato' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-verde-deeper text-creme/80">
      <div className="container-x grid gap-12 py-16 md:grid-cols-3 md:gap-10 lg:gap-16">
        <div>
          <a href="#top" className="text-3xl" aria-label="VERDFORT">
            <Logo variant="light" />
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">{SITE.slogan}</p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-verde-vibrant">
              Serviços
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.label}>
                  <a className="hover:text-creme" href={s.href}>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-verde-vibrant">
              Navegação
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV.map((n) => (
                <li key={n.label}>
                  <a className="hover:text-creme" href={n.href}>
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-verde-vibrant">
            Contato
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-creme"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={`https://${SITE.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-creme"
              >
                <Globe className="h-4 w-4" aria-hidden="true" />
                {SITE.domain}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-creme/10">
        <div className="container-x flex flex-col items-start justify-between gap-2 py-6 text-xs text-creme/60 md:flex-row md:items-center">
          <span>
            © {year} {SITE.name}. Todos os direitos reservados.
          </span>
          <span>{SITE.slogan}</span>
        </div>
      </div>
    </footer>
  );
}
