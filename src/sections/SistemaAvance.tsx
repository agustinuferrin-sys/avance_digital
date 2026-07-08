import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { methodSteps } from '../data/methodSteps';
import { Marquee } from '../components/Marquee';

export const SistemaAvance: React.FC = () => {
  return (
    <section id="sistema" className="py-24 md:py-32 bg-navy relative overflow-hidden flex flex-col">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand/[0.04] via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mb-16 md:mb-24">
        <Reveal>
          <SectionHeading subtitle="MÉTODO" className="mb-12 md:mb-20">
            SISTEMA AVANCE<span className="text-brand">®</span>
          </SectionHeading>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 relative">
          {/* Línea conectora base global para desktop, detrás de todo */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-brand/20 z-0" />

          {methodSteps.map((step, idx) => (
            <motion.div 
              key={step.número}
              initial={{ opacity: 0, x: -20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2, type: "spring", stiffness: 100 }}
              className="group flex flex-col cursor-default z-10"
            >
              <div className="w-full h-full flex flex-col bg-bg/50 md:bg-navy/80 backdrop-blur-sm border border-white/5 rounded-card p-6 md:p-8 transition-all duration-300 hover:border-brand/50 hover:bg-navy hover:-translate-y-2 hover:shadow-[0_8px_30px_-12px_rgba(27,77,228,0.5)] touch:border-brand/50 touch:bg-navy touch:shadow-[0_8px_30px_-12px_rgba(27,77,228,0.5)]">
                <span className="block font-display font-black text-5xl md:text-6xl text-brand/20 group-hover:text-brand touch:text-brand transition-colors duration-300 mb-4">
                  {step.número}
                </span>
                <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-3">
                  {step.título}
                </h3>
                <p className="text-sm text-muted font-body leading-relaxed group-hover:text-white/90 touch:text-white/90 transition-colors duration-300 mt-auto">
                  {step.descripción}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative z-10 bg-black/20 py-6 border-y border-white/5 w-full mt-auto">
        <Marquee speed={40} className="font-display font-black text-2xl md:text-3xl text-white/20 tracking-widest uppercase">
          SOCIAL MEDIA MANAGEMENT › BRANDING › PAID MEDIA › CONTENT CREATOR › UGC/INFLUENCERS › ACTIVACIONES › DISEÑO GRÁFICO › SITIO WEB › CONSULTORÍA ›&nbsp;
        </Marquee>
      </div>
    </section>
  );
};
