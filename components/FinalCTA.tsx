'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { fadeUp, viewportOnce } from '@/lib/motion';
import { buildWhatsAppUrl, WHATSAPP_DISPLAY } from '@/lib/content';
import { WaveDivider } from './WaveDivider';

export function FinalCTA() {
  return (
    <section id="contato" className="relative">
      <WaveDivider topColor="#F4F4EF" fillColor="#1F3D2B" height={80} flip />
      <div className="relative isolate overflow-hidden bg-verde-dark py-24 text-creme md:py-32">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-grain opacity-15 mix-blend-overlay"
        />
        <div
          aria-hidden="true"
          className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-verde-vibrant/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-verde-vibrant/15 blur-3xl"
        />

        <div className="container-x relative flex flex-col items-center text-center">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="inline-block text-xs font-bold uppercase tracking-[0.22em] text-verde-vibrant"
          >
            Vamos começar?
          </motion.span>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-4 max-w-4xl text-balance text-4xl font-black leading-[1.05] md:text-6xl lg:text-7xl"
          >
            Pronto para transformar o seu terreno?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-creme/85 md:text-xl"
          >
            Custo-benefício imbatível, prazo curto e acabamento profissional. Fale agora pelo
            WhatsApp e receba seu orçamento sem compromisso.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-verde-vibrant px-8 py-5 text-lg font-bold text-white shadow-soft transition-transform hover:scale-[1.03] hover:bg-creme hover:text-verde-dark md:text-xl"
            >
              <MessageCircle className="h-6 w-6" aria-hidden="true" />
              Peça seu Orçamento
              <ArrowRight
                className="h-6 w-6 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold tracking-wide text-creme/80 underline-offset-4 hover:text-creme hover:underline"
            >
              ou ligue: {WHATSAPP_DISPLAY}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
