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
    <section id="contacto" className="py-24 md:py-32 bg-navy relative border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand/[0.05] via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="order-1">
          <Reveal>
            <SectionHeading subtitle="CONTACTO">
              ¿Listo para que tu marca <span className="text-brand">avance</span>?
            </SectionHeading>
            <p className="text-muted mt-6 md:mt-8 text-lg md:text-xl font-light max-w-md leading-relaxed">
              Dejanos tus datos y nos contactaremos a la brevedad para agendar una reunión y conocernos.
            </p>
            
            <div className="hidden lg:block mt-16 space-y-6">
              <div className="flex items-center gap-6 text-white group cursor-pointer w-fit" onClick={() => window.open('https://wa.me/5491126448450', '_blank')}>
                <div className="w-16 h-16 bg-brand/10 border border-brand/20 rounded-full flex items-center justify-center group-hover:bg-brand group-hover:shadow-[0_0_20px_rgba(27,77,228,0.3)] transition-all duration-300">
                  <MessageCircle className="w-6 h-6 text-brand group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-sm text-brand tracking-widest uppercase font-bold mb-1">WhatsApp</div>
                  <div className="font-display font-medium text-2xl group-hover:text-brand transition-colors">
                    +54 9 11 2644-8450
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative z-10 order-2 w-full">
          <div className="bg-bg/40 backdrop-blur-xl rounded-[2rem] p-6 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden w-full">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-brand/[0.05] via-transparent to-transparent pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 md:gap-6 relative z-10">
              <div>
                <label htmlFor="nombre" className="block text-[10px] md:text-xs font-bold tracking-widest uppercase text-muted mb-2 md:mb-3">Nombre completo</label>
                <input 
                  id="nombre" name="nombre" required value={formData.nombre} onChange={handleChange}
                  className="w-full bg-navy/60 border border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand hover:border-white/20 transition-all font-light text-base md:text-lg"
                  placeholder="Tu nombre y apellido"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <div>
                  <label htmlFor="email" className="block text-[10px] md:text-xs font-bold tracking-widest uppercase text-muted mb-2 md:mb-3">Email</label>
                  <input 
                    type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                    className="w-full bg-navy/60 border border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand hover:border-white/20 transition-all font-light text-base md:text-lg"
                    placeholder="tucorreo@empresa.com"
                  />
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-[10px] md:text-xs font-bold tracking-widest uppercase text-muted mb-2 md:mb-3">Teléfono</label>
                  <input 
                    type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange}
                    className="w-full bg-navy/60 border border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand hover:border-white/20 transition-all font-light text-base md:text-lg"
                    placeholder="+54 9 ..."
                  />
                </div>
              </div>
              <div>
                <label htmlFor="mensaje" className="block text-[10px] md:text-xs font-bold tracking-widest uppercase text-muted mb-2 md:mb-3">Mensaje</label>
                <textarea 
                  id="mensaje" name="mensaje" required value={formData.mensaje} onChange={handleChange} rows={4}
                  className="w-full bg-navy/60 border border-white/10 rounded-xl px-4 py-3 md:px-5 md:py-4 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand hover:border-white/20 transition-all font-light text-base md:text-lg resize-none"
                  placeholder="Contanos un poco sobre tu proyecto..."
                />
              </div>
              <Button type="submit" className="w-full mt-2 md:mt-4 py-4 md:py-5 text-base md:text-lg font-bold shadow-[0_0_30px_rgba(27,77,228,0.2)] hover:shadow-[0_0_40px_rgba(27,77,228,0.4)]">
                Enviar mensaje
              </Button>
            </form>
          </div>
        </Reveal>

        <div className="lg:hidden order-3 flex flex-col items-center text-center mt-6 border-t border-white/10 pt-10">
          <p className="text-muted font-light mb-6">¿Preferís escribirnos directo?</p>
          <div className="flex items-center gap-4 text-white group cursor-pointer w-fit bg-white/5 border border-white/10 pr-6 pl-2 py-2 rounded-full" onClick={() => window.open('https://wa.me/5491126448450', '_blank')}>
            <div className="w-12 h-12 bg-brand/20 rounded-full flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-brand" />
            </div>
            <div className="text-left">
              <div className="font-display font-medium text-lg">+54 9 11 2644-8450</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
