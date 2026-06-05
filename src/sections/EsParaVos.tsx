import React from 'react';
import { Reveal } from '../components/Reveal';
import { Card } from '../components/Card';
import { Check } from 'lucide-react';

export const EsParaVos: React.FC = () => {
  return (
    <section className="py-32 bg-navy relative">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <Card className="p-12 md:p-16 text-center border-brand/30">
            <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-12">
              ¿Es AVANCE<span className="text-brand">®</span> para vos?
            </h2>
            
            <div className="flex flex-col gap-6 items-center mb-16 text-left max-w-2xl mx-auto">
              {[
                'Buscás un socio estratégico, no un proveedor más.',
                'Querés resultados medibles y crecimiento constante.',
                'Valorás la calidad visual y la estrategia por igual.'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 w-full text-lg md:text-xl text-white/90">
                  <div className="w-8 h-8 rounded-full bg-brand/20 flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-brand" />
                  </div>
                  {item}
                </div>
              ))}
            </div>

            <div className="pt-12 border-t border-white/10">
              <p className="text-xl md:text-2xl font-light text-muted">
                "Si buscás alguien que solo sube posteos, <span className="font-semibold text-white">no somos esa agencia.</span>"
              </p>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
};
