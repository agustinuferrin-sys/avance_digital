import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '../components/Reveal';
import { Button } from '../components/Button';
import { useLenis } from 'lenis/react';

const itemsArriba = ['Redes', 'Contenido', 'Diseño', 'Publicidad', 'Producciones', 'Web', 'Resultados'];
const itemsAbajo = ['Diagnóstico', 'Estrategia', 'Identidad', 'Posicionamiento', 'Mensaje', 'Oferta', 'Procesos', 'Análisis', 'Constancia'];

// --- SISTEMA GEOMÉTRICO ÚNICO (en rem), compartido por las dos zonas y los
// dos lados. Un solo número por regla — nunca un ajuste particular por item. ---

// % de la SECCIÓN (no de la imagen) donde parten las dos zonas de texto —
// arriba = emergido, abajo = sumergido. Misma referencia que el object-position
// de la imagen de fondo, para que la línea de agua caiga entre ambas zonas.
const WATERLINE_PERCENT = 43;

// Aire (en %) entre la zona "LO QUE SE VE" y la zona "LO QUE HACEMOS".
const BAND_GAP_PERCENT = 6;

// Ancho (en rem) de la columna CENTRAL del grid de 3 columnas — el gutter
// donde cae el iceberg. Fijo y compartido por las dos zonas (mismo valor en
// "LO QUE SE VE" y "LO QUE HACEMOS"), para que el iceberg no salte de
// posición entre zonas. Las columnas laterales son 1fr (mismo fr los dos
// lados) — la simetría sale de la estructura del grid, no de un cálculo.
const GUTTER_REM = 5;

// Cuánto (en rem) bajan las columnas de items respecto al techo de su zona,
// reservando ese espacio fijo para el título — mismo valor en las dos zonas,
// así el título nunca se superpone ni se corta.
const COLUMNS_TOP_REM = 7;

// Espaciado vertical (en rem) entre items dentro de una misma columna.
const ITEM_GAP_REM = 0.9;

// Desfase (en px) para que la columna DERECHA arranque más abajo que la
// izquierda — mismo valor en las dos zonas. A propósito para que ambas
// columnas no queden a la misma altura exacta (efecto demasiado simétrico).
const RIGHT_COLUMN_OFFSET_PX = 22;

// Cuánto entra hacia el centro (en rem) el tramo línea+punto de CADA item,
// mismo valor para toda fila de las dos zonas: todos los puntos caen sobre
// el mismo eje vertical, justo en el centro del gutter, desde la punta de
// arriba hasta el fondo de la masa sumergida — no sobre el borde de su
// columna (que es donde caían con reach 0).
const DOT_REACH_REM = GUTTER_REM / 2;

// Separación (en px) entre el cierre de Filosofia (la marquee celeste
// "ESTRATÉGIA › RESULTADOS › AVANZÁ › MÉTODO") y el arranque visual del
// iceberg. Vive DENTRO del stage —como una franja extra arriba, con imagen y
// contenido pegados abajo— y NO como padding/margin/border de la <section>:
// así el resplandor radial (que es hijo del stage) cubre también esta franja
// y el fade es continuo, sin una banda negra lisa cortando en seco contra la
// marquee.
const STAGE_TOP_GAP_PX = 80;

// Alto "de siempre" del stage (imagen + columnas de texto), sin contar la
// franja de separación de arriba. Toda la matemática en % de WATERLINE_PERCENT
// y BAND_GAP_PERCENT sigue siendo relativa a ESTA altura, no a la del stage
// completo (que ahora incluye STAGE_TOP_GAP_PX).
const STAGE_HEIGHT_VH = 150;

// Separación (en px) entre el título y el subtítulo de cada zona — base de
// las dos zonas (equivale al mt-1 de siempre). TextZone puede sumarle un
// extra puntual por zona vía la prop subtitleGapExtraPx (hoy solo lo usa
// "LO QUE HACEMOS", para que respire más contra "LO QUE SE VE" sin tocarla).
const SUBTITLE_GAP_PX = 4;

