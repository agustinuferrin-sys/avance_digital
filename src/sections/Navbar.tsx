import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../components/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="font-display font-black text-2xl tracking-tighter">
          AVANCE<span className="text-brand">®</span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex gap-6 text-sm font-medium">
            <a href="#servicios" className="hover:text-brand transition-colors">SERVICIOS</a>
            <a href="#sistema" className="hover:text-brand transition-colors">SISTEMA AVANCE®</a>
            <a href="#estrategia" className="hover:text-brand transition-colors">ESTRATEGIA</a>
            <a href="#proyectos" className="hover:text-brand transition-colors">PROYECTOS</a>
          </div>
          <Button onClick={() => window.location.href='#contacto'} className="px-6 py-2.5 text-sm">
            AVANCEMOS
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2 text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-navy h-screen p-6 flex flex-col gap-6">
          <a href="#servicios" onClick={() => setIsOpen(false)} className="text-2xl font-display font-bold">SERVICIOS</a>
          <a href="#sistema" onClick={() => setIsOpen(false)} className="text-2xl font-display font-bold">SISTEMA AVANCE®</a>
          <a href="#estrategia" onClick={() => setIsOpen(false)} className="text-2xl font-display font-bold">ESTRATEGIA</a>
          <a href="#proyectos" onClick={() => setIsOpen(false)} className="text-2xl font-display font-bold">PROYECTOS</a>
          <a href="#contacto" onClick={() => setIsOpen(false)} className="text-2xl font-display font-bold text-brand mt-4">AVANCEMOS</a>
        </div>
      )}
    </nav>
  );
};
