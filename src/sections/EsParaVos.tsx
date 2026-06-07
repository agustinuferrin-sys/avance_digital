import React from 'react';
import { Reveal } from '../components/Reveal';
import { Card } from '../components/Card';
import { Check } from 'lucide-react';

export const EsParaVos: React.FC = () => {
  return (
    <section className="py-40 bg-navy relative border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-brand/[0.05] via-transparent to-transparent pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <Reveal>
          <Card className="p-12 md:p-20 text-center border-brand/20 bg-bg/40 backdrop-blur-sm shadow-[0_0_60px_rgba(27,77,228,0.1)]">
            <h2 className="font-display font-black text-[clamp(2.5rem,5vw,5rem)] leading-none tracking-tight text-white mb-16">
              ¿Es AVANCE<span className="text-brand">®</span> para vos?
            </h2>
            
            <div className="flex flex-col gap-8 items-center mb-20 text-left max-w-2xl mx-auto">
              {[
                'Buscás un socio estratégico, no un proveedor más.',
                'Querés resultados medibles y crecimiento constante.',
                'Valorás la calidad visual y la estrategia por igual.'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 w-full text-xl md:text-2xl text-white font-light group">
                  <div className="w-10 h-10 rounded-full bg-brand/10 border border-brand/30 flex items-center justify-center shrink-0 group-hover:bg-brand transition-colors duration-300">
                    <Check className="w-5 h-5 text-brand group-hover:text-white transition-colors" />
                  </div>
                  <span className="tracking-tight">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-16 border-t border-white/10 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-navy px-4 text-white/20">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13h-13L12 6.5z"/></svg>
              </div>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-muted tracking-tight leading-relaxed max-w-3xl mx-auto">
                "Si buscás alguien que <em className="italic text-white">solo sube posteos</em>,<br /> no somos esa agencia."
              </p>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
};
