import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Reveal } from '../components/Reveal';
import { methodSteps, MethodStep } from '../data/methodSteps';
import { Marquee } from '../components/Marquee';
import { cn } from '../lib/utils';

interface PillCardProps {
  step: MethodStep;
  variant: 'blue' | 'black';
}

const PillCard: React.FC<PillCardProps> = ({ step, variant }) => (
  <div
    className={cn(
      'relative flex flex-col justify-center min-h-[171px] md:min-h-[198px] rounded-pill px-8 py-8 md:px-9 md:py-9 transition-all duration-300 hover:brightness-110 text-white',
      variant === 'blue'
        ? 'bg-gradient-to-br from-brand to-brandAlt shadow-[0_0_40px_rgba(27,77,228,0.3)]'
        : 'bg-bg border border-white/10'
    )}
  >
    <span className={cn('font-display font-black text-4xl md:text-5xl mb-3', variant === 'blue' ? 'text-white/30' : 'text-brand/40')}>
      {step.número}
    </span>
    <h3 className="font-display font-bold text-xl md:text-2xl mb-2">{step.título}</h3>
    <p className={cn('text-sm md:text-base font-body leading-relaxed', variant === 'blue' ? 'text-white/85' : 'text-white/70')}>
      {step.descripción}
    </p>
  </div>
);

// geometría de los tubos: conector orgánico tipo "cuello de reloj de arena" entre dos
// puntos cualquiera (recto, diagonal, lo que haga falta) — nace fino desde el borde de
// una pill, se mantiene angosto, y se ensancha recién al fundirse con la siguiente.
const OVERLAP = 16;
const FLARE = 18;
const NECK = 5;
const MOBILE_OVERLAP = 10;
const MOBILE_TUBE_WIDTH = 4;

function capsuleTube(x1: number, y1: number, x2: number, y2: number): string {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  const px = -uy;
  const py = ux;

  const ax = x1 - ux * OVERLAP;
  const ay = y1 - uy * OVERLAP;
  const bx = x2 + ux * OVERLAP;
  const by = y2 + uy * OVERLAP;
  const midx = (ax + bx) / 2;
  const midy = (ay + by) / 2;
  const segLen = Math.hypot(bx - ax, by - ay);
  const k = segLen * 0.32;
  const cx = ux * k;
  const cy = uy * k;

  const aLx = ax + px * FLARE, aLy = ay + py * FLARE;
  const aRx = ax - px * FLARE, aRy = ay - py * FLARE;
  const mLx = midx + px * NECK, mLy = midy + py * NECK;
  const mRx = midx - px * NECK, mRy = midy - py * NECK;
  const bLx = bx + px * FLARE, bLy = by + py * FLARE;
  const bRx = bx - px * FLARE, bRy = by - py * FLARE;

  return [
    `M ${aLx} ${aLy}`,
    `C ${aLx + cx} ${aLy + cy}, ${mLx - cx} ${mLy - cy}, ${mLx} ${mLy}`,
    `C ${mLx + cx} ${mLy + cy}, ${bLx - cx} ${bLy - cy}, ${bLx} ${bLy}`,
    `L ${bRx} ${bRy}`,
    `C ${bRx - cx} ${bRy - cy}, ${mRx + cx} ${mRy + cy}, ${mRx} ${mRy}`,
    `C ${mRx - cx} ${mRy - cy}, ${aRx + cx} ${aRy + cy}, ${aRx} ${aRy}`,
    'Z',
  ].join(' ');
}

interface Box {
  top: number;
  bottom: number;
  left: number;
  right: number;
  centerX: number;
  centerY: number;
}

function boxOf(el: HTMLElement): Box {
  const top = el.offsetTop;
  const left = el.offsetLeft;
  const width = el.offsetWidth;
  const height = el.offsetHeight;
  return { top, bottom: top + height, left, right: left + width, centerX: left + width / 2, centerY: top + height / 2 };
}

