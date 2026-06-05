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
    <section className="py-32 bg-bg relative">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeading subtitle="INVERSIÓN" align="center" className="mb-20">
            Planes a tu <span className="text-brand">medida</span>
          </SectionHeading>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <Reveal key={plan.id} delay={idx * 0.1}>
              <Card className={cn(
                "h-full flex flex-col relative",
                plan.destacado && "border-brand border-2 shadow-[0_0_40px_rgba(27,77,228,0.2)] md:-translate-y-4"
              )}>
                {plan.destacado && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-white px-4 py-1 rounded-pill text-sm font-bold tracking-wider">
                    RECOMENDADO
                  </div>
                )}
                <div className="mb-8">
                  <span className="text-brand font-bold text-sm tracking-widest uppercase">{plan.lema}</span>
                  <h3 className="font-display font-black text-3xl text-white mt-2 mb-4">{plan.nombre}</h3>
                  <p className="text-muted">{plan.descripción}</p>
                </div>

                <div className="mb-8 p-4 rounded-xl bg-navy/50 border border-white/5">
                  <div className="font-display font-bold text-lg text-white mb-1">Piezas incluidas:</div>
                  <div className="text-muted text-sm">
                    {plan.piezas.posteos} Posteos + {plan.piezas.historias} Historias
                  </div>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/80">
                      <Check className="text-brand w-5 h-5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className={cn("w-full", !plan.destacado && "bg-white/10 hover:bg-white/20 hover:text-white hover:shadow-none")}>
                  Consultar
                </Button>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
