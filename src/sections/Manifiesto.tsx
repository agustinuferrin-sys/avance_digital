import React from 'react';
import { Reveal } from '../components/Reveal';

export const Manifiesto: React.FC = () => {
  return (
    <section className="py-40 bg-bg text-center px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-12">
            "No hablamos de marketing. Mostramos lo que el <span className="text-brand">marketing soluciona</span>."
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-lg md:text-xl text-muted font-light leading-relaxed max-w-2xl mx-auto">
            AVANCE nació de emprender desde cero, de equivocarse y de volver a empezar. 
            Conocemos el camino porque lo caminamos. Hoy aplicamos ese sistema probado 
            para escalar negocios que están listos para dar el salto.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
