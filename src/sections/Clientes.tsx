import React from 'react';
import { Marquee } from '../components/Marquee';
import { clients } from '../data/clients';

export const Clientes: React.FC = () => {
  return (
    <section className="py-24 bg-bg border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h3 className="text-muted font-medium tracking-widest uppercase text-sm">
          Marcas que avanzan con nosotros
        </h3>
      </div>
      
      <Marquee speed={50} className="mb-8">
        {clients.map(client => (
          <img 
            key={client.id} 
            src={client.logo} 
            alt={client.nombre}
            className="h-12 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          />
        ))}
      </Marquee>
    </section>
  );
};
