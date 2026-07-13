import React from 'react';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { stats } from '../data/stats';
import { services } from '../data/services';
import { Reveal } from '../components/Reveal';
import { Marquee } from '../components/Marquee';

export const Metricas: React.FC = () => {
  return (
    <section className="bg-mist relative">
      <div className="max-w-5xl mx-auto px-6">
        <Reveal>
          <div className="rounded-pill border border-brand/40 bg-mist px-6 py-8 md:px-12 md:py-6 overflow-x-auto">
            <div className="flex flex-nowrap md:flex-row items-center justify-between gap-8 md:gap-4 min-w-max md:min-w-0">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col items-center text-center shrink-0">
                  <AnimatedCounter
                    value={stat.valor}
                    className="text-[clamp(1.75rem,3.5vw,2.75rem)] text-brand mb-1 tracking-tighter leading-none font-display font-black"
                  />
                  <span className="text-ink/50 font-medium text-[10px] md:text-xs uppercase tracking-[0.15em]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-16 md:mt-24 bg-brand py-6 md:py-8 w-full">
        <Marquee speed={40} className="font-display font-black text-xl md:text-3xl text-white tracking-widest uppercase">
          {services.map((s) => s.titulo.toUpperCase()).join(' › ')} ›&nbsp;
        </Marquee>
      </div>
    </section>
  );
};
