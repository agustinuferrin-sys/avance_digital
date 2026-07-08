import React from 'react';
import { Reveal } from '../components/Reveal';
import { Check } from 'lucide-react';

export const EsParaVos: React.FC = () => {
  return (
    <section id="es-para-vos" className="py-24 md:py-32 bg-navy relative border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-brand/[0.05] via-transparent to-transparent pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center">
            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl leading-none tracking-tight text-white mb-10">
              ¿Es AVANCE<span className="text-brand">®</span> para vos?
            </h2>
            
            <div className="flex flex-col gap-6 items-center mb-14 text-left max-w-2xl mx-auto">
              {[
                'Buscás un socio estratégico, no un proveedor más.',
                'Querés resultados medibles y crecimiento constante.',
                'Valorás la calidad visual y la estrategia por igual.'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 w-full text-lg md:text-xl text-white font-light group">
                  <div className="w-8 h-8 rounded-full bg-brand/10 border border-brand/30 flex items-center justify-center shrink-0 group-hover:bg-brand touch:bg-brand transition-colors duration-300">
                    <Check className="w-4 h-4 text-brand group-hover:text-white touch:text-white transition-colors" />
                  </div>
                  <span className="tracking-tight">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-10">
              <p className="text-xl md:text-2xl lg:text-3xl font-light text-white/80 tracking-tight leading-relaxed max-w-3xl mx-auto">
                "Si buscás alguien que <strong className="font-bold text-white not-italic">solo sube posteos</strong>, no somos esa agencia."
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
