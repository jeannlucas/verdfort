'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Droplets, Sprout, Layers3 } from 'lucide-react';
import { fadeUp, viewportOnce } from '@/lib/motion';

const POINTS = [
  {
    icon: Droplets,
    title: 'Mistura completa em jato único',
    text: 'Sementes, fertilizantes, mulches e fixadores aplicados de uma só vez via alta pressão.',
  },
  {
    icon: Sprout,
    title: 'Germinação protegida',
    text: 'O mulch cria microclima ideal — umidade retida, sementes ancoradas e crescimento uniforme.',
  },
  {
    icon: Layers3,
    title: 'Aproveitamento máximo',
    text: 'Processo mecanizado entrega volume preciso, sem desperdício e cobrindo grandes áreas em horas.',
  },
];

export function WhyHidrosemeadura() {
  return (
    <section id="por-que" className="relative bg-creme py-24 md:py-32">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="order-2 lg:order-1"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.22em] text-verde-vibrant">
            O processo
          </span>
          <h2 className="mt-3 text-balance text-4xl font-black leading-[1.05] text-verde-dark md:text-5xl lg:text-6xl">
            Por que escolher a <span className="text-verde-vibrant">hidrosemeadura</span>?
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cinza">
            É um processo mecanizado onde sementes, fertilizantes, mulches e fixadores são
            aplicados de uma só vez via jato de alta pressão. O resultado é proteção das sementes,
            germinação acelerada e o máximo aproveitamento do material — sem retrabalho, sem
            falhas.
          </p>

          <ul className="mt-10 space-y-6">
            {POINTS.map((p, i) => (
              <motion.li
                key={p.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                transition={{ delay: 0.1 * i }}
                className="flex gap-4"
              >
                <span className="mt-1 inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-verde-dark text-verde-vibrant">
                  <p.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-verde-dark">{p.title}</h3>
                  <p className="mt-1 text-base leading-relaxed text-cinza">{p.text}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative order-1 lg:order-2"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-soft">
            <Image
              src="/images/aplicacao.jpg"
              alt="Equipe aplicando hidrosemeadura em talude com jato de alta pressão"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -bottom-6 -left-6 hidden h-28 w-28 rounded-3xl bg-verde-vibrant md:block"
          />
          <div
            aria-hidden="true"
            className="absolute -right-4 -top-4 hidden h-24 w-24 rounded-3xl border-[6px] border-terra md:block"
          />
        </motion.div>
      </div>
    </section>
  );
}
