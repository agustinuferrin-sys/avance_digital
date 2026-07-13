import React from 'react';
import {
  Target,
  Fingerprint,
  MessageCircle,
  Clapperboard,
  PenTool,
  TrendingUp,
  Globe,
  PartyPopper,
  LucideIcon,
} from 'lucide-react';
import { Card } from '../components/Card';
import { Reveal } from '../components/Reveal';
import { servicesHeader, services, servicesCierre } from '../data/services';
import { cn } from '../lib/utils';

// un ícono por servicio, en el mismo orden que services.ts (01→08)
const serviceIcons: Record<string, LucideIcon> = {
  '01': Target,
  '02': Fingerprint,
  '03': MessageCircle,
  '04': Clapperboard,
  '05': PenTool,
  '06': TrendingUp,
  '07': Globe,
  '08': PartyPopper,
};

// checkerboard sobre la grilla 4x2: es la única distribución de 2 variantes donde
// ninguna card queda pegada a otra igual (arriba/abajo/izq/der); la variación visual
// entre cards de la misma variante viene de alternar la esquina del degradé.
function cardBg(idx: number): string {
  const row = Math.floor(idx / 4);
  const col = idx % 4;
  const isVariantA = (row + col) % 2 === 0;
  if (isVariantA) {
    return col % 2 === 0 ? 'bg-gradient-to-br from-navy to-bg' : 'bg-gradient-to-bl from-navy to-bg';
  }
  return col % 2 === 0 ? 'bg-gradient-to-tr from-bg to-blue/45' : 'bg-gradient-to-tl from-bg to-blue/45';
}

export const Servicios: React.FC = () => {
  const [headerLine1, headerLine2] = servicesHeader.titulo.split('\n');
  const [cierreLine1, cierreLine2] = servicesCierre.titulo.split('\n');

  return (
    <section id="servicios" className="py-16 md:py-20 bg-mist relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand/[0.06] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <Reveal>
          <div className="mb-14 md:mb-16 text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[1.1]">
              <span className="font-light text-ink/50">{headerLine1}</span>{' '}
              <span className="font-black text-brand">{headerLine2}</span>
            </h2>
          </div>
        </Reveal>

        {/* Grid de 8 servicios: 4 columnas x 2 filas en desktop, 2 en tablet, 1 en mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {services.map((service, idx) => {
            const Icon = serviceIcons[service.num];
            return (
              <Reveal key={service.num} delay={idx * 0.05} className="h-full">
                <div className="group h-full rounded-card bg-gradient-to-br from-brand/70 to-blue/50 p-[2px] transition-shadow duration-300 hover:shadow-[0_0_30px_2px_rgba(27,77,228,0.35)]">
                  <Card className={cn('h-full flex flex-col border-0 shadow-[0_8px_20px_rgba(0,0,0,0.2)] group-hover:shadow-[0_0_30px_rgba(27,77,228,0.25)] p-6 md:p-7 transition-transform duration-300 group-hover:scale-[0.97]', cardBg(idx))}>
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
                      {Icon && <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />}
                    </div>
                    <h3 className="font-display font-bold text-base md:text-lg text-white leading-snug mb-2">
                      {service.titulo}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed font-light">
                      {service.bajada}
                    </p>
                  </Card>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Cierre: mismo ancho que la grilla de arriba, tirado a la izquierda */}
        <Reveal delay={0.2} className="mt-16 md:mt-20 text-left">
          <h3 className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.15]">
            <span className="font-light text-ink/70">{cierreLine1}</span>
            <br />
            <span className="font-black text-brand">{cierreLine2}</span>
          </h3>
        </Reveal>
      </div>
    </section>
  );
};
