import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { projects } from '../data/projects';
import { cn } from '../lib/utils';

export const Proyectos: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isEnd, setIsEnd] = useState(false);

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setIsEnd(scrollLeft + clientWidth >= scrollWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scrollNext = () => {
    if (carouselRef.current) {
      const cardWidth = window.innerWidth < 640 ? window.innerWidth * 0.85 + 16 : 420 + 24;
      carouselRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
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
            onScroll={checkScroll}
            className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory px-4 md:px-6 xl:px-[max(1.5rem,calc((100vw-80rem)/2))] pb-8 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project) => (
              <div key={project.id} className="snap-start shrink-0 w-[85vw] sm:w-[420px]">
                <Link
                  to={`/proyectos/${project.slug}`}
                  className="group relative block aspect-[3/4] rounded-2xl md:rounded-card overflow-hidden bg-bg"
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
            className={cn(
              "absolute right-0 top-0 bottom-8 w-32 md:w-64 pointer-events-none z-10 backdrop-blur-md bg-navy/10 transition-opacity duration-500",
              isEnd ? "opacity-0" : "opacity-100"
            )}
            style={{ 
              WebkitMaskImage: 'linear-gradient(to left, black 0%, transparent 100%)',
              maskImage: 'linear-gradient(to left, black 0%, transparent 100%)'
            }}
          />

          {/* Botón de navegación (flotante derecha, desktop y mobile) */}
          <div 
            className={cn(
              "absolute right-4 md:right-8 xl:right-[calc((100vw-80rem)/2+2rem)] top-[calc(50%-1rem)] -translate-y-1/2 z-20 pointer-events-none transition-opacity duration-300",
              isEnd ? "opacity-0" : "opacity-100 md:opacity-0 md:group-hover/carousel:opacity-100"
            )}
          >
             <button 
                onClick={scrollNext}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center text-navy shadow-[0_4px_30px_rgba(0,0,0,0.5)] pointer-events-auto hover:scale-105 active:scale-95 transition-transform hover:bg-brand hover:text-white"
                aria-label="Siguiente proyecto"
                disabled={isEnd}
              >
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
