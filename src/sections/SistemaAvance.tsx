import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { methodSteps } from '../data/methodSteps';
import { Blob } from '../components/Blob';

export const SistemaAvance: React.FC = () => {
  return (
    <section id="sistema" className="py-32 bg-navy relative overflow-hidden">
      <Blob className="-right-64 top-1/2 -translate-y-1/2 w-[800px] h-[800px]" delay={1} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal>
          <SectionHeading subtitle="MÉTODO" className="mb-20">
            SISTEMA AVANCE<span className="text-brand">®</span>
          </SectionHeading>
        </Reveal>

        <div className="space-y-12 md:space-y-24">
          {methodSteps.map((step, idx) => (
            <Reveal key={step.número} delay={idx * 0.2}>
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center">
                <div className="font-display font-black text-6xl md:text-8xl lg:text-9xl text-white/5 opacity-80 md:w-1/3">
                  {step.número}
                </div>
                <div className="md:w-2/3 border-l-2 border-brandAlt/30 pl-8 md:pl-12 py-4">
                  <h3 className="font-display font-bold text-3xl md:text-4xl mb-4 text-white">
                    {step.título}
                  </h3>
                  <p className="text-xl text-muted font-light leading-relaxed">
                    {step.descripción}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
