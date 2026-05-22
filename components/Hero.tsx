'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl, SITE } from '@/lib/content';
import { WaveDivider } from './WaveDivider';

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] w-full items-center overflow-hidden bg-verde-deeper"
    >
      <Image
        src="/images/hero.jpg"
        alt="Talude recuperado com vegetação aplicada via hidrosemeadura"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-verde-deeper/85" />
      <div className="absolute inset-0 bg-grain opacity-20 mix-blend-multiply" aria-hidden="true" />

      <div className="container-x relative z-10 flex flex-col gap-8 pt-28 md:pt-32 lg:gap-10">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-creme backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-verde-vibrant" />
          {SITE.slogan}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl text-balance font-black leading-[1.02] text-creme text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          Hidrosemeadura:{' '}
          <span className="text-verde-vibrant">A solução inteligente</span> para o seu solo.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl text-balance text-lg leading-relaxed text-creme/85 md:text-xl"
        >
          Praticidade, rapidez e o melhor custo-benefício para a cobertura vegetal do seu terreno —
          do preparo até o verde uniforme.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col gap-3 sm:flex-row sm:gap-4"
        >
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-verde-vibrant px-7 py-4 text-base font-bold text-white shadow-soft transition-transform hover:scale-[1.03] hover:bg-white hover:text-verde-dark md:text-lg"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Solicitar Orçamento
            <ArrowRight
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-creme/40 bg-white/5 px-7 py-4 text-base font-bold text-creme backdrop-blur transition-colors hover:bg-white/15 md:text-lg"
          >
            Conheça os Serviços
          </a>
        </motion.div>
      </div>

      <a
        href="#por-que"
        aria-label="Rolar para a próxima seção"
        className="absolute bottom-28 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-creme/80 md:flex"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em]">role</span>
        <ChevronDown className="h-5 w-5 animate-scrollHint" aria-hidden="true" />
      </a>

      <div className="absolute inset-x-0 bottom-0 z-10">
        <WaveDivider topColor="transparent" fillColor="#F4F4EF" height={96} />
      </div>
    </section>
  );
}
