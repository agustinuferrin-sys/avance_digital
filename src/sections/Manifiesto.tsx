import React from 'react';
import { Reveal } from '../components/Reveal';

export const Manifiesto: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-navy relative text-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand/[0.04] via-transparent to-transparent pointer-events-none" />
      <div className="max-w-5xl mx-auto relative z-10">
        <Reveal>
          <h2 className="font-display font-black leading-[1.05] tracking-tight mb-12 text-4xl md:text-5xl lg:text-6xl text-white">
            "No hablamos de marketing.<br /> Mostramos lo que el <span className="text-brand">marketing soluciona</span>."
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="w-px h-16 bg-gradient-to-b from-brand to-transparent mx-auto mb-12" />
        </Reveal>
        <Reveal delay={0.4}>
          <p className="text-xl md:text-2xl text-muted font-light leading-relaxed max-w-3xl mx-auto tracking-tight">
            AVANCE nació de emprender desde cero, de equivocarse y de volver a empezar. 
            Conocemos el camino porque lo caminamos. Hoy aplicamos ese sistema probado 
            para escalar negocios que están listos para dar el salto.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
