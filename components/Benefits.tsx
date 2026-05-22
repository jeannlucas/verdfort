'use client';

import { motion } from 'framer-motion';
import { Coins, Zap, Mountain } from 'lucide-react';
import { fadeUp, stagger, viewportOnce } from '@/lib/motion';

const ITEMS = [
  {
    icon: Coins,
    title: 'Custos mais baixos',
    text: 'Economia significativa frente às placas de grama convencionais — sem perder qualidade.',
  },
  {
    icon: Zap,
    title: 'Praticidade total',
    text: 'Aplicação limpa, automatizada e em tempo recorde. Mais área coberta, menos canteiro de obra.',
  },
  {
    icon: Mountain,
    title: 'Versatilidade no relevo',
    text: 'Excelente fixação em taludes íngremes e encostas — resolve erosões pós-terraplanagem.',
  },
];

export function Benefits() {
  return (
    <section className="relative bg-creme py-24 md:py-32">
      <div className="container-x">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-3xl"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.22em] text-verde-vibrant">
            Benefícios
          </span>
          <h2 className="mt-3 text-balance text-4xl font-black leading-[1.05] text-verde-dark md:text-5xl lg:text-6xl">
            Resultado que <span className="text-verde-vibrant">vale cada metro</span>.
          </h2>
        </motion.div>

        <motion.div
          variants={stagger(0.1, 0.14)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8"
        >
          {ITEMS.map((item, i) => (
            <motion.div key={item.title} variants={fadeUp} className="relative">
              <span className="absolute -top-3 left-0 text-[5rem] font-black leading-none text-verde-vibrant/10">
                0{i + 1}
              </span>
              <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-verde-dark text-verde-vibrant">
                <item.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="relative mt-6 text-2xl font-bold text-verde-dark">{item.title}</h3>
              <p className="relative mt-3 max-w-sm text-base leading-relaxed text-cinza">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
