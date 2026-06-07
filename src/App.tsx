/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactLenis } from 'lenis/react';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { Pilares } from './sections/Pilares';
import { Servicios } from './sections/Servicios';
import { Metricas } from './sections/Metricas';
import { SistemaAvance } from './sections/SistemaAvance';
import { Manifiesto } from './sections/Manifiesto';
import { Proyectos } from './sections/Proyectos';
import { Planes } from './sections/Planes';
import { EsParaVos } from './sections/EsParaVos';
import { Clientes } from './sections/Clientes';
import { Contacto } from './sections/Contacto';
import { Footer } from './sections/Footer';
import { Cursor } from './components/Cursor';
import { MessageCircle } from 'lucide-react';

export default function App() {
  return (
    <ReactLenis root>
      <div className="bg-bg text-white font-body selection:bg-brand selection:text-white min-h-screen relative overflow-hidden">
        <Cursor />
        <Navbar />
        <Hero />
        <Pilares />
        <Servicios />
        <Metricas />
        <SistemaAvance />
        <Manifiesto />
        <Proyectos />
        <Planes />
        <EsParaVos />
        <Clientes />
        <Contacto />
        <Footer />
      </div>
      
      <a 
        href="https://wa.me/5491126448450" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-[99999] bg-brand text-white px-6 py-4 rounded-pill flex items-center gap-3 shadow-[0_0_30px_rgba(27,77,228,0.4)] hover:scale-105 hover:bg-brandAlt transition-all"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="font-semibold text-sm hidden md:block tracking-wider uppercase">Escribinos</span>
      </a>
    </ReactLenis>
  );
}
