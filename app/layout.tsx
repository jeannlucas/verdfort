import type { Metadata, Viewport } from 'next';
import { Barlow } from 'next/font/google';
import './globals.css';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-barlow',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://verdfort.com.br'),
  title: 'VERDFORT — Hidrosemeadura e Terraplanagem',
  description:
    'Hidrosemeadura, terraplanagem e preparo de solo com tecnologia de ponta. Da base ao verde, resultados que ficam. Solicite seu orçamento.',
  keywords: [
    'hidrosemeadura',
    'terraplanagem',
    'preparo de solo',
    'recuperação de taludes',
    'controle de erosão',
    'VERDFORT',
  ],
  authors: [{ name: 'VERDFORT' }],
  openGraph: {
    title: 'VERDFORT — Hidrosemeadura e Terraplanagem',
    description:
      'Da base ao verde, resultados que ficam. Hidrosemeadura, terraplanagem e soluções integradas para o seu terreno.',
    url: 'https://verdfort.com.br',
    siteName: 'VERDFORT',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Talude recuperado com hidrosemeadura VERDFORT',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VERDFORT — Hidrosemeadura e Terraplanagem',
    description: 'Da base ao verde, resultados que ficam.',
    images: ['/images/hero.jpg'],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#1F3D2B',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={barlow.variable}>
      <body>{children}</body>
    </html>
  );
}
