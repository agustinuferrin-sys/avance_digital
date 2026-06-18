import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-bg border-t border-white/10 pt-16 pb-32 lg:pb-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <a href="#" className="font-display font-black text-3xl tracking-tighter inline-block mb-6">
            AVANCE<span className="text-brand">®</span>
          </a>
          <p className="text-muted max-w-sm">
            Agencia de marketing digital y socio estratégico. Pensamos con vos, ejecutamos con método.
          </p>
        </div>
        
        <div>
          <h4 className="font-display font-bold text-white mb-6">Navegación</h4>
          <div className="flex flex-col gap-3">
            <a href="#servicios" className="text-muted hover:text-brand transition-colors">Servicios</a>
            <a href="#sistema" className="text-muted hover:text-brand transition-colors">Sistema Avance®</a>
            <a href="#proyectos" className="text-muted hover:text-brand transition-colors">Proyectos</a>
            <a href="#contacto" className="text-muted hover:text-brand transition-colors">Contacto</a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-white mb-6">Contacto</h4>
          <div className="flex flex-col gap-3 text-muted">
            <p>Alberti 1558, Mar del Plata</p>
            <a href="mailto:info@avancedigital.com.ar" className="hover:text-brand transition-colors">info@avancedigital.com.ar</a>
            <div className="flex gap-4 mt-2">
              <a href="https://www.instagram.com/avance_world/" target="_blank" rel="noreferrer" className="hover:text-brand transition-colors">Instagram</a>
              <a href="https://www.linkedin.com/company/agencia-de-marketing-avance/?viewAsMember=true" target="_blank" rel="noreferrer" className="hover:text-brand transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center text-sm text-muted/60">
        © {new Date().getFullYear()} AVANCE® Digital. Todos los derechos reservados.
      </div>
    </footer>
  );
};