// Los items alternan de columna en el orden en que están escritos en la
// lista — el 1° a la IZQUIERDA, el 2° a la DERECHA, el 3° de nuevo a la
// IZQUIERDA, etc. — misma regla para las dos zonas:
//   LO QUE SE VE   (7 items) → 4 izquierda / 3 derecha
//   LO QUE HACEMOS (9 items) → 5 izquierda / 4 derecha
// Verificado: left.length + right.length === items.length siempre (cada
// índice cae en un solo lado, no se descarta ninguno).
const splitItems = (items: string[]): { left: string[]; right: string[] } => {
  const left = items.filter((_, i) => i % 2 === 0);
  const right = items.filter((_, i) => i % 2 !== 0);
  if (left.length + right.length !== items.length) {
    // No debería poder pasar (cada índice va a un lado u otro), pero si algún
    // día cambia la regla de split, esto avisa en desarrollo en vez de perder
    // items en silencio.
    console.error('[Iceberg] splitItems perdió items:', { items, left, right });
  }
  return { left, right };
};

// La lista entera "swipea" de una sola vez al entrar en pantalla (whileInView,
// una vez), con un stagger interno entre items — NO depende de cuánto siga
// bajando la rueda del mouse después de disparar el swipe.
const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const itemVariants = (direction: 'left' | 'right') => ({
  hidden: { opacity: 0, x: direction === 'left' ? -24 : 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
});

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

// Fila de un item. Línea (grosor/punteado/opacidad) y punto IDÉNTICOS para
// las dos columnas — lo único que cambia es el ORDEN visual: el punto
// siempre queda del lado que apunta al iceberg. El tramo punto+línea vive en
// su propio wrapper (flex-1, mismo ancho que ocupaba la línea sola antes) y
// es el único que se traslada hacia el centro vía `reachRem`, con transform
// (no width/margin) para no tocar el layout del grid — el label queda fuera
// de ese wrapper, fijo en su lugar, así nunca se desalinea de su columna.
const LeaderItem: React.FC<{ label: string; direction: 'left' | 'right'; reachRem?: number }> = ({
  label,
  direction,
  reachRem = 0,
}) => {
  const isLeft = direction === 'left';
  const translateX = isLeft ? reachRem : -reachRem;
  return (
    <motion.div
      variants={itemVariants(direction)}
      className={`flex items-center gap-3 w-full ${isLeft ? 'flex-row-reverse' : ''}`}
    >
      <div
        className={`flex items-center gap-3 flex-1 min-w-0 ${isLeft ? 'flex-row-reverse' : ''}`}
        style={{ transform: `translateX(${translateX}rem)` }}
      >
        <span className="w-2 h-2 rounded-full border border-white/60 shrink-0" />
        <motion.span
          variants={lineVariants}
          style={{
            transformOrigin: isLeft ? 'right' : 'left',
            borderTop: '1px dashed rgba(255,255,255,0.25)',
          }}
          className="h-px flex-1 min-w-0"
        />
      </div>
      <span
        className={`text-white/85 font-body font-light text-base md:text-xl lg:text-2xl whitespace-nowrap ${
          isLeft ? 'text-right' : 'text-left'
        }`}
      >
        {label}
      </span>
    </motion.div>
  );
};

// Frase manuscrita que se "escribe" letra por letra cuando entra en vista,
// en vez de aparecer toda junta o con un delay fijo.
const TypewriterPhrase: React.FC<{ text: string }> = ({ text }) => {
  const characters = Array.from(text);
  return (
    <p
      className="text-white/90 text-2xl md:text-3xl"
      style={{ fontFamily: "'Caveat', cursive", transform: 'rotate(-3deg)' }}
    >
      {characters.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.01, delay: i * 0.028 }}
        >
          {char}
        </motion.span>
      ))}
    </p>
  );
};

