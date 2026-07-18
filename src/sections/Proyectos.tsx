import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, ArrowLeft } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { projects } from '../data/projects';

export const Proyectos: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  // índice hacia el que apunta el último scroll pedido (0..projects.length, donde
  // projects.length es el clon del primer proyecto al final de la lista). Se usa en vez
  // de recalcular la posición actual en pleno vuelo, que es lo que causaba que clicks
  // rápidos se salteen proyectos.
  const pendingIndexRef = useRef(0);

  // índice de la card actualmente "encajada" contra el borde izquierdo del carrusel
  const getClosestIndex = (): number => {
    const container = carouselRef.current;
    if (!container) return 0;
    const containerRect = container.getBoundingClientRect();
    const paddingLeft = parseFloat(getComputedStyle(container).paddingLeft) || 0;
    const targetX = containerRect.left + paddingLeft;

    let closest = 0;
    let minDist = Infinity;
    itemRefs.current.forEach((item, i) => {
      if (!item) return;
      const dist = Math.abs(item.getBoundingClientRect().left - targetX);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });
    return closest;
  };

  // posición absoluta de scroll necesaria para encajar item[index] contra el borde izquierdo
  const computeTargetScrollLeft = (index: number): number | null => {
    const container = carouselRef.current;
    const item = itemRefs.current[index];
    if (!container || !item) return null;
    const containerRect = container.getBoundingClientRect();
    const paddingLeft = parseFloat(getComputedStyle(container).paddingLeft) || 0;
    const itemRect = item.getBoundingClientRect();
    return container.scrollLeft + (itemRect.left - containerRect.left) - paddingLeft;
  };

  // Mantiene pendingIndexRef sincronizado si el usuario arrastra el carrusel a mano
  // (en vez de usar la flecha) — solo actualiza el índice, nunca mueve el scroll, así no
  // pelea con el gesto del usuario ni con el reset del loop (ver scrollNext).
  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;
    let settleTimeout: number;

    const handleScroll = () => {
      window.clearTimeout(settleTimeout);
      settleTimeout = window.setTimeout(() => {
        pendingIndexRef.current = getClosestIndex();
      }, 120);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.clearTimeout(settleTimeout);
    };
  }, []);

  // loop infinito: el render agrega un único clon del primer proyecto al final de la
  // lista (ver JSX más abajo), así avanzar más allá de la última card real continúa
  // visualmente hacia adelante en vez de "rebotar" para atrás. El reset (volver del clon
  // al proyecto real 0) se hace acá, de forma determinística en el momento del click —no
  // atado a un timer de "scroll asentado"— para que clicks rápidos y consecutivos nunca
  // se traben ni se salteen proyectos.
  const scrollNext = () => {
    const container = carouselRef.current;
    if (!container || !projects.length) return;

    if (pendingIndexRef.current === projects.length) {
      const resetTarget = computeTargetScrollLeft(0);
      if (resetTarget !== null) container.scrollLeft = resetTarget;
      pendingIndexRef.current = 0;
    }

    const next = pendingIndexRef.current + 1;
    pendingIndexRef.current = next;
    const target = computeTargetScrollLeft(next);
    if (target !== null) {
      container.scrollTo({ left: target, behavior: 'smooth' });
    }
  };

  // loop infinito hacia atrás, simétrico a scrollNext: al retroceder desde el primer
  // proyecto real (índice 0), saltamos sin animación al mismo proyecto pero en la
  // segunda copia de la lista (índice projects.length, adyacente al final de la
  // primera copia) y desde ahí animamos un paso más atrás, al último proyecto real.
  const scrollPrev = () => {
    const container = carouselRef.current;
    if (!container || !projects.length) return;

    if (pendingIndexRef.current === 0) {
      const resetTarget = computeTargetScrollLeft(projects.length);
      if (resetTarget !== null) container.scrollLeft = resetTarget;
      pendingIndexRef.current = projects.length;
    }

    const prev = pendingIndexRef.current - 1;
    pendingIndexRef.current = prev;
    const target = computeTargetScrollLeft(prev);
    if (target !== null) {
      container.scrollTo({ left: target, behavior: 'smooth' });
    }
  };

  return (
    <section id="proyectos" className="py-32 bg-navy relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-12">
        <Reveal>
          <SectionHeading subtitle="PORTFOLIO" align="left" className="!mb-0">
            Principales <span className="text-brand">proyectos</span>
          </SectionHeading>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="relative group/carousel">
          <div
            ref={carouselRef}
            className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory px-4 md:px-6 xl:px-[max(1.5rem,calc((100vw-80rem)/2))] pb-8 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[...projects, ...projects].map((project, idx) => (
              <div
                key={`${project.id}-${idx}`}
                ref={(el) => { itemRefs.current[idx] = el; }}
                className="snap-start shrink-0 w-[85vw] sm:w-[420px]"
              >
                <Link
                  to={`/proyectos/${project.slug}`}
                  className="group relative block aspect-[3/4] rounded-2xl md:rounded-card overflow-hidden bg-bg"
                  aria-hidden={idx >= projects.length}
                  tabIndex={idx >= projects.length ? -1 : undefined}
                >
                  <img
                    src={project.imagen}
                    alt={project.nombre}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 touch:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  {/* Gradiente base para legibilidad */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/20 to-transparent" />
                  {/* Info */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-7">
                    <span className="text-brand font-semibold text-xs md:text-sm tracking-wider uppercase mb-1">
                      {project.categoría}
                    </span>
                    <h4 className="text-white font-display font-bold text-lg md:text-2xl leading-tight">
                      {project.nombre}
                    </h4>
                    {/* Ver proyecto (aparece en hover / visible en touch) */}
                    <div className="flex items-center gap-2 text-white/90 mt-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 touch:opacity-100 touch:translate-y-0 transition-all duration-300">
                      <span className="text-sm font-medium">Ver proyecto</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  {/* Borde glow en hover */}
                  <div className="absolute inset-0 rounded-2xl md:rounded-card ring-1 ring-inset ring-transparent group-hover:ring-brand/40 touch:ring-brand/30 transition-all duration-500 pointer-events-none" />
                </Link>
              </div>
            ))}
          </div>
          
          {/* Blur & Gradient Overlay for right edge */}
          <div
            className="absolute right-0 top-0 bottom-8 w-32 md:w-64 pointer-events-none z-10 backdrop-blur-md bg-navy/10"
            style={{
              WebkitMaskImage: 'linear-gradient(to left, black 0%, transparent 100%)',
              maskImage: 'linear-gradient(to left, black 0%, transparent 100%)'
            }}
          />

          {/* Botón de navegación IZQUIERDA (flotante, desktop y mobile) — espejo del de la
              derecha: mismo loop infinito (ver scrollPrev), mismos estilos y visibilidad. */}
          <div className="absolute left-2 md:left-4 top-[calc(50%-1rem)] -translate-y-1/2 z-20 pointer-events-none opacity-100 md:opacity-0 md:group-hover/carousel:opacity-100 transition-opacity duration-300">
             <button
                onClick={scrollPrev}
                className="relative w-12 h-12 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center text-navy shadow-[0_4px_30px_rgba(0,0,0,0.5)] pointer-events-auto hover:scale-105 active:scale-95 transition-transform hover:bg-brand hover:text-white before:content-[''] before:absolute before:inset-[-24px] md:before:inset-[-32px]"
                aria-label="Proyecto anterior"
              >
                <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>
          </div>

          {/* Botón de navegación DERECHA (flotante, desktop y mobile) — loop infinito, nunca se desactiva */}
          <div className="absolute right-2 md:right-4 top-[calc(50%-1rem)] -translate-y-1/2 z-20 pointer-events-none opacity-100 md:opacity-0 md:group-hover/carousel:opacity-100 transition-opacity duration-300">
             <button
                onClick={scrollNext}
                className="relative w-12 h-12 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center text-navy shadow-[0_4px_30px_rgba(0,0,0,0.5)] pointer-events-auto hover:scale-105 active:scale-95 transition-transform hover:bg-brand hover:text-white before:content-[''] before:absolute before:inset-[-24px] md:before:inset-[-32px]"
                aria-label="Siguiente proyecto"
              >
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
