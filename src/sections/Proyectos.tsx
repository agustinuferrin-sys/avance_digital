import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { projects } from '../data/projects';
import { cn } from '../lib/utils';

export const Proyectos: React.FC = () => {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', ...Array.from(new Set(projects.map(p => p.categoría)))];

  const filtered = filter === 'Todos' ? projects : projects.filter(p => p.categoría === filter);

  return (
    <section id="proyectos" className="py-32 bg-navy relative">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <SectionHeading subtitle="PORTFOLIO" align="center" className="mb-12">
            Nuestros <span className="text-brand">Proyectos</span>
          </SectionHeading>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-6 py-2 rounded-pill text-sm font-medium transition-all duration-300",
                  filter === cat 
                    ? "bg-brand text-white" 
                    : "bg-white/5 text-muted hover:bg-white/10"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, idx) => (
            <Reveal key={project.id} delay={idx * 0.1}>
              <div className="group relative aspect-[4/3] rounded-card overflow-hidden bg-bg">
                <img 
                  src={project.imagen} 
                  alt={project.nombre}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-brand font-semibold text-sm mb-2">{project.categoría}</span>
                  <h4 className="text-white font-display font-bold text-2xl">{project.nombre}</h4>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
