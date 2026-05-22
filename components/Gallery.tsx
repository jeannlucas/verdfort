'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeUp, stagger, viewportOnce } from '@/lib/motion';

const SHOTS = [
  {
    src: '/images/galeria-1.jpg',
    alt: 'Talude estabilizado com cobertura vegetal aplicada pela VERDFORT',
    tag: 'Talude estabilizado',
  },
  {
    src: '/images/galeria-2.jpg',
    alt: 'Área extensa com hidrosemeadura uniforme após terraplanagem',
    tag: 'Área completa',
  },
];

export function Gallery() {
  return (
    <section className="relative bg-creme py-24 md:py-32">
      <div className="container-x">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.22em] text-verde-vibrant">
              Resultados em campo
            </span>
            <h2 className="mt-3 text-balance text-4xl font-black leading-[1.05] text-verde-dark md:text-5xl">
              Obras que falam por si.
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-cinza">
            Cada projeto entregue é uma prova do nosso compromisso: terreno preparado, cobertura
            firme e acabamento profissional.
          </p>
        </motion.div>

        <motion.div
          variants={stagger(0.1, 0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8"
        >
          {SHOTS.map((shot) => (
            <motion.figure
              key={shot.src}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-[2rem] shadow-card transition-shadow hover:shadow-soft"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-verde-deeper/55 via-transparent to-transparent" />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between p-6 text-creme">
                <span className="rounded-full bg-creme/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] backdrop-blur">
                  {shot.tag}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-creme/80">
                  VERDFORT
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
