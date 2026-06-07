import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Reveal } from '../components/Reveal';
import { plans } from '../data/plans';
import { Check } from 'lucide-react';
import { cn } from '../lib/utils';

export const Planes: React.FC = () => {
  return (
    <section className="py-40 bg-bg relative">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeading subtitle="INVERSIÓN" align="center" className="mb-24">
            Planes a tu <span className="text-brand">medida</span>
          </SectionHeading>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan, idx) => {
            const isDestacado = plan.destacado;
            return (
              <Reveal key={plan.id} delay={idx * 0.15}>
                <Card className={cn(
                  "flex flex-col relative transition-all duration-500",
                  isDestacado 
                    ? "border-brand bg-navy shadow-[0_0_80px_rgba(27,77,228,0.25)] lg:scale-110 lg:-translate-y-4 z-20 py-12" 
                    : "border-white/5 bg-navy/40 hover:border-brand/30 hover:bg-navy py-10 z-10"
                )}>
                  {isDestacado && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-white px-6 py-1.5 rounded-pill text-xs font-bold tracking-[0.2em] shadow-[0_0_20px_rgba(27,77,228,0.5)]">
                      RECOMENDADO
                    </div>
                  )}
                  <div className="mb-8">
                    <span className={cn(
                      "font-bold text-xs tracking-[0.2em] uppercase",
                      isDestacado ? "text-brand" : "text-muted"
                    )}>
                      {plan.lema}
                    </span>
                    <h3 className="font-display font-black text-4xl text-white mt-3 mb-4 tracking-tight">{plan.nombre}</h3>
                    <p className="text-muted/80 font-light text-lg">{plan.descripción}</p>
                  </div>

                  <div className={cn(
                    "mb-8 p-6 rounded-2xl border",
                    isDestacado ? "bg-brand/10 border-brand/20" : "bg-white/5 border-white/5"
                  )}>
                    <div className="font-display font-bold text-lg text-white mb-2">Piezas incluidas:</div>
                    <div className="text-white/80 font-light flex items-center justify-between">
                      <span>{plan.piezas.posteos} Posteos</span>
                      <span className="text-brand/50">+</span>
                      <span>{plan.piezas.historias} Historias</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-10 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-4 text-white/80 font-light">
                        <Check className={cn("w-5 h-5 shrink-0", isDestacado ? "text-brand" : "text-brand/50")} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className={cn(
                    "w-full py-4 text-lg", 
                    !isDestacado && "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white text-muted hover:shadow-none"
                  )}>
                    Consultar ahora
                  </Button>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
