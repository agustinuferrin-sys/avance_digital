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

export default function App() {
  return (
    <ReactLenis root>
      <div className="bg-bg text-white font-body selection:bg-brand selection:text-white min-h-screen relative overflow-clip w-full max-w-full">
        <Cursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos/:slug" element={<ProyectoDetalle />} />
        </Routes>
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
