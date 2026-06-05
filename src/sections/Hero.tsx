import React from 'react';
import { Blob } from '../components/Blob';
import { Button } from '../components/Button';
import { Marquee } from '../components/Marquee';
import { Reveal } from '../components/Reveal';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-bg pt-20">
      <Blob className="top-1/4 -left-32 w-[600px] h-[600px]" delay={0} />
      <Blob className="bottom-1/4 -right-32 w-[500px] h-[500px]" delay={2} />
      
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto z-10 relative mt-20 md:mt-0">
        <Reveal>
          <h1 className="font-display font-black text-6xl md:text-7xl lg:text-8xl leading-[1.1] mb-8">
            El <span className="text-brand">socio estratégico</span> que tu marca necesita.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-xl md:text-2xl text-muted font-light mb-12 max-w-3xl">
            Somos más que una agencia. Somos el socio estratégico que piensa con vos.
          </p>
        </Reveal>
        <Reveal delay={0.4}>
          <Button onClick={() => window.location.href='#contacto'} className="text-lg px-10 py-5">
            AVANCEMOS
          </Button>
        </Reveal>
      </div>

      <div className="mt-auto pb-12 w-full border-t border-white/5 bg-navy/30 backdrop-blur-sm z-10 pt-12">
        <Marquee speed={30} className="text-4xl md:text-5xl font-display font-black text-white/10 tracking-widest uppercase">
          AVANZÁ &middot; MÉTODO &middot; ESTRATEGIA &middot; RESULTADOS &middot;&nbsp;
        </Marquee>
      </div>
    </section>
  );
};
