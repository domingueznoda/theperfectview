import React from 'react';
import { Phone, MapPin, Clock, ArrowUp } from 'lucide-react';
import { VENUE_INFO } from '../data/venueData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-400 py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-stone-800">
          <div>
            <span
              className="text-2xl font-bold text-white tracking-tight block"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              The Perfect View <span className="italic font-serif text-amber-300">in Soo</span>
            </span>
            <p className="text-xs sm:text-sm text-stone-400 mt-2 max-w-md">
              Espacio privado para celebraciones, reuniones y eventos exclusivos en Soo, Lanzarote.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-stone-300">
            <a href="#espacio" className="hover:text-white transition-colors">
              El Espacio
            </a>
            <a href="#galeria" className="hover:text-white transition-colors">
              Galería
            </a>
            <a href="#normas" className="hover:text-white transition-colors">
              Normas
            </a>
            <a href="#calendario" className="hover:text-white transition-colors">
              Disponibilidad
            </a>
            <a href="#contacto" className="hover:text-white transition-colors">
              Contacto
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-800 transition-colors inline-flex items-center gap-1 text-xs"
              title="Volver arriba"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Arriba</span>
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} The Perfect View in Soo · Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-4">
            <span>Soo, Tinajo, Lanzarote</span>
            <span>·</span>
            <span>Tel. {VENUE_INFO.phoneFormatted}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
