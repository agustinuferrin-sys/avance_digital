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
    </ReactLenis>
  );
}
