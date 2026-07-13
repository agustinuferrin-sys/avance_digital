import React from 'react';
import { Marquee } from '../components/Marquee';
import { clients } from '../data/clients';

export const Clientes: React.FC = () => {
  return (
    <section className="py-10 md:py-12 bg-bg border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-10 text-center">
        <h3 className="font-display text-muted font-medium tracking-widest uppercase text-sm">
          Marcas que avanzan con nosotros
        </h3>
      </div>

      <Marquee speed={60} pauseOnHover>
        {clients.map(client => (
          <div key={client.id} className="flex items-center justify-center w-36 md:w-48 shrink-0">
            <img
              src={client.logo}
              alt={client.nombre}
              loading="lazy"
              className="h-10 md:h-12 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 touch:grayscale-0 touch:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};
