import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { projects } from '../data/projects';
import { cn } from '../lib/utils';

export const Proyectos: React.FC = () => {
  return (
    <section id="proyectos" className="py-32 bg-navy relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <Reveal>
          <SectionHeading subtitle="PORTFOLIO" align="center" className="mb-12">
            Nuestros <span className="text-brand">Proyectos</span>
          </SectionHeading>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {projects.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 0.08}>
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
