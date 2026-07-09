import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../components/Reveal';
import { Button } from '../components/Button';
import { useLenis } from 'lenis/react';

const itemsArriba = ['Redes', 'Contenido', 'Diseño', 'Publicidad', 'Producciones', 'Web', 'Resultados'];
const itemsAbajo = ['Diagnóstico', 'Estrategia', 'Identidad', 'Posicionamiento', 'Mensaje', 'Oferta', 'Procesos', 'Análisis', 'Constancia'];

const LeaderItem: React.FC<{ label: string; delay: number }> = ({ label, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: 24 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    className="flex items-center gap-3"
  >
    <span className="w-2 h-2 rounded-full border border-white/60 shrink-0" />
    <span className="h-px flex-1 bg-white/15 min-w-[24px] md:min-w-[48px]" style={{ borderTop: '1px dashed rgba(255,255,255,0.25)', background: 'none' }} />
    <span className="text-white/85 font-body font-light text-sm md:text-base whitespace-nowrap">{label}</span>
  </motion.div>
);

export const Iceberg: React.FC = () => {
  const lenis = useLenis();
  const scrollToContacto = () => lenis?.scrollTo('#contacto', { offset: -80 });

  return (
    <section id="iceberg" className="relative min-h-screen bg-bg overflow-hidden">
      {/* ZONA SUPERIOR — LO QUE SE VE */}
      <div className="relative pt-20 md:pt-28 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-black text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 tracking-tight">
              LO QUE SE VE
            </h2>
            <p className="text-muted font-light mt-2">Es solo una parte</p>
          </Reveal>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <div className="flex justify-center md:justify-start">
            <img
              src="/images/iceberg/top.webp"
              alt="Pico del iceberg"
              className="h-[28vh] md:h-[38vh] w-auto object-contain drop-shadow-[0_10px_40px_rgba(147,197,253,0.15)]"
            />
          </div>
          <div className="flex flex-col gap-4 md:gap-5 pb-4">
            {itemsArriba.map((label, i) => (
              <LeaderItem key={label} label={label} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </div>

      {/* LÍNEA DE AGUA */}
      <div className="relative w-full h-[10vh] md:h-[14vh]">
        <motion.img
          src="/images/iceberg/water.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          animate={{ x: [0, -8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          style={{ filter: 'brightness(1)' }}
        />
        <motion.img
          src="/images/iceberg/water.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ filter: 'brightness(1.15)', mixBlendMode: 'screen' }}
        />
        {/* Overlays de ola SVG animados */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.svg
            className="absolute top-1/2 -translate-y-1/2 h-10 md:h-14 w-[200%]"
            viewBox="0 0 1600 60"
            preserveAspectRatio="none"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          >
            <path
              d="M0,30 Q50,10 100,30 T200,30 T300,30 T400,30 T500,30 T600,30 T700,30 T800,30 T900,30 T1000,30 T1100,30 T1200,30 T1300,30 T1400,30 T1500,30 T1600,30"
              fill="none" stroke="#93C5FD" strokeWidth="2" opacity="0.2"
            />
          </motion.svg>
          <motion.svg
            className="absolute top-1/2 -translate-y-1/2 h-6 md:h-8 w-[200%]"
            viewBox="0 0 1600 40"
            preserveAspectRatio="none"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          >
            <path
              d="M0,20 Q40,5 80,20 T160,20 T240,20 T320,20 T400,20 T480,20 T560,20 T640,20 T720,20 T800,20 T880,20 T960,20 T1040,20 T1120,20 T1200,20 T1280,20 T1360,20 T1440,20 T1520,20 T1600,20"
              fill="none" stroke="#1B4DE4" strokeWidth="2" opacity="0.25"
            />
          </motion.svg>
        </div>
      </div>

      {/* ZONA INFERIOR — LO QUE HACEMOS */}
      <div className="relative pt-8 pb-24 md:pb-32 bg-gradient-to-b from-navy to-bg">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-black text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 tracking-tight">
              LO QUE HACEMOS
            </h2>
            <p className="text-muted font-light mt-2">Es lo que sostiene el crecimiento</p>
          </Reveal>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <img
              src="/images/iceberg/bottom.webp"
              alt="Masa sumergida del iceberg"
              className="h-[38vh] md:h-[55vh] w-auto object-contain opacity-90"
              style={{ filter: 'blur(0.5px)' }}
            />
          </div>
          <div className="flex flex-col gap-4 md:gap-5 order-1 md:order-2">
            {itemsAbajo.map((label, i) => (
              <LeaderItem key={label} label={label} delay={0.4 + i * 0.08} />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 flex flex-col items-center gap-10 text-center">
          <p
            className="text-white/90 text-2xl md:text-3xl"
            style={{ fontFamily: "'Caveat', cursive", transform: 'rotate(-3deg)' }}
          >
            Cada acción necesita una razón, una dirección y un objetivo
          </p>
          <Button onClick={scrollToContacto}>
            Quiero trabajar con <span className="font-black">método</span>
          </Button>
        </div>
      </div>
    </section>
  );
};
