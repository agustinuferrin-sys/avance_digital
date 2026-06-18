import React from 'react';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { stats } from '../data/stats';
import { cn } from '../lib/utils';

export const Metricas: React.FC = () => {
  return (
    <section className="py-24 bg-brand relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={stat.id} className={cn("flex flex-col items-center", index === 4 ? "col-span-2 md:col-span-1" : "")}>
              <AnimatedCounter value={stat.valor} className="text-[clamp(3rem,6vw,5.5rem)] text-white mb-2 tracking-tighter drop-shadow-md leading-none" />
              <span className="text-white/80 font-medium text-sm md:text-base uppercase tracking-[0.2em]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
