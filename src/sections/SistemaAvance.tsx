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
      'relative flex flex-col justify-center min-h-[112px] md:min-h-[132px] rounded-pill px-6 py-5 md:px-7 md:py-6 transition-all duration-300 hover:brightness-110 text-white',
      variant === 'blue'
        ? 'bg-gradient-to-br from-brand to-brandAlt shadow-[0_0_40px_rgba(24,113,255,0.3)]'
        : 'bg-bg border border-white/10'
    )}
  >
    <h3 className="font-display font-bold text-2xl md:text-3xl mb-2">{step.título}</h3>
    <p className={cn('text-xs md:text-sm font-body leading-relaxed', variant === 'blue' ? 'text-white/85' : 'text-white/70')}>
      {step.descripción}
    </p>
  </div>
);

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

interface ImgBox {
  left: number;
  top: number;
  width: number;
  height: number;
}

interface DesktopConnectors {
  tailEntender: ImgBox;
  vConn1: ImgBox;
  hConn1: ImgBox;
  tailMedir: ImgBox;
  vConn2: ImgBox;
  hConn2: ImgBox;
}

// conectores: assets webp pre-renderizados por la diseñadora, posicionados con las medidas
// reales de las cards (boxOf). Ya no se calculan tubos por código.
const TAIL_HEIGHT_RATIO = 0.9; // alto de la cola respecto al alto de su card
// rounded-pill es una cápsula: el borde izq/der de la card es un arco que retrocede hasta
// radio = alto/2 en la punta. Un overlap fijo en px se queda corto ahí y asoma un filo de la
// cola por detrás de la punta redondeada. Con overlap ≥ 0.5×alto (el radio) queda cubierta
// para cualquier tamaño de card, sea cual sea el breakpoint.
const TAIL_OVERLAP_RATIO = 0.6;
const TAIL_BLEED = 6000; // ancho de sobra hacia la izquierda; el overflow-hidden de la sección la recorta en el borde real del viewport

const VCONN_OVERLAP = 30; // cuánto entra cada extremo del conector vertical debajo de su card
const VCONN_WIDTH_RATIO = 357 / 506; // proporción real de conector-v.webp (ancho/alto)

const HCONN_OVERLAP = 15; // cuánto entra cada extremo del conector horizontal debajo de su card (menos que el vertical para que no se lo coma la card)
const HCONN_HEIGHT_RATIO = 447 / 1558; // proporción real de conector-h.webp (alto/ancho)

const MOBILE_OVERLAP = 20; // solape del conector vertical mobile sobre cada card
const MOBILE_CONN_WIDTH_RATIO = 357 / 506; // misma proporción de conector-v.webp

function tailBox(card: Box): ImgBox {
  const cardHeight = card.bottom - card.top;
  const height = cardHeight * TAIL_HEIGHT_RATIO;
  const right = card.left + cardHeight * TAIL_OVERLAP_RATIO;
  return { left: right - TAIL_BLEED, width: TAIL_BLEED, top: card.centerY - height / 2, height };
}

function vConnBox(top: Box, bottom: Box): ImgBox {
  const topY = top.bottom - VCONN_OVERLAP;
  const bottomY = bottom.top + VCONN_OVERLAP;
  const height = Math.max(bottomY - topY, 0);
  const width = height * VCONN_WIDTH_RATIO;
  const centerX = (top.centerX + bottom.centerX) / 2;
  return { left: centerX - width / 2, top: topY, width, height };
}

function hConnBox(left: Box, right: Box): ImgBox {
  const leftX = left.right - HCONN_OVERLAP;
  const rightX = right.left + HCONN_OVERLAP;
  const width = Math.max(rightX - leftX, 0);
  const height = width * HCONN_HEIGHT_RATIO;
  const centerY = (left.centerY + right.centerY) / 2;
  return { left: leftX, top: centerY - height / 2, width, height };
}

function mobileConnBox(top: Box, bottom: Box): ImgBox {
  const topY = top.bottom - MOBILE_OVERLAP;
  const bottomY = bottom.top + MOBILE_OVERLAP;
  const height = Math.max(bottomY - topY, 0);
  const width = height * MOBILE_CONN_WIDTH_RATIO;
  const centerX = (top.centerX + bottom.centerX) / 2;
  return { left: centerX - width / 2, top: topY, width, height };
}

