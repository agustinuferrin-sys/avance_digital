import React from 'react';
import { Instagram, Linkedin, MessageCircle, ArrowRight } from 'lucide-react';
import { useLenis } from 'lenis/react';

export const Footer: React.FC = () => {
  const lenis = useLenis();

  const scrollToContacto = (e?: React.MouseEvent) => {
    e?.preventDefault();
    lenis?.scrollTo('#contacto', { offset: -80 });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    lenis?.scrollTo(id, { offset: -80 });
  };

  return (
    <footer className="bg-bg border-t border-white/5 pt-16 md:pt-24 pb-8 relative z-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
        
        {/* Col 1 */}
        <div className="lg:pr-8 flex flex-col items-start lg:col-span-1">
          <a href="#" className="font-display font-black text-3xl tracking-tighter inline-block mb-6">
            AVANCE<span className="text-brand">®</span>
          </a>
          <p className="text-muted font-light leading-relaxed mb-8">
            Agencia de crecimiento y comunicación estratégica para marcas que quieren crecer con dirección.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/avance_world/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted hover:text-white hover:bg-brand hover:border-brand transition-all duration-300">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/company/agencia-de-marketing-avance/?viewAsMember=true" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted hover:text-white hover:bg-brand hover:border-brand transition-all duration-300">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://wa.me/5491126448450" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted hover:text-white hover:bg-brand hover:border-brand transition-all duration-300">
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="font-display font-bold text-white mb-6 uppercase tracking-widest text-xs">Navegación</h4>
          <div className="flex flex-col gap-4">
            <a href="#servicios" onClick={(e) => scrollToSection(e, '#servicios')} className="text-muted font-light hover:text-brand transition-colors w-fit">Servicios</a>
            <a href="#sistema" onClick={(e) => scrollToSection(e, '#sistema')} className="text-muted font-light hover:text-brand transition-colors w-fit">Sistema AVANCE®</a>
            <a href="#proyectos" onClick={(e) => scrollToSection(e, '#proyectos')} className="text-muted font-light hover:text-brand transition-colors w-fit">Proyectos</a>
            <a href="#planes" onClick={(e) => scrollToSection(e, '#planes')} className="text-muted font-light hover:text-brand transition-colors w-fit">Es para vos</a>
            <a href="#faq" onClick={(e) => scrollToSection(e, '#faq')} className="text-muted font-light hover:text-brand transition-colors w-fit">FAQ</a>
            <a href="#contacto" onClick={scrollToContacto} className="text-muted font-light hover:text-brand transition-colors w-fit">Contacto</a>
          </div>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="font-display font-bold text-white mb-6 uppercase tracking-widest text-xs">Contacto</h4>
          <div className="flex flex-col gap-4 font-light text-muted">
            <a href="mailto:info@avancedigital.com.ar" className="hover:text-brand transition-colors w-fit">info@avancedigital.com.ar</a>
            <a href="https://wa.me/5491126448450" target="_blank" rel="noreferrer" className="hover:text-brand transition-colors w-fit">+54 9 11 2644-8450</a>
            <p>Mar del Plata, Argentina</p>
          </div>
        </div>

        {/* Col 4 */}
        <div>
          <h4 className="font-display font-bold text-white mb-6 uppercase tracking-widest text-xs">Empezá hoy</h4>
          <p className="text-muted font-light mb-6">¿Listo para que tu marca avance?</p>
          <button
            onClick={scrollToContacto}
            className="shine-btn group flex items-center gap-2 bg-brand text-white px-6 py-3 rounded-full font-bold text-sm tracking-wide border border-white/30 hover:bg-brandAlt hover:border-white/60 transition-colors shadow-[0_0_20px_rgba(27,77,228,0.3)] hover:shadow-[0_0_30px_rgba(27,77,228,0.5)]"
          >
            AVANCEMOS
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-muted">
        <p>© 2026 AVANCE®. Todos los derechos reservados.</p>
        <p>Desarrollado por Grupo Macchiato</p>
      </div>
    </footer>
  );
};
