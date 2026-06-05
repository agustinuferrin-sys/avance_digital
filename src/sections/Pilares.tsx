import React from 'react';
import { Card } from '../components/Card';
import { Reveal } from '../components/Reveal';
import { pillars } from '../data/pillars';

export const Pilares: React.FC = () => {
  return (
    <section id="estrategia" className="py-24 bg-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <Reveal key={pillar.id} delay={idx * 0.1}>
              <Card className="h-full flex flex-col">
                <h3 className="font-display font-bold text-xl mb-4 text-white">
                  {pillar.título}
                </h3>
                <p className="text-muted leading-relaxed flex-1">
                  {pillar.descripción}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