// 5 pasos del scroll-scrub: en cada paso aparecen JUNTOS el conector entrante y su card
// (antes alternaba conector/card por separado y dejaba el último cuadro ilegible).
// Atado 1:1 al progreso real del scroll dentro de la sección (reversible).
const TOTAL_STEPS = 5;
const SCROLL_OFFSET_START = 'start 0.75';
const SCROLL_OFFSET_END = 'center 0.5';

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

  const [desktopConnectors, setDesktopConnectors] = useState<DesktopConnectors | null>(null);
  const [mobileConnectors, setMobileConnectors] = useState<ImgBox[] | null>(null);

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

    setDesktopConnectors({
      tailEntender: tailBox(e),
      vConn1: vConnBox(e, o),
      hConn1: hConnBox(o, ej),
      tailMedir: tailBox(m),
      vConn2: vConnBox(ej, es),
      hConn2: hConnBox(m, es),
    });

    setMobileConnectors([
      mobileConnBox(e, o),
      mobileConnBox(o, ej),
      mobileConnBox(ej, m),
      mobileConnBox(m, es),
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

  const { scrollYProgress } = useScroll({ target: wrapperRef, offset: [SCROLL_OFFSET_START, SCROLL_OFFSET_END] });

  const step1 = useStepAnim(scrollYProgress, 0); // cola-entender + card Entender
  const step2 = useStepAnim(scrollYProgress, 1); // conector vertical 1 + card Ordenar
  const step3 = useStepAnim(scrollYProgress, 2); // conector horizontal 1 + card Ejecutar
  const step4 = useStepAnim(scrollYProgress, 3); // cola-medir + card Medir
  const step5 = useStepAnim(scrollYProgress, 4); // conector vertical 2 + horizontal 2 + card Escalar

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

        {/* Cadena de 5 cuadros conectados por assets webp (colas/conectores), todo el reveal
            (conector+card juntos) queda atado 1:1 al progreso real del scroll dentro de esta sección */}
        <div ref={wrapperRef} className="mt-12 md:mt-16 relative">
          {/* conectores desktop: imágenes webp detrás de las cards, que al ser opacas tapan el solape */}
          {desktopConnectors && (
            <div className="absolute inset-0 hidden md:block z-0 pointer-events-none" aria-hidden="true">
              <motion.img
                src="/images/metodo/cola-entender.webp"
                alt=""
                className="absolute object-fill"
                style={{ ...desktopConnectors.tailEntender, opacity: step1.opacity }}
              />
              <motion.img
                src="/images/metodo/conector-v.webp"
                alt=""
                className="absolute object-fill"
                style={{ ...desktopConnectors.vConn1, opacity: step2.opacity }}
              />
              <motion.img
                src="/images/metodo/conector-h.webp"
                alt=""
                className="absolute object-fill"
                style={{ ...desktopConnectors.hConn1, opacity: step3.opacity }}
              />
              <motion.img
                src="/images/metodo/cola-medir.webp"
                alt=""
                className="absolute object-fill"
                style={{ ...desktopConnectors.tailMedir, opacity: step4.opacity }}
              />
              <motion.img
                src="/images/metodo/conector-v.webp"
                alt=""
                className="absolute object-fill"
                style={{ ...desktopConnectors.vConn2, opacity: step5.opacity }}
              />
              <motion.img
                src="/images/metodo/conector-h.webp"
                alt=""
                className="absolute object-fill"
                style={{ ...desktopConnectors.hConn2, opacity: step5.opacity }}
              />
            </div>
          )}

          {/* conectores mobile: conector-v.webp estirado entre cards consecutivas (columna única) */}
          {mobileConnectors && (
            <div className="absolute inset-0 md:hidden z-0 pointer-events-none" aria-hidden="true">
              <motion.img
                src="/images/metodo/conector-v.webp"
                alt=""
                className="absolute object-fill"
                style={{ ...mobileConnectors[0], opacity: step2.opacity }}
              />
              <motion.img
                src="/images/metodo/conector-v.webp"
                alt=""
                className="absolute object-fill"
                style={{ ...mobileConnectors[1], opacity: step3.opacity }}
              />
              <motion.img
                src="/images/metodo/conector-v.webp"
                alt=""
                className="absolute object-fill"
                style={{ ...mobileConnectors[2], opacity: step4.opacity }}
              />
              <motion.img
                src="/images/metodo/conector-v.webp"
                alt=""
                className="absolute object-fill"
                style={{ ...mobileConnectors[3], opacity: step5.opacity }}
              />
            </div>
          )}

          {/* grid explícito 2 columnas x 3 filas: Entender ocupa fila 1 columna 1, todos los
              cuadros del mismo tamaño; en mobile cae a columna única en orden 1→5 */}
          <div className="relative z-10 grid gap-x-3 gap-y-8 md:gap-x-16 md:gap-y-10 md:grid-cols-2 md:grid-rows-3">
            <motion.div ref={entenderRef} className="md:col-start-1 md:row-start-1" style={{ opacity: step1.opacity, y: step1.y }}>
              <PillCard step={entender} variant="blue" />
            </motion.div>

            <motion.div ref={ordenarRef} className="md:col-start-1 md:row-start-2" style={{ opacity: step2.opacity, y: step2.y }}>
              <PillCard step={ordenar} variant="black" />
            </motion.div>
            <motion.div ref={ejecutarRef} className="md:col-start-2 md:row-start-2" style={{ opacity: step3.opacity, y: step3.y }}>
              <PillCard step={ejecutar} variant="blue" />
            </motion.div>

            <motion.div ref={medirRef} className="md:col-start-1 md:row-start-3" style={{ opacity: step4.opacity, y: step4.y }}>
              <PillCard step={medir} variant="blue" />
            </motion.div>
            <motion.div ref={escalarRef} className="md:col-start-2 md:row-start-3" style={{ opacity: step5.opacity, y: step5.y }}>
              <PillCard step={escalar} variant="black" />
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
