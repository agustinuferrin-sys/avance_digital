import React from 'react';
import { Marquee } from '../components/Marquee';
import { Reveal } from '../components/Reveal';

export const Filosofia: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-bg">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 opacity-95 pointer-events-none">
        <video
          src="/video/videoplayback.webm"
          autoPlay
          loop
          muted
          playsInline
          className="w-full object-cover"
          style={{ height: '200%', transform: 'translateY(-50%)' }}
        />
      </div>

      {/* Vignette oscuro, solo detrás del texto, para mantener la legibilidad */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_65%_70%_at_50%_50%,_rgba(0,0,0,0.65)_0%,_rgba(0,0,0,0.25)_45%,_transparent_78%)] pointer-events-none" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto z-10 relative py-20">
        <Reveal delay={0.1}>
          <h2 className="font-display font-black text-6xl md:text-8xl lg:text-9xl text-white mb-8 tracking-tight">
            AVANCE<span className="text-brand">®</span>
          </h2>
        </Reveal>
        
        <Reveal delay={0.3}>
          <p className="text-xl md:text-2xl lg:text-3xl font-body font-light text-white/90 leading-relaxed tracking-tight max-w-3xl mb-12">
            Trabajamos entendiendo primero tu negocio: su etapa, sus objetivos, su comunicación y sus oportunidades reales de crecimiento.
          </p>
        </Reveal>

        <Reveal delay={0.5}>
          <div className="inline-block bg-brand text-white px-6 md:px-10 py-4 rounded-full font-body text-base md:text-lg shadow-[0_4px_30px_rgba(27,77,228,0.4)]">
            <span className="font-light">No se trata de hacer más.</span> <strong className="font-black ml-1">Se trata de avanzar mejor.</strong>
          </div>
        </Reveal>
      </div>

      {/* Marquee Footer */}
      <div className="w-full bg-brand z-10 py-6 border-y border-white/10">
        <Marquee speed={30} className="text-2xl md:text-3xl font-display font-black text-white tracking-widest uppercase">
          ESTRATÉGIA › RESULTADOS › AVANZÁ › MÉTODO › ESTRATÉGIA ›&nbsp;
        </Marquee>
      </div>
    </section>
  );
};