interface DesktopTubes {
  width: number;
  height: number;
  a: string;
  b: string;
  c: string;
  d: string;
  gradient1: { x1: number; y1: number; x2: number; y2: number };
}

interface MobileTube {
  left: number;
  top: number;
  height: number;
}

// 9 pasos del scroll-scrub: cuadro, tubo, cuadro, tubo... hasta el 5to cuadro.
// Cada elemento se revela atado al progreso real del scroll dentro de la sección (reversible).
const TOTAL_STEPS = 9;

function useStepAnim(progress: MotionValue<number>, index: number) {
  const t0 = index / TOTAL_STEPS;
  const t1 = t0 + (1 / TOTAL_STEPS) * 0.85;
  const opacity = useTransform(progress, [t0, t1], [0, 1]);
  const y = useTransform(progress, [t0, t1], [24, 0]);
  return { opacity, y };
}

export const SistemaAvance: React.FC = () => {
  const [entender, ordenar, ejecutar, medir, escalar] = methodSteps;

  const wrapperRef = useRef<HTMLDivElement>(null);
  const entenderRef = useRef<HTMLDivElement>(null);
  const ordenarRef = useRef<HTMLDivElement>(null);
  const ejecutarRef = useRef<HTMLDivElement>(null);
  const medirRef = useRef<HTMLDivElement>(null);
  const escalarRef = useRef<HTMLDivElement>(null);

  const [desktopTubes, setDesktopTubes] = useState<DesktopTubes | null>(null);
  const [mobileTubes, setMobileTubes] = useState<MobileTube[] | null>(null);

  const measure = useCallback(() => {
    const wrapper = wrapperRef.current;
    const entenderEl = entenderRef.current;
    const ordenarEl = ordenarRef.current;
    const ejecutarEl = ejecutarRef.current;
    const medirEl = medirRef.current;
    const escalarEl = escalarRef.current;
    if (!wrapper || !entenderEl || !ordenarEl || !ejecutarEl || !medirEl || !escalarEl) return;

    const e = boxOf(entenderEl);
    const o = boxOf(ordenarEl);
    const ej = boxOf(ejecutarEl);
    const m = boxOf(medirEl);
    const es = boxOf(escalarEl);

    // tubo 1 sale del borde izquierdo de "Entender" (difuminado) hacia el borde superior de "Ordenar"
    const g1 = { x1: e.left, y1: e.centerY, x2: o.centerX, y2: o.top };

    setDesktopTubes({
      width: wrapper.offsetWidth,
      height: wrapper.offsetHeight,
      a: capsuleTube(g1.x1, g1.y1, g1.x2, g1.y2),
      b: capsuleTube(o.right, o.centerY, ej.left, ej.centerY),
      c: capsuleTube(ej.centerX, ej.bottom, m.centerX, m.top),
      d: capsuleTube(m.left, m.centerY, es.right, es.centerY),
      gradient1: g1,
    });

    setMobileTubes([
      { left: e.centerX - MOBILE_TUBE_WIDTH / 2, top: e.bottom - MOBILE_OVERLAP, height: o.top - e.bottom + 2 * MOBILE_OVERLAP },
      { left: o.centerX - MOBILE_TUBE_WIDTH / 2, top: o.bottom - MOBILE_OVERLAP, height: ej.top - o.bottom + 2 * MOBILE_OVERLAP },
      { left: ej.centerX - MOBILE_TUBE_WIDTH / 2, top: ej.bottom - MOBILE_OVERLAP, height: m.top - ej.bottom + 2 * MOBILE_OVERLAP },
      { left: m.centerX - MOBILE_TUBE_WIDTH / 2, top: m.bottom - MOBILE_OVERLAP, height: es.top - m.bottom + 2 * MOBILE_OVERLAP },
    ]);
  }, []);

  useLayoutEffect(() => {
    measure();

    const ro = new ResizeObserver(() => measure());
    if (wrapperRef.current) ro.observe(wrapperRef.current);
    window.addEventListener('resize', measure);
    document.fonts?.ready?.then(measure).catch(() => {});

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [measure]);

  const { scrollYProgress } = useScroll({ target: wrapperRef, offset: ['start 0.8', 'end 0.5'] });

  const entenderAnim = useStepAnim(scrollYProgress, 0);
  const tube1Anim = useStepAnim(scrollYProgress, 1);
  const ordenarAnim = useStepAnim(scrollYProgress, 2);
  const tube2Anim = useStepAnim(scrollYProgress, 3);
  const ejecutarAnim = useStepAnim(scrollYProgress, 4);
  const tube3Anim = useStepAnim(scrollYProgress, 5);
  const medirAnim = useStepAnim(scrollYProgress, 6);
  const tube4Anim = useStepAnim(scrollYProgress, 7);
  const escalarAnim = useStepAnim(scrollYProgress, 8);

  return (
    <section id="sistema" className="pt-24 md:pt-32 bg-bg relative overflow-hidden flex flex-col">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand/[0.04] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mb-16 md:mb-24">
        <Reveal>
          <h2
            className="text-center font-display font-black text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight"
            style={{
              backgroundImage: 'linear-gradient(to bottom, var(--color-chromeLight) 0%, var(--color-muted) 50%, var(--color-chromeDark) 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 6px rgba(0,0,0,0.5)',
              WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 10%, black 100%)',
              maskImage: 'linear-gradient(to top, transparent 0%, black 10%, black 100%)',
            }}
          >
            MÉTODO AVANCE<span className="text-brand">®</span>
          </h2>

          <div className="mt-8 md:mt-10 max-w-2xl mx-auto text-center">
            <p className="font-display font-bold text-lg md:text-xl text-brand">No aplicamos fórmulas</p>
            <p className="font-body text-base md:text-lg text-white/80 mt-1">
              Analizamos, ordenamos y construimos el camino que cada marca necesita para avanzar.
            </p>
          </div>
          <div className="mt-8 md:mt-10 h-px w-full bg-white/10" />
        </Reveal>

        {/* Cadena de 5 cuadros iguales conectados por tubos: todo el reveal (cuadro→tubo→cuadro...)
            queda atado 1:1 al progreso real del scroll dentro de esta sección */}
        <div ref={wrapperRef} className="mt-12 md:mt-16 relative">
          {/* tubos desktop: cápsulas bezier "hueso de perro", detrás de las pills */}
          {desktopTubes && (
            <svg
              className="absolute inset-0 hidden md:block pointer-events-none z-0"
              width={desktopTubes.width}
              height={desktopTubes.height}
              viewBox={`0 0 ${desktopTubes.width} ${desktopTubes.height}`}
              aria-hidden="true"
              focusable="false"
            >
              <defs>
                <linearGradient
                  id="tube1-fade"
                  gradientUnits="userSpaceOnUse"
                  x1={desktopTubes.gradient1.x1}
                  y1={desktopTubes.gradient1.y1}
                  x2={desktopTubes.gradient1.x2}
                  y2={desktopTubes.gradient1.y2}
                >
                  <stop offset="0%" stopColor="var(--color-brand)" stopOpacity="0" />
                  <stop offset="100%" stopColor="var(--color-brand)" stopOpacity="1" />
                </linearGradient>
                {/* mismo degradé diagonal brand→brandAlt que llevan las pills rellenas,
                    para que el tubo se funda con el color real del borde de la pill y no
                    quede una costura de color donde se supone que es una sola masa */}
                <linearGradient id="tube-fill-diag" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="var(--color-brand)" />
                  <stop offset="100%" stopColor="var(--color-brandAlt)" />
                </linearGradient>
              </defs>
              <motion.path d={desktopTubes.a} fill="url(#tube1-fade)" style={{ opacity: tube1Anim.opacity }} />
              <motion.path d={desktopTubes.b} fill="url(#tube-fill-diag)" style={{ opacity: tube2Anim.opacity }} />
              <motion.path d={desktopTubes.c} fill="url(#tube-fill-diag)" style={{ opacity: tube3Anim.opacity }} />
              <motion.path d={desktopTubes.d} fill="url(#tube-fill-diag)" style={{ opacity: tube4Anim.opacity }} />
            </svg>
          )}

          {/* tubos mobile: líneas rectas entre pills consecutivas (layout de una sola columna) */}
          {mobileTubes && (
            <div className="absolute inset-0 md:hidden pointer-events-none z-0" aria-hidden="true">
              <motion.div
                className="absolute bg-brand rounded-full"
                style={{ left: mobileTubes[0].left, top: mobileTubes[0].top, width: MOBILE_TUBE_WIDTH, height: Math.max(mobileTubes[0].height, 0), opacity: tube1Anim.opacity }}
              />
              <motion.div
                className="absolute bg-brand rounded-full"
                style={{ left: mobileTubes[1].left, top: mobileTubes[1].top, width: MOBILE_TUBE_WIDTH, height: Math.max(mobileTubes[1].height, 0), opacity: tube2Anim.opacity }}
              />
              <motion.div
                className="absolute bg-brand rounded-full"
                style={{ left: mobileTubes[2].left, top: mobileTubes[2].top, width: MOBILE_TUBE_WIDTH, height: Math.max(mobileTubes[2].height, 0), opacity: tube3Anim.opacity }}
              />
              <motion.div
                className="absolute bg-brand rounded-full"
                style={{ left: mobileTubes[3].left, top: mobileTubes[3].top, width: MOBILE_TUBE_WIDTH, height: Math.max(mobileTubes[3].height, 0), opacity: tube4Anim.opacity }}
              />
            </div>
          )}

          {/* grid explícito 2 columnas x 3 filas: "Entender" solo ocupa fila 1 columna 1,
              todos los cuadros del mismo tamaño; en mobile cae a columna única en orden 1→5 */}
          <div className="relative z-10 grid gap-x-3 gap-y-4 md:gap-x-4 md:gap-y-[22px] md:grid-cols-2 md:grid-rows-3">
            <motion.div ref={entenderRef} className="md:col-start-1 md:row-start-1" style={{ opacity: entenderAnim.opacity, y: entenderAnim.y }}>
              <PillCard step={entender} variant="blue" />
            </motion.div>

            <motion.div ref={ordenarRef} className="md:col-start-1 md:row-start-2" style={{ opacity: ordenarAnim.opacity, y: ordenarAnim.y }}>
              <PillCard step={ordenar} variant="black" />
            </motion.div>
            <motion.div ref={ejecutarRef} className="md:col-start-2 md:row-start-2" style={{ opacity: ejecutarAnim.opacity, y: ejecutarAnim.y }}>
              <PillCard step={ejecutar} variant="blue" />
            </motion.div>

            <motion.div ref={medirRef} className="md:col-start-2 md:row-start-3" style={{ opacity: medirAnim.opacity, y: medirAnim.y }}>
              <PillCard step={medir} variant="black" />
            </motion.div>
            <motion.div ref={escalarRef} className="md:col-start-1 md:row-start-3" style={{ opacity: escalarAnim.opacity, y: escalarAnim.y }}>
              <PillCard step={escalar} variant="blue" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative z-10 bg-brand py-6 md:py-8 w-full mt-auto">
        <Marquee speed={40} className="font-display font-black text-xl md:text-3xl text-white tracking-widest uppercase">
          SOCIAL MEDIA MANAGEMENT › BRANDING › PAID MEDIA › CONTENT CREATOR › UGC/INFLUENCERS › ACTIVACIONES › DISEÑO GRÁFICO › SITIO WEB › CONSULTORÍA ›&nbsp;
        </Marquee>
      </div>
    </section>
  );
};
