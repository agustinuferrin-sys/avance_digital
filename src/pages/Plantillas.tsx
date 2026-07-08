import React, { useState, useEffect } from 'react';
import { useLenis } from 'lenis/react';
import { Button } from '../components/Button';
import { Reveal } from '../components/Reveal';
import { CheckCircle2 } from 'lucide-react';

const LEADS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbz97FF1FD88t6iQckGzBCb6jk1GA0VXySURGvjoytQpdtfm7qaytsOalX6K3Xfhv9Cs3A/exec';

type Status = 'idle' | 'sending' | 'ok' | 'error';

export default function Plantillas() {
  const [formData, setFormData] = useState({ nombre: '', email: '' });
  const [status, setStatus] = useState<Status>('idle');
  const lenis = useLenis();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [lenis]);

  const handleSubmit = async () => {
    if (!formData.email) return;

    setStatus('sending');
    try {
      await fetch(LEADS_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ ...formData, origen: 'plantillas' }),
      });
      setStatus('ok');
      setFormData({ nombre: '', email: '' });
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main className="flex-grow flex items-center justify-center pt-20 relative z-10 min-h-screen bg-navy overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand/[0.04] via-transparent to-transparent pointer-events-none" />
      
      <section className="py-24 md:py-32 w-full">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <div className="inline-block bg-brand/10 border border-brand/20 text-brand text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-8">
              Próximamente
            </div>
            <h1 className="font-display font-black text-5xl md:text-7xl mb-6 tracking-tight">
              Plantillas <span className="text-brand">Editables</span>
            </h1>
            <p className="text-muted text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Estamos preparando una colección de plantillas editables para que lleves la comunicación de tu marca a otro nivel. Dejanos tu mail y te avisamos cuando estén disponibles.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="relative z-10 w-full max-w-lg mx-auto">
            <div className="bg-navy/80 backdrop-blur-xl rounded-[2rem] p-6 md:p-10 border border-white/5 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-brand/[0.05] via-transparent to-transparent pointer-events-none" />
              
              {status === 'ok' ? (
                <div className="flex flex-col items-center text-center py-8 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-brand/15 border border-brand/30 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-brand" />
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-3">¡Listo!</h3>
                  <p className="text-muted font-light">
                    Te avisamos apenas estén disponibles.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-5 relative z-10 text-left">
                  <div>
                    <label htmlFor="nombre" className="block text-[10px] md:text-xs font-bold tracking-widest uppercase text-muted mb-2 md:mb-3">Nombre (opcional)</label>
                    <input
                      id="nombre" name="nombre" value={formData.nombre} onChange={handleChange}
                      className="w-full bg-bg/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand hover:border-white/20 transition-all font-light"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[10px] md:text-xs font-bold tracking-widest uppercase text-muted mb-2 md:mb-3">Email</label>
                    <input
                      type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                      className="w-full bg-bg/60 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand hover:border-white/20 transition-all font-light"
                      placeholder="tucorreo@empresa.com"
                    />
                  </div>
                  
                  {status === 'error' && (
                    <p className="text-sm text-red-400">Hubo un problema al enviar. Probá de nuevo.</p>
                  )}
                  
                  <Button onClick={handleSubmit} disabled={status === 'sending' || !formData.email} className="w-full mt-4 py-4 text-base font-bold shadow-[0_0_30px_rgba(27,77,228,0.2)] hover:shadow-[0_0_40px_rgba(27,77,228,0.4)] disabled:opacity-60">
                    {status === 'sending' ? 'Enviando...' : 'Quiero enterarme'}
                  </Button>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
