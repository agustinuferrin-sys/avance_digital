import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { Reveal } from '../components/Reveal';
import { MessageCircle } from 'lucide-react';

export const Contacto: React.FC = () => {
  const [formData, setFormData] = useState({ nombre: '', email: '', telefono: '', mensaje: '' });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola! Soy ${formData.nombre}. Mi email: ${formData.email}. Mensaje: ${formData.mensaje}`;
    const waLink = `https://wa.me/5491126448450?text=${encodeURIComponent(message)}`;
    window.open(waLink, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contacto" className="py-32 bg-navy relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <Reveal>
          <SectionHeading subtitle="CONTACTO">
            ¿Listo para que tu marca <span className="text-brand">avance</span>?
          </SectionHeading>
          <p className="text-muted mt-6 text-lg max-w-md">
            Dejanos tus datos y nos contactaremos a la brevedad para agendar una reunión y conocernos.
          </p>
          
          <div className="mt-12 space-y-6">
            <div className="flex items-center gap-4 text-white">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-brand" />
              </div>
              <div>
                <div className="text-sm text-muted">WhatsApp</div>
                <a href="https://wa.me/5491126448450" target="_blank" rel="noreferrer" className="font-semibold hover:text-brand transition-colors">
                  +54 9 11 2644-8450
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="bg-bg/50 backdrop-blur-md rounded-lg p-8 border border-white/5">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-muted mb-2">Nombre completo</label>
                <input 
                  id="nombre" name="nombre" required value={formData.nombre} onChange={handleChange}
                  className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all"
                  placeholder="Tu nombre y apellido"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted mb-2">Email</label>
                  <input 
                    type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                    className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all"
                    placeholder="tucorreo@empresa.com"
                  />
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-muted mb-2">Teléfono</label>
                  <input 
                    type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange}
                    className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all"
                    placeholder="+54 9 ..."
                  />
                </div>
              </div>
              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-muted mb-2">Mensaje</label>
                <textarea 
                  id="mensaje" name="mensaje" required value={formData.mensaje} onChange={handleChange} rows={4}
                  className="w-full bg-navy border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all resize-none"
                  placeholder="Contanos un poco sobre tu proyecto..."
                />
              </div>
              <Button type="submit" className="w-full mt-2">
                Enviar mensaje
              </Button>
            </form>
          </div>
        </Reveal>
      </div>

      <a 
        href="https://wa.me/5491126448450" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-brand text-white px-6 py-3 rounded-pill flex items-center gap-3 shadow-[0_0_20px_rgba(27,77,228,0.4)] hover:scale-105 hover:bg-brandAlt transition-all"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="font-semibold text-sm hidden md:block">Escribinos</span>
      </a>
    </section>
  );
};
