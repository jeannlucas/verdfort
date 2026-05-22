'use client';

import { motion } from 'framer-motion';
import { Sprout, ShieldCheck, Users, Leaf } from 'lucide-react';
import { fadeUp, stagger, viewportOnce } from '@/lib/motion';

const ITEMS = [
  {
    icon: Sprout,
    title: 'Germinação Uniforme',
    text: 'Sem falhas ou buracos: o solo recebe os nutrientes exatos para um crescimento saudável e parelho.',
  },
  {
    icon: ShieldCheck,
    title: 'Controle de Erosão Imediato',
    text: 'O composto adere ao solo criando uma camada protetora que segura a terra desde o primeiro dia.',
  },
  {
    icon: Users,
    title: 'Redução de Mão de Obra',
    text: 'Processo automatizado: menos funcionários, menos retrabalho, zero desperdício de material.',
  },
  {
    icon: Leaf,
    title: 'Sustentabilidade',
    text: 'Insumos que respeitam o meio ambiente e promovem recuperação rápida do ecossistema local.',
  },
];

export function Advantages() {
  return (
    <section
      id="vantagens"
      className="relative grain-overlay bg-areia/15 py-24 md:py-32"
    >
      <div className="container-x relative">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-3xl"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-[0.22em] text-terra">
            Vantagens reais
          </span>
          <h2 className="mt-3 text-balance text-4xl font-black leading-[1.05] text-verde-dark md:text-5xl lg:text-6xl">
            Quatro razões para escolher a VERDFORT.
          </h2>
        </motion.div>

        <motion.ul
          variants={stagger(0.1, 0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {ITEMS.map((item) => (
            <motion.li
              key={item.title}
              variants={fadeUp}
              className="group relative flex flex-col rounded-3xl bg-creme p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-verde-dark text-verde-vibrant transition-colors group-hover:bg-verde-vibrant group-hover:text-creme">
                <item.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xl font-bold text-verde-dark">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-cinza">{item.text}</p>
              <span
                aria-hidden="true"
                className="mt-6 inline-block h-1 w-10 rounded-full bg-verde-vibrant"
              />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
