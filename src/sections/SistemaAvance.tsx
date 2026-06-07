import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { methodSteps } from '../data/methodSteps';
import { Blob } from '../components/Blob';

export const SistemaAvance: React.FC = () => {
  return (
    <section id="sistema" className="py-40 bg-navy relative overflow-hidden">
      <Blob className="-right-64 top-1/2 -translate-y-1/2 w-[800px] h-[800px] blur-[150px]" delay={1} />
      <Blob className="-left-64 top-1/4 w-[600px] h-[600px] blur-[120px] opacity-30" delay={3} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal>
          <SectionHeading subtitle="MÉTODO" className="mb-32">
            SISTEMA AVANCE<span className="text-brand">®</span>
          </SectionHeading>
        </Reveal>

        <div className="space-y-32 md:space-y-48">
          {methodSteps.map((step, idx) => (
            <div key={step.número} className="relative flex flex-col md:flex-row items-center gap-12 md:gap-24 group">
              {/* Background giant number */}
              <div className="absolute top-1/2 left-0 -translate-y-1/2 font-display font-black text-[clamp(10rem,30vw,25rem)] leading-none text-white/[0.02] -z-10 pointer-events-none select-none transition-transform duration-700 group-hover:scale-110 group-hover:text-brand/[0.03]">
                {step.número}
              </div>
              
              {/* Content staggered alignment */}
              <div className={`w-full md:w-1/2 ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                <Reveal delay={0.1}>
                   <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand/10 text-brand font-display font-bold text-2xl mb-8 backdrop-blur-md border border-brand/20 group-hover:bg-brand group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(27,77,228,0.3)]">
                      {step.número}
                   </div>
                </Reveal>
                <Reveal delay={0.2}>
                  <h3 className="font-display font-black text-4xl md:text-5xl lg:text-6xl mb-6 text-white tracking-tight">
                    {step.título}
                  </h3>
                </Reveal>
                <Reveal delay={0.3}>
                  <p className="text-xl md:text-2xl text-muted font-light leading-relaxed max-w-lg">
                    {step.descripción}
                  </p>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
