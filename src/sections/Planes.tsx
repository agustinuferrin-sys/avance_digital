import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Reveal } from '../components/Reveal';
import { plans } from '../data/plans';
import { Check, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export const Planes: React.FC = () => {
  const [openPlan, setOpenPlan] = useState<string | null>('Crecimiento');

  const togglePlan = (nombre: string) => {
    setOpenPlan(openPlan === nombre ? null : nombre);
  };

  return (
    <section className="py-24 md:py-32 bg-bg relative">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeading subtitle="INVERSIÓN" align="center" className="mb-16">
            Planes a tu <span className="text-brand">medida</span>
          </SectionHeading>
        </Reveal>

        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 lg:gap-8 items-start lg:items-center">
          {plans.map((plan, idx) => {
            const isDestacado = plan.destacado;
            const isOpen = openPlan === plan.nombre;

            return (
              <Reveal key={plan.id} delay={idx * 0.15}>
                <Card className={cn(
                  "flex flex-col relative transition-all duration-500",
                  isDestacado 
                    ? "border-brand bg-navy shadow-[0_0_80px_rgba(27,77,228,0.25)] lg:scale-110 lg:-translate-y-4 z-20 px-4 py-5 lg:px-8 lg:py-12" 
                    : "border-white/5 bg-navy/40 hover:border-brand/30 hover:bg-navy px-4 py-4 lg:px-8 lg:py-10 z-10"
                )}>
                  {isDestacado && (
                    <div className="absolute -top-3 lg:-top-4 left-1/2 -translate-x-1/2 bg-brand text-white px-4 py-1 lg:px-6 lg:py-1.5 rounded-pill text-[10px] lg:text-xs font-bold tracking-[0.2em] shadow-[0_0_20px_rgba(27,77,228,0.5)]">
                      RECOMENDADO
                    </div>
                  )}

                  {/* Mobile Header (Accordion Trigger) */}
                  <div 
                    className="flex lg:hidden justify-between items-center cursor-pointer select-none"
                    onClick={() => togglePlan(plan.nombre)}
                    aria-expanded={isOpen}
                    role="button"
                  >
                    <div>
                      <span className={cn(
                        "font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase",
                        isDestacado ? "text-brand" : "text-muted"
                      )}>
                        {plan.lema}
                      </span>
                      <h3 className="font-display font-black text-xl sm:text-2xl text-white mt-1 tracking-tight">{plan.nombre}</h3>
                    </div>
                    <ChevronDown className={cn("w-5 h-5 lg:w-6 lg:h-6 text-white/50 transition-transform duration-300", isOpen && "rotate-180")} />
                  </div>

                  {/* Desktop Header */}
                  <div className="hidden lg:block mb-8">
                    <span className={cn(
                      "font-bold text-xs tracking-[0.2em] uppercase",
                      isDestacado ? "text-brand" : "text-muted"
                    )}>
                      {plan.lema}
                    </span>
                    <h3 className="font-display font-black text-3xl text-white mt-3 mb-4 tracking-tight">{plan.nombre}</h3>
                    <p className="text-muted/80 font-light text-lg">{plan.descripción}</p>
                  </div>

                  {/* Body Content (Collapsible on Mobile) */}
                  <AnimatePresence initial={false}>
                    {(isOpen || typeof window !== 'undefined' && window.innerWidth >= 1024) && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: 'auto', opacity: 1, marginTop: 24 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}
                        className="lg:!h-auto lg:!opacity-100 lg:!mt-0 lg:!overflow-visible block lg:flex lg:flex-col lg:flex-1"
                      >
                        <p className="text-muted/80 font-light text-base mb-6 lg:hidden">{plan.descripción}</p>

                        <div className={cn(
                          "mb-6 lg:mb-8 p-5 lg:p-6 rounded-2xl border",
                          isDestacado ? "bg-brand/10 border-brand/20" : "bg-white/5 border-white/5"
                        )}>
                          <div className="font-display font-bold text-base lg:text-lg text-white mb-2">Piezas incluidas:</div>
                          <div className="text-white/80 font-light flex items-center justify-between text-sm lg:text-base">
                            <span>{plan.piezas.posteos} Posteos</span>
                            <span className="text-brand/50">+</span>
                            <span>{plan.piezas.historias} Historias</span>
                          </div>
                        </div>

                        <ul className="space-y-4 mb-8 lg:mb-10 flex-1">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-4 text-white/80 font-light text-sm lg:text-base">
                              <Check className={cn("w-5 h-5 shrink-0", isDestacado ? "text-brand" : "text-brand/50")} />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <Button className={cn(
                          "w-full py-4 text-base lg:text-lg", 
                          !isDestacado && "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white text-muted hover:shadow-none"
                        )}>
                          Consultar ahora
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
