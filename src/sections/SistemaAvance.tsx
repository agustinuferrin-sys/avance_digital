import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../components/Reveal';
import { methodSteps, MethodStep } from '../data/methodSteps';
import { Marquee } from '../components/Marquee';
import { cn } from '../lib/utils';

interface PillCardProps {
  step: MethodStep;
  solid: boolean;
  className?: string;
}

const PillCard: React.FC<PillCardProps> = ({ step, solid, className }) => (
  <div
    className={cn(
      'relative flex flex-col justify-center min-h-[190px] md:min-h-[220px] rounded-pill px-8 py-8 md:px-10 md:py-10 transition-all duration-300 hover:brightness-110',
      solid ? 'bg-brand text-white' : 'bg-navy border border-brand/40 text-white',
      className
    )}
  >
    <span className={cn('font-display font-black text-4xl md:text-5xl mb-3', solid ? 'text-white/30' : 'text-brand/40')}>
      {step.número}
    </span>
    <h3 className="font-display font-bold text-xl md:text-2xl mb-2">{step.título}</h3>
    <p className={cn('text-sm md:text-base font-body leading-relaxed', solid ? 'text-white/85' : 'text-muted')}>
      {step.descripción}
    </p>
  </div>
);

interface GooRowProps {
  pills: { step: MethodStep; solid: boolean }[];
  colTemplate: string;
  delay?: number;
}

const GooRow: React.FC<GooRowProps> = ({ pills, colTemplate, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.6, delay }}
    className="relative"
  >
    {/* capa gooey (metaball): fusiona los fondos, sin texto, solo desktop */}
    <div
      className={cn('absolute inset-0 hidden md:grid gap-3 md:gap-4 [filter:url(#avance-goo)]', colTemplate)}
      aria-hidden="true"
    >
      {pills.map(({ step, solid }) => (
        <div key={step.número} className={cn('h-full rounded-pill', solid ? 'bg-brand' : 'bg-navy')} />
      ))}
    </div>

    {/* capa de contenido, siempre nítida */}
    <div className={cn('relative grid grid-cols-1 gap-3 md:gap-4', colTemplate)}>
      {pills.map(({ step, solid }) => (
        <PillCard key={step.número} step={step} solid={solid} />
      ))}
    </div>
  </motion.div>
);

export const SistemaAvance: React.FC = () => {
  const [entender, ordenar, ejecutar, medir, escalar] = methodSteps;

  return (
    <section id="sistema" className="py-24 md:py-32 bg-navy relative overflow-hidden flex flex-col">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand/[0.04] via-transparent to-transparent pointer-events-none" />

      {/* Filtro SVG gooey, invisible, usado para fusionar las pills */}
      <svg className="absolute w-0 h-0" aria-hidden="true" focusable="false">
        <defs>
          <filter id="avance-goo" colorInterpolationFilters="sRGB">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mb-16 md:mb-24">
        <Reveal>
          <span className="block text-brand font-semibold tracking-[0.2em] uppercase text-xs md:text-sm mb-4">
            MÉTODO
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight bg-gradient-to-br from-muted via-white to-ink bg-clip-text text-transparent">
            SISTEMA AVANCE<span className="text-brand">®</span>
          </h2>

          <div className="mt-8 md:mt-10 max-w-2xl">
            <p className="font-display font-bold text-lg md:text-xl text-brand">No aplicamos fórmulas.</p>
            <p className="font-body text-base md:text-lg text-white/80 mt-1">
              Analizamos, ordenamos y construimos el camino que cada marca necesita para avanzar.
            </p>
          </div>
          <div className="mt-8 md:mt-10 h-px w-full bg-white/10" />
        </Reveal>

        {/* Cascada de pills */}
        <div className="mt-12 md:mt-16 flex flex-col gap-3 md:gap-4">
          {/* Fila 1: Entender, sola */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <PillCard step={entender} solid />
          </motion.div>

          {/* Fila 2: Ordenar + Ejecutar (Ejecutar más ancha) */}
          <GooRow
            pills={[
              { step: ordenar, solid: false },
              { step: ejecutar, solid: true },
            ]}
            colTemplate="md:grid-cols-[0.8fr_1.2fr]"
            delay={0.1}
          />

          {/* Fila 3: Medir + Escalar */}
          <GooRow
            pills={[
              { step: medir, solid: false },
              { step: escalar, solid: true },
            ]}
            colTemplate="md:grid-cols-[1fr_1.05fr]"
            delay={0.2}
          />
        </div>
      </div>

      <div className="relative z-10 bg-brand py-6 md:py-8 w-full mt-auto">
        <Marquee speed={40} className="font-display font-black text-xl md:text-3xl text-white tracking-widest uppercase">
          SOCIAL MEDIA MANAGEMENT › BRANDING › PAID MEDIA › CONTENT CREATOR › UGC/INFLUENCERS › ACTIVACIONES › DISEÑO GRÁFICO › SITIO WEB › CONSULTORÍA ›&nbsp;
        </Marquee>
      </div>
    </section>
  );
};
