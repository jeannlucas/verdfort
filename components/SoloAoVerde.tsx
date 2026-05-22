'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { fadeUp, viewportOnce } from '@/lib/motion';
import { buildWhatsAppUrl } from '@/lib/content';

type StageProps = {
  label: 'Antes' | 'Depois';
  src: string;
  alt: string;
  caption: string;
};

function Stage({ label, src, alt, caption }: StageProps) {
  const isAfter = label === 'Depois';
  return (
    <figure className="group relative overflow-hidden rounded-[2rem] bg-verde-deeper/20 shadow-soft">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 42vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        <span
          className={[
            'absolute left-5 top-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-[0.22em] text-white shadow-card backdrop-blur',
            isAfter ? 'bg-verde-vibrant/95' : 'bg-terra/95',
          ].join(' ')}
        >
          <span
            className={[
              'h-1.5 w-1.5 rounded-full',
              isAfter ? 'bg-white' : 'bg-areia-soft',
            ].join(' ')}
            aria-hidden="true"
          />
          {label}
        </span>
      </div>
      <figcaption className="absolute inset-x-0 bottom-0 px-6 pb-5 pt-10 text-creme">
        <p className="text-sm font-semibold leading-snug md:text-base">{caption}</p>
      </figcaption>
    </figure>
  );
}

export function SoloAoVerde() {
  return (
    <section
      id="resultados"
      className="relative isolate overflow-hidden py-24 md:py-32"
      style={{
        background:
          'linear-gradient(180deg, #C19A6B 0%, #A57E52 35%, #5C3A21 70%, #2E4A33 100%)',
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-grain opacity-20 mix-blend-multiply"
      />
      <div className="container-x relative">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-3xl"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.22em] text-areia">
            Do solo bruto ao verde perfeito
          </span>
          <h2 className="mt-3 text-balance text-4xl font-black leading-[1.05] text-creme md:text-5xl lg:text-[3.75rem]">
            A integração que transforma o seu terreno.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-creme/85">
            Unimos a eficiência da terraplanagem — cortes, aterros e nivelamentos — com a
            hidrosemeadura, garantindo terreno firme, pronto e visualmente impecável. Cuidamos
            desde a preparação da terra até a aplicação da tecnologia que protege o seu
            investimento.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-10"
        >
          <Stage
            label="Antes"
            src="/images/antes.jpg"
            alt="Terreno com solo exposto e relevo bruto antes da intervenção"
            caption="Solo exposto, relevo irregular, suscetível a erosão."
          />
          <Stage
            label="Depois"
            src="/images/depois.jpg"
            alt="Terreno coberto por vegetação verde uniforme após a aplicação de hidrosemeadura"
            caption="Cobertura vegetal uniforme, terreno protegido e visualmente impecável."
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
        >
          <a
            href={buildWhatsAppUrl(
              'Olá! Vim pelo site e quero entender a solução integrada de terraplanagem + hidrosemeadura.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-verde-vibrant px-7 py-4 text-base font-bold text-white shadow-soft transition-transform hover:scale-[1.03] md:text-lg"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Fale com um especialista
            <ArrowRight
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
          <span className="text-sm text-creme/75">
            Resposta rápida via WhatsApp · orçamento sem compromisso
          </span>
        </motion.div>
      </div>
    </section>
  );
}
