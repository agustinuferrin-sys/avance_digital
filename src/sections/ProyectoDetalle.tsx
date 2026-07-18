import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useLenis } from 'lenis/react';
import { ArrowLeft } from 'lucide-react';
import { getProjectBySlug } from '../data/projects';
import { Button } from '../components/Button';
import { Reveal } from '../components/Reveal';
import { Blob } from '../components/Blob';

const ProyectoDetalle: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const lenis = useLenis();
  const project = slug ? getProjectBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [slug, lenis]);

  const goToProyectos = () => {
    navigate('/');
    setTimeout(() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  const goToContacto = () => {
    navigate('/');
    setTimeout(() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  if (!project) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-bg">
        <h1 className="font-display font-black text-4xl md:text-6xl mb-6">Proyecto no encontrado</h1>
        <p className="text-muted mb-10 max-w-md">El proyecto que buscás no existe o fue movido.</p>
        <Link to="/" className="text-brand font-semibold hover:underline">Volver al inicio</Link>
      </section>
    );
  }

  return (
    <article className="relative bg-bg overflow-clip">
      <Blob className="top-0 -right-40 w-[600px] h-[600px] opacity-40" delay={0} />

      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-32 md:pt-40 pb-24 relative z-10">
        {/* Volver */}
        <button
          onClick={goToProyectos}
          className="inline-flex items-center gap-2 text-muted hover:text-brand transition-colors mb-10 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span className="text-sm font-medium tracking-wide uppercase">Volver a proyectos</span>
        </button>

        {/* Encabezado */}
        <Reveal>
          <span className="text-brand font-semibold text-sm md:text-base tracking-wider uppercase">{project.categoría}</span>
          <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mt-4 mb-6">
            {project.nombre}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-light max-w-3xl leading-relaxed">
            {project.resumen}
          </p>
        </Reveal>

        {/* Meta */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-x-12 gap-y-6 mt-12 pb-12 border-b border-white/10">
            <div>
              <div className="text-muted text-xs uppercase tracking-wider mb-1">Cliente</div>
              <div className="text-white font-medium">{project.cliente}</div>
            </div>
            <div>
              <div className="text-muted text-xs uppercase tracking-wider mb-1">Año</div>
              <div className="text-white font-medium">{project.año}</div>
            </div>
            <div className="min-w-[200px]">
              <div className="text-muted text-xs uppercase tracking-wider mb-1">Servicios</div>
              <div className="text-white font-medium">{project.servicios.join(' · ')}</div>
            </div>
          </div>
        </Reveal>

        {/* Portada */}
        <Reveal delay={0.15}>
          <div className="mt-12 rounded-card overflow-hidden aspect-[16/10] bg-navy">
            <img src={project.imagen} loading="lazy" alt={project.nombre} className="w-full h-full object-cover" />
          </div>
        </Reveal>

        {/* Desafío / Solución */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 mt-20">
          <Reveal>
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-5 text-white">El desafío</h2>
            <p className="text-muted leading-relaxed text-justify">{project.desafio}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display font-bold text-2xl md:text-3xl mb-5 text-white">La solución</h2>
            <p className="text-muted leading-relaxed text-justify">{project.solucion}</p>
          </Reveal>
        </div>

        {/* Resultados */}
        <Reveal delay={0.1}>
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {project.resultados.map((r) => (
              <div
                key={r.label}
                className="rounded-card bg-navy/40 border border-white/5 p-8 text-center"
              >
                <div className="font-display font-black text-4xl md:text-5xl text-brand mb-2">{r.value}</div>
                <div className="text-muted text-sm uppercase tracking-wider">{r.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Galería */}
        <div className="mt-20 grid sm:grid-cols-2 gap-4 md:gap-6">
          {project.galeria.map((src, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="rounded-card overflow-hidden aspect-[3/2] bg-navy">
                <img src={src} alt={`${project.nombre} ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.1}>
          <div className="mt-24 rounded-card bg-gradient-to-br from-navy to-bg border border-brand/20 p-10 md:p-16 text-center shadow-[0_0_60px_rgba(24,113,255,0.1)]">
            <h2 className="font-display font-black text-3xl md:text-4xl mb-4">¿Querés un proyecto así?</h2>
            <p className="text-muted mb-10 max-w-xl mx-auto">Contanos qué tenés en mente y armamos el plan para que tu marca avance.</p>
            <Button onClick={goToContacto} className="px-8 py-3">
              AVANCEMOS
            </Button>
          </div>
        </Reveal>
      </div>
    </article>
  );
};

export default ProyectoDetalle;