// Columna de items (izquierda o derecha), pensada para vivir como una celda
// del grid de 3 columnas de TextZone. Ambas comparten TODO: gap vertical,
// flex-col simple sin posicionamiento propio — el grid padre es quien decide
// dónde cae cada columna, esta solo apila sus items.
const ItemColumn: React.FC<{
  items: string[];
  direction: 'left' | 'right';
  style?: React.CSSProperties;
  reachRem?: number;
}> = ({ items, direction, style, reachRem = 0 }) => {
  return (
    <motion.div
      className="flex flex-col"
      style={{ gap: `${ITEM_GAP_REM}rem`, ...style }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={listVariants}
    >
      {items.map((label) => (
        <LeaderItem key={label} label={label} direction={direction} reachRem={reachRem} />
      ))}
    </motion.div>
  );
};

// Una zona de texto. Estructura fija, igual en las dos zonas salvo por los
// dos extras opcionales (subtitleGapExtraPx, columnsTopExtraPx), pensados
// para ajustes puntuales de una zona sin tocar la otra:
//  1) título + subtítulo ARRIBA DE TODO, alineados a la izquierda.
//  2) debajo (a partir de COLUMNS_TOP_REM + columnsTopExtraPx, nunca antes),
//     dos columnas de items en espejo a los costados del centro del iceberg.
const TextZone: React.FC<{
  top: string;
  height: string;
  title: string;
  subtitle: string;
  items: string[];
  subtitleGapExtraPx?: number;
  columnsTopExtraPx?: number;
  reachRem?: number;
}> = ({
  top,
  height,
  title,
  subtitle,
  items,
  subtitleGapExtraPx = 0,
  columnsTopExtraPx = 0,
  reachRem = 0,
}) => {
  const { left, right } = splitItems(items);

  return (
    <div className="absolute inset-x-0" style={{ top, height }}>
      <div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col gap-6 pt-4 md:block md:pt-0">
        {/* título — siempre arriba de todo, alineado a la izquierda. El
            wrapper (no Reveal, que fuerza su propio position:relative inline)
            es quien se posiciona absoluto */}
        <div className="md:absolute md:top-0 md:left-0 md:max-w-xs lg:max-w-sm">
          <Reveal>
            <h2 className="font-display font-black text-3xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 tracking-tight">
              {title}
            </h2>
            <p
              className="text-muted font-light text-sm lg:text-base"
              style={{ marginTop: `${SUBTITLE_GAP_PX + subtitleGapExtraPx}px` }}
            >
              {subtitle}
            </p>
          </Reveal>
        </div>

        {/* MOBILE — lista única en orden original, apilada debajo del título,
            sin columnas espejadas (ese recurso es de desktop, con el fondo
            grande del iceberg). Todos los items, sin split. */}
        <motion.div
          className="flex flex-col gap-2.5 md:hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={listVariants}
        >
          {items.map((label) => (
            <LeaderItem key={`m-${label}`} label={label} direction="right" />
          ))}
        </motion.div>

        {/* DESKTOP — grid explícito de 3 columnas: izquierda (1fr) | gutter
            central fijo (GUTTER_REM, vacío/transparente — ahí cae el iceberg
            de fondo) | derecha (1fr, mismo fr que la izquierda). La simetría
            es estructural: las dos columnas laterales miden lo mismo por
            definición del grid, así que el punto de cada leader-line (que
            ocupa el 100% de su columna) llega al mismo x de los dos lados
            sin ningún cálculo manual de distancias. */}
        <div
          className="hidden md:grid absolute inset-x-0"
          style={{
            top: `calc(${COLUMNS_TOP_REM}rem + ${columnsTopExtraPx}px)`,
            gridTemplateColumns: `1fr ${GUTTER_REM}rem 1fr`,
          }}
        >
          <ItemColumn items={left} direction="left" reachRem={reachRem} />
          <div aria-hidden="true" />
          <ItemColumn
            items={right}
            direction="right"
            style={{ marginTop: `${RIGHT_COLUMN_OFFSET_PX}px` }}
            reachRem={reachRem}
          />
        </div>
      </div>
    </div>
  );
};

export const Iceberg: React.FC = () => {
  const lenis = useLenis();
  const scrollToContacto = () => lenis?.scrollTo('#contacto', { offset: -80 });

  return (
    <section id="iceberg" className="relative bg-bg">
      {/* STAGE — imagen y texto totalmente DESACOPLADOS. El stage mide
          STAGE_TOP_GAP_PX + STAGE_HEIGHT_VH: una franja de separación arriba
          (cubierta por el resplandor, para que no corte contra la marquee de
          Filosofia) y, pegados abajo, la imagen y el texto de siempre, en su
          altura de siempre. */}
      <div
        className="relative overflow-hidden"
        style={{ minHeight: `calc(${STAGE_TOP_GAP_PX}px + ${STAGE_HEIGHT_VH}vh)` }}
      >
        {/* RESPLANDOR — cubre TODO el stage, incluida la franja de separación
            de arriba (el .webp tiene canal alfa: el recorte del hielo tiene
            transparencia alrededor). Nace en un celeste/cian tenue (tokens
            skyLight/blue) centrado en la posición de siempre del iceberg —
            recalculada acá para que caiga en el mismo punto absoluto aunque
            el stage ahora sea más alto— y se apaga hacia transparente,
            fundiéndose con el bg de forma continua desde la marquee hasta el
            iceberg. */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 50% calc(${STAGE_TOP_GAP_PX}px + (100% - ${STAGE_TOP_GAP_PX}px) * ${WATERLINE_PERCENT / 100}), color-mix(in srgb, var(--color-skyLight) 35%, transparent) 0%, color-mix(in srgb, var(--color-blue) 18%, transparent) 30%, transparent 62%)`,
          }}
        />
        {/* CAPA DE FONDO — pegada abajo del stage, misma altura de siempre
            (STAGE_HEIGHT_VH); la franja de separación queda arriba, afuera de
            esta imagen, cubierta solo por el resplandor. */}
        <img
          src="/images/iceberg/iceberg.webp"
          alt="Iceberg completo: la parte visible arriba y la masa sumergida abajo"
          className="absolute inset-x-0 bottom-0 z-0 w-full object-cover pointer-events-none select-none"
          style={{ height: `${STAGE_HEIGHT_VH}vh`, objectPosition: `50% ${WATERLINE_PERCENT}%` }}
        />

        {/* CAPA DE CONTENIDO — mismo criterio: pegada abajo, altura de
            siempre, en % de ESA altura (no de la del stage completo). */}
        <div className="absolute inset-x-0 bottom-0 z-10" style={{ height: `${STAGE_HEIGHT_VH}vh` }}>
          <TextZone
            top="0%"
            height={`${WATERLINE_PERCENT - BAND_GAP_PERCENT / 2}%`}
            title="LO QUE SE VE"
            subtitle="Es solo una parte"
            items={itemsArriba}
            reachRem={DOT_REACH_REM}
          />
          <TextZone
            top={`${WATERLINE_PERCENT + BAND_GAP_PERCENT / 2}%`}
            height={`${100 - WATERLINE_PERCENT - BAND_GAP_PERCENT / 2}%`}
            title="LO QUE HACEMOS"
            subtitle="Es lo que sostiene el crecimiento"
            items={itemsAbajo}
            subtitleGapExtraPx={20}
            columnsTopExtraPx={132}
            reachRem={DOT_REACH_REM}
          />
        </div>
      </div>

      {/* CIERRE — frase manuscrita + CTA, en flujo normal debajo del stage */}
      <div className="relative pt-10 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-10">
          <div className="w-full flex justify-start md:pl-2 lg:pl-6">
            <TypewriterPhrase text="Cada acción necesita una razón, una dirección y un objetivo" />
          </div>
          <Button onClick={scrollToContacto}>
            Quiero trabajar con <span className="font-black">método</span>
          </Button>
        </div>
      </div>
    </section>
  );
};
