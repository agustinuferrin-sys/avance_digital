import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Card } from '../components/Card';
import { Reveal } from '../components/Reveal';
import { services } from '../data/services';

export const Servicios: React.FC = () => {
  return (
    <section id="servicios" className="py-32 bg-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeading subtitle="LO QUE HACEMOS" className="mb-16 md:w-2/3">
            Ecosistema de soluciones para <span className="text-brand">potenciar tu marca</span>.
          </SectionHeading>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <Reveal key={service.id} delay={idx * 0.1}>
              <Card className="group relative h-full flex flex-col overflow-hidden">
                <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-6 group-hover:bg-brand transition-colors duration-300">
                  <service.icono className="text-white w-6 h-6" />
                </div>
                
                <h3 className="font-display font-bold text-xl mb-3 text-white">
                  {service.nombre}
                </h3>
                <p className="text-muted leading-relaxed">
                  {service.descripción}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
