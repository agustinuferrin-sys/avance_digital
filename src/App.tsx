/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactLenis } from 'lenis/react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './sections/Navbar';
import { Footer } from './sections/Footer';
import { Cursor } from './components/Cursor';
import { MessageCircle } from 'lucide-react';
import Home from './Home';
import ProyectoDetalle from './sections/ProyectoDetalle';
import Plantillas from './pages/Plantillas';

export default function App() {
  return (
    <ReactLenis root>
      <div className="bg-bg text-white font-body selection:bg-brand selection:text-white min-h-screen relative overflow-clip w-full max-w-full">
        <Cursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos/:slug" element={<ProyectoDetalle />} />
          <Route path="/plantillas" element={<Plantillas />} />
        </Routes>
        <Footer />
      </div>

      <a
        href="https://wa.me/5491126448450"
        target="_blank"
        rel="noreferrer"
        className="group fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-[99999] inline-flex rounded-pill p-[2px] bg-gradient-to-r from-brand via-brandAlt to-skyLight shadow-[0_10px_25px_-8px_rgba(27,77,228,0.55)] transition-transform duration-300 ease-out hover:scale-105 active:scale-95"
      >
        <span className="flex items-center gap-3 rounded-pill bg-bg px-6 py-4 transition-colors duration-300 group-hover:bg-transparent">
          <MessageCircle className="w-5 h-5" />
          <span className="font-semibold text-sm hidden md:block tracking-wider uppercase">Escribinos</span>
        </span>
      </a>
    </ReactLenis>
  );
}
