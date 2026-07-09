import React, { useState } from 'react';
import { faqs } from '../data/faq';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Reveal } from '../components/Reveal';
import { Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLenis } from 'lenis/react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const lenis = useLenis();

  const scrollToContacto = () => {
    lenis?.scrollTo('#contacto', { offset: -80 });
  };

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-mist relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Columna Izquierda (Sticky) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <Reveal>
              <div className="text-brand text-xs font-bold tracking-widest uppercase mb-4">FAQ</div>
              <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl mb-12 tracking-tight text-ink">
                Preguntas frecuentes
              </h2>
              
              <Card className="bg-navy/50 border-white/5 p-8 md:p-10 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand/[0.05] via-transparent to-transparent pointer-events-none" />
                <h3 className="font-display font-bold text-2xl mb-4 text-white relative z-10">
                  ¿Tenés otra consulta?
                </h3>
                <p className="text-muted font-light leading-relaxed mb-8 relative z-10">
                  Podemos ayudarte a entender qué necesita tu marca y cómo trabajarlo estratégicamente.
                </p>
                <Button onClick={scrollToContacto} className="w-full relative z-10 py-4">
                  Solicitar reunión
                </Button>
              </Card>
            </Reveal>
          </div>
          
          {/* Columna Derecha (Acordeón) */}
          <div className="lg:col-span-7">
            <Reveal delay={0.2} className="flex flex-col gap-2">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="border-b border-ink/10 last:border-0"
                >
                  <button
                    onClick={() => toggleOpen(idx)}
                    className="w-full py-6 md:py-8 flex items-center justify-between text-left group gap-6 focus:outline-none"
                    aria-expanded={openIndex === idx}
                  >
                    <h3 className="font-display font-medium text-lg md:text-xl text-ink group-hover:text-brand touch:text-brand transition-colors duration-300">
                      {faq.q}
                    </h3>
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 ${
                        openIndex === idx 
                          ? 'border-brand bg-brand/10 text-brand' 
                          : 'border-ink/15 text-ink group-hover:border-brand group-hover:text-brand touch:border-brand touch:text-brand'
                      }`}
                    >
                      <Plus 
                        className={`w-5 h-5 transition-transform duration-300 ${openIndex === idx ? 'rotate-45' : ''}`} 
                      />
                    </div>
                  </button>
                  <AnimatePresence initial={false}>
                    {openIndex === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="text-ink/60 font-light leading-relaxed pb-8 md:pr-12 text-base md:text-lg">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </Reveal>
          </div>
          
        </div>
      </div>
    </section>
  );
};
