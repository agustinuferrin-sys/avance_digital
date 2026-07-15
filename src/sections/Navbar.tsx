import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { GradientButton } from '../components/GradientButton';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const go = (id: string) => {
    setIsOpen(false);
    const scroll = () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(scroll, 120);
    } else {
      scroll();
    }
  };

  const goHome = () => {
    setIsOpen(false);
    if (location.pathname !== '/') navigate('/');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
  };

  const links: { id: string; label: string }[] = [
    { id: 'servicios', label: 'SERVICIOS' },
    { id: 'sistema', label: 'MÉTODO AVANCE®' },
    { id: 'proyectos', label: 'PROYECTOS' },
    { id: 'es-para-vos', label: 'ABOUT' },
    { id: 'faq', label: "FAQ'S" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button onClick={goHome} className="font-display font-black text-2xl tracking-tighter">
          AVANCE<span className="text-brand">®</span>
        </button>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex gap-6 text-sm font-medium items-center">
            {links.map(l => (
              <button key={l.id} onClick={() => go(l.id)} className="px-3 py-2 rounded-pill hover:text-brand hover:bg-brand/10 transition-colors duration-200 whitespace-nowrap">
                {l.label}
              </button>
            ))}
            <Link to="/plantillas" onClick={() => window.scrollTo(0, 0)} className="text-brand font-medium hover:text-white transition-colors border border-brand/50 rounded-pill px-4 py-1.5 hover:bg-brand/20 whitespace-nowrap">
              PLANTILLAS EDITABLES
            </Link>
          </div>
          <GradientButton onClick={() => go('contacto')}>
            AVANCEMOS
          </GradientButton>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-navy min-h-screen p-6 flex flex-col gap-6 overflow-y-auto pb-32">
          {links.map(l => (
            <button key={l.id} onClick={() => go(l.id)} className="text-2xl font-display font-bold text-left">
              {l.label}
            </button>
          ))}
          <Link to="/plantillas" onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }} className="text-2xl font-display font-bold text-left text-brand">
            PLANTILLAS EDITABLES
          </Link>
          <GradientButton onClick={() => go('contacto')} className="mt-4 w-full">
            AVANCEMOS
          </GradientButton>
        </div>
      )}
    </nav>
  );
};
