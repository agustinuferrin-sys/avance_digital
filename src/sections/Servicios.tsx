import React from 'react';
import { Card } from '../components/Card';
import { Reveal } from '../components/Reveal';
import { Button } from '../components/Button';
import { ArrowRight } from 'lucide-react';
import { servicesHeader, services, servicesCierre } from '../data/services';
import { useLenis } from 'lenis/react';

export const Servicios: React.FC = () => {
  const lenis = useLenis();

  const scrollToContacto = () => {
    lenis?.scrollTo('#contacto', { offset: -80 });
  };

  const destacado = services.find(s => s.destacado);
  const regulares = services.filter(s => !s.destacado);

  return (
    <section id="servicios" className="py-24 md:py-32 bg-mist relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand/[0.06] via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <Reveal>
          <div className="mb-16 md:mb-24 md:w-3/4 lg:w-2/3">
            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 leading-[1.1] text-ink">
              {servicesHeader.titulo}
            </h2>
            <p className="text-ink/60 font-light text-lg md:text-xl leading-relaxed mb-8">
              {servicesHeader.bajada}
            </p>
            <button 
              onClick={scrollToContacto}
              className="group inline-flex items-center gap-2 text-brand font-semibold hover:text-brandAlt transition-colors"
            >
              {servicesHeader.cta}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </Reveal>

        {/* Destacado */}
        {destacado && (
          <Reveal className="mb-6">
            <Card className="relative overflow-hidden bg-navy/40 border-white/5 hover:border-brand/50 hover:bg-navy/80 touch:border-brand/50 touch:bg-navy/80 transition-all duration-500 p-8 md:p-12 lg:p-16">
              <div className="absolute -top-10 -right-4 font-display font-black text-[12rem] leading-none text-white/[0.02] pointer-events-none select-none">
                {destacado.num}
              </div>
              <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 touch:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-screen" />
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="text-brand font-bold mb-4">{destacado.num}</div>
                  <h3 className="font-display font-bold text-3xl md:text-4xl mb-4 text-white tracking-tight">
                    {destacado.titulo}
                  </h3>
                  <p className="text-muted text-lg leading-relaxed font-light mb-8 lg:mb-0">
                    {destacado.bajada}
                  </p>
                </div>
                <div className="flex flex-col h-full justify-between">
                  <ul className="space-y-4 mb-8">
                    {destacado.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-2" />
                        <span className="text-white/80 font-light">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-white/10 pt-6 mt-auto">
                    <p className="text-brand italic font-light">
                      {destacado.microfrase}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>
        )}

        {/* Grilla regulares */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regulares.map((service, idx) => (
            <Reveal 
              key={service.num} 
              delay={idx * 0.05} 
              className="flex flex-col h-full"
            >
              <Card className="flex-1 group relative flex flex-col overflow-hidden bg-navy/40 border-white/5 hover:border-brand/50 hover:bg-navy/80 touch:border-brand/50 touch:bg-navy/80 transition-all duration-500 p-8">
                <div className="absolute -top-6 -right-2 font-display font-black text-[8rem] leading-none text-white/[0.02] pointer-events-none select-none transition-transform group-hover:scale-110 duration-700">
                  {service.num}
                </div>
                <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 touch:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-screen" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-brand font-bold mb-4">{service.num}</div>
                  <h3 className="font-display font-bold text-2xl mb-4 text-white tracking-tight">
                    {service.titulo}
                  </h3>
                  <p className="text-muted leading-relaxed font-light mb-8">
                    {service.bajada}
                  </p>
                  
                  <ul className="space-y-3 mb-8 flex-1">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-1 h-1 rounded-full bg-brand/60 shrink-0 mt-2.5" />
                        <span className="text-white/70 font-light text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="border-t border-white/10 pt-5 mt-auto">
                    <p className="text-brand text-sm italic font-light">
                      {service.microfrase}
                    </p>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* Cierre */}
        <Reveal delay={0.2} className="mt-24 text-center max-w-3xl mx-auto flex flex-col items-center">
          <h3 className="font-display font-black text-3xl md:text-4xl lg:text-5xl mb-6 whitespace-pre-line leading-[1.1] text-ink">
            {servicesCierre.titulo}
          </h3>
          <p className="text-ink/60 text-lg font-light leading-relaxed mb-10">
            {servicesCierre.bajada}
          </p>
          <Button onClick={scrollToContacto}>
            {servicesCierre.cta}
          </Button>
        </Reveal>

      </div>
    </section>
  );
};
