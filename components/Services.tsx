'use client';

import { motion } from 'framer-motion';
import { Shovel, Sprout, Truck, Workflow, ArrowUpRight } from 'lucide-react';
import { fadeUp, stagger, viewportOnce } from '@/lib/motion';
import { buildWhatsAppUrl } from '@/lib/content';

const SERVICES = [
  {
    icon: Shovel,
    title: 'Preparo de Solo',
    text: 'Descompactação, correção e enriquecimento do terreno para receber a vegetação com vigor.',
    msg: 'Olá! Vim pelo site e gostaria de orçamento de preparo de solo.',
  },
  {
    icon: Sprout,
    title: 'Hidrosemeadura',
    text: 'Aplicação mecanizada de sementes, fertilizantes e mulches em jato único de alta pressão.',
    msg: 'Olá! Vim pelo site e gostaria de orçamento de hidrosemeadura.',
  },
  {
    icon: Truck,
    title: 'Terraplanagem',
    text: 'Cortes, aterros e nivelamentos com máquinas próprias e equipe técnica especializada.',
    msg: 'Olá! Vim pelo site e gostaria de orçamento de terraplanagem.',
  },
  {
    icon: Workflow,
    title: 'Soluções Integradas',
    text: 'Pacote completo: do movimento de terra à cobertura vegetal final, com um único responsável.',
    msg: 'Olá! Vim pelo site e quero uma solução integrada (terraplanagem + hidrosemeadura).',
  },
];

export function Services() {
  return (
    <section
      id="servicos"
      className="relative bg-verde-dark/[0.04] py-24 md:py-32"
    >
      <div className="container-x">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-3xl"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.22em] text-verde-vibrant">
            Nossos serviços
          </span>
          <h2 className="mt-3 text-balance text-4xl font-black leading-[1.05] text-verde-dark md:text-5xl lg:text-6xl">
            Tudo o que o seu terreno precisa — em um só lugar.
          </h2>
        </motion.div>

        <motion.ul
          variants={stagger(0.1, 0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {SERVICES.map((service) => (
            <motion.li
              key={service.title}
              variants={fadeUp}
              className="group relative flex flex-col rounded-3xl border border-verde-dark/10 bg-creme p-7 transition-all hover:-translate-y-1 hover:border-verde-vibrant/40 hover:shadow-soft"
            >
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-verde-dark text-verde-vibrant transition-colors group-hover:bg-verde-vibrant group-hover:text-creme">
                <service.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xl font-bold text-verde-dark">{service.title}</h3>
              <p className="mt-3 flex-1 text-base leading-relaxed text-cinza">{service.text}</p>
              <a
                href={buildWhatsAppUrl(service.msg)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-verde-vibrant transition-colors hover:text-verde-dark"
              >
                Solicitar orçamento
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
