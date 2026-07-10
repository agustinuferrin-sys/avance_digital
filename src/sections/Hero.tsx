import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { Marquee } from '../components/Marquee';
import { Reveal } from '../components/Reveal';

export const Hero: React.FC = () => {
  const titleWords = "El socio estratégico que tu marca necesita.".split(" ");

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-bg pt-20">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 opacity-85 pointer-events-none">
        <video
          src="/video/videoplayback.webm"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Vignette oscuro, solo detrás del texto, para mantener la legibilidad del titular */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_45%,_rgba(0,0,0,0.6)_0%,_rgba(0,0,0,0.2)_45%,_transparent_75%)] pointer-events-none" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand/[0.05] via-transparent to-transparent pointer-events-none" />
      
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 max-w-7xl mx-auto z-10 relative mt-20 md:mt-0">
        <h1 className="font-display font-black leading-[1.05] tracking-[-0.02em] mb-8 text-5xl md:text-6xl lg:text-7xl xl:text-8xl flex flex-wrap justify-center gap-x-[0.2em]">
          {titleWords.map((word, i) => (
            <span key={i} className="overflow-hidden inline-block pb-2">
              <motion.span
                className={`inline-block ${word.includes('estratégico') ? 'text-brand' : 'text-white'}`}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <Reveal delay={0.6}>
          <p className="text-xl md:text-2xl text-white/90 font-medium mb-12 max-w-[90vw] md:max-w-none mx-auto text-center tracking-tight drop-shadow-md md:whitespace-nowrap">
            Somos más que una agencia. Somos el socio estratégico que piensa con vos.
          </p>
        </Reveal>

        <Reveal delay={0.8} className="flex justify-center w-full">
          <Button onClick={() => window.location.href='#contacto'} className="text-base md:text-lg px-8 py-3 min-w-[180px]">
            AVANCEMOS
          </Button>
        </Reveal>
      </div>

      <div className="mt-auto pb-12 w-full border-t border-white/5 bg-navy/30 backdrop-blur-sm z-10 pt-12">
        <Marquee speed={30} className="text-4xl md:text-5xl font-display font-black text-white/10 tracking-widest uppercase">
          AVANZÁ › MÉTODO › ESTRATEGIA › RESULTADOS ›&nbsp;
        </Marquee>
      </div>
    </section>
  );
};
