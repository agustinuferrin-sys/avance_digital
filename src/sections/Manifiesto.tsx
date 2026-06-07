import React from 'react';
import { Reveal } from '../components/Reveal';

export const Manifiesto: React.FC = () => {
  return (
    <section className="py-48 bg-navy relative text-center px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand/[0.04] via-transparent to-transparent pointer-events-none" />
      <div className="max-w-5xl mx-auto relative z-10">
        <Reveal>
          <h2 className="font-display font-black leading-[1.05] tracking-[-0.04em] mb-16 text-[clamp(2.5rem,7vw,7rem)] text-white">
            "No hablamos de marketing.<br /> Mostramos lo que el <span className="text-brand">marketing soluciona</span>."
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="w-px h-24 bg-gradient-to-b from-brand to-transparent mx-auto mb-16" />
        </Reveal>
        <Reveal delay={0.4}>
          <p className="text-2xl md:text-3xl text-muted font-light leading-relaxed max-w-3xl mx-auto tracking-tight">
            AVANCE nació de emprender desde cero, de equivocarse y de volver a empezar. 
            Conocemos el camino porque lo caminamos. Hoy aplicamos ese sistema probado 
            para escalar negocios que están listos para dar el salto.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
