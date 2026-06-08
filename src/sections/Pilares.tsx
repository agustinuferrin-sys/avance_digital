import React from 'react';
import { Card } from '../components/Card';
import { Reveal } from '../components/Reveal';
import { pillars } from '../data/pillars';

export const Pilares: React.FC = () => {
  return (
    <section id="estrategia" className="py-24 md:py-32 bg-navy relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <Reveal>
              <h2 className="font-display font-black text-3xl md:text-5xl text-white leading-tight mb-6 tracking-tight">
                Nuestra <span className="text-brand">Cultura</span>
              </h2>
              <p className="text-xl text-muted font-light leading-relaxed">
                No creemos en fórmulas mágicas. Creemos en el trabajo duro, el análisis, los procesos validados y la búsqueda constante de la excelencia en todo lo que hacemos.
              </p>
            </Reveal>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 lg:mt-0">
            {pillars.map((pillar, idx) => (
              <Reveal key={pillar.id} delay={idx * 0.15} className="h-full">
                <Card className="h-full flex flex-col p-10 bg-bg/40 border-white/5 hover:border-brand/40 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(27,77,228,0.15)] hover:-translate-y-2 group">
                  <div className="text-brand font-display font-black text-4xl mb-4 opacity-60 group-hover:opacity-100 group-hover:text-skyLight transition-all">
                    0{idx + 1}.
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-4 text-white tracking-tight">
                    {pillar.título}
                  </h3>
                  <p className="text-muted leading-relaxed flex-1 font-light">
                    {pillar.descripción}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
