import React from 'react';
import { motion } from 'framer-motion';
import { Blob } from '../components/Blob';
import { Button } from '../components/Button';
import { Marquee } from '../components/Marquee';
import { Reveal } from '../components/Reveal';

export const Hero: React.FC = () => {
  const titleWords = "El socio estratégico que tu marca necesita.".split(" ");

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-bg pt-20">
      <Blob className="top-1/4 -left-32 w-[600px] h-[600px] md:w-[800px] md:h-[800px] blur-[120px]" delay={0} />
      <Blob className="bottom-1/4 -right-32 w-[500px] h-[500px] md:w-[700px] md:h-[700px] blur-[120px]" delay={2} />
      
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 max-w-7xl mx-auto z-10 relative mt-20 md:mt-0">
        <h1 className="font-display font-black leading-[1.05] tracking-[-0.04em] mb-10 text-[clamp(3.5rem,8vw,9rem)] flex flex-wrap justify-center gap-x-[0.2em]">
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
          <p className="text-xl md:text-3xl lg:text-4xl text-muted font-light mb-16 max-w-4xl tracking-tight">
            Somos más que una agencia. Somos el socio estratégico que piensa con vos.
          </p>
        </Reveal>
        <Reveal delay={0.8}>
          <Button onClick={() => window.location.href='#contacto'} className="text-lg md:text-xl px-12 py-6">
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
