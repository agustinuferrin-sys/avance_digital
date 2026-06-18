import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Card } from '../components/Card';
import { Reveal } from '../components/Reveal';
import { services } from '../data/services';

export const Servicios: React.FC = () => {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-bg relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand/[0.03] via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal>
          <SectionHeading subtitle="LO QUE HACEMOS" className="mb-16 md:w-3/4 lg:w-2/3">
            Ecosistema de soluciones para <span className="text-brand">potenciar tu marca</span>.
          </SectionHeading>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            return (
              <Reveal 
                key={service.id} 
                delay={idx * 0.05} 
                className="flex flex-col h-full"
              >
                <Card className="flex-1 group relative flex flex-col overflow-hidden bg-navy/40 border-white/5 hover:border-brand/50 hover:bg-navy/80 touch:border-brand/50 touch:bg-navy/80 transition-all duration-500">
                  <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 touch:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-screen" />
                  
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 mb-8 group-hover:bg-brand group-hover:border-brand touch:bg-brand touch:border-brand transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-[0_0_20px_rgba(27,77,228,0.4)] touch:shadow-[0_0_20px_rgba(27,77,228,0.4)]">
                    <service.icono className="text-white w-6 h-6 transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  
                  <div className="mt-auto">
                    <h3 className="font-display font-bold text-xl mb-3 text-white tracking-tight">
                      {service.nombre}
                    </h3>
                    <p className="text-muted leading-relaxed font-light">
                      {service.descripción}
                    </p>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
