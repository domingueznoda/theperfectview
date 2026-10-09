import React, { useState, useEffect } from 'react';
import { Calendar, Phone } from 'lucide-react';
import { VENUE_INFO } from '../data/venueData';

interface NavbarProps {
  onReserveClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReserveClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-stone-200/80 py-3.5'
          : 'bg-gradient-to-b from-black/60 via-black/20 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element Brand wordmark */}
          <a
            href="#"
            className={`text-xl sm:text-2xl font-bold tracking-tight whitespace-nowrap shrink-0 transition-colors ${
              scrolled ? 'text-stone-900' : 'text-white'
            }`}
            style={{ fontFamily: 'var(--font-display)' }}
          >
            The Perfect View <span className="font-light italic">in Soo</span>
          </a>

          {/* Zone 2: 4 concise single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            <a
              href="#espacio"
              className={`transition-colors whitespace-nowrap hover:underline underline-offset-8 decoration-stone-400 ${
                scrolled ? 'text-stone-600 hover:text-stone-900' : 'text-white/90 hover:text-white'
              }`}
            >
              El Espacio
            </a>
            <a
              href="#galeria"
              className={`transition-colors whitespace-nowrap hover:underline underline-offset-8 decoration-stone-400 ${
                scrolled ? 'text-stone-600 hover:text-stone-900' : 'text-white/90 hover:text-white'
              }`}
            >
              Galería
            </a>
            <a
              href="#normas"
              className={`transition-colors whitespace-nowrap hover:underline underline-offset-8 decoration-stone-400 ${
                scrolled ? 'text-stone-600 hover:text-stone-900' : 'text-white/90 hover:text-white'
              }`}
            >
              Normas y Horarios
            </a>
            <a
              href="#calendario"
              className={`transition-colors whitespace-nowrap hover:underline underline-offset-8 decoration-stone-400 ${
                scrolled ? 'text-stone-600 hover:text-stone-900' : 'text-white/90 hover:text-white'
              }`}
            >
              Disponibilidad
            </a>
            <a
              href="#contacto"
              className={`transition-colors whitespace-nowrap hover:underline underline-offset-8 decoration-stone-400 ${
                scrolled ? 'text-stone-600 hover:text-stone-900' : 'text-white/90 hover:text-white'
              }`}
            >
              Contacto
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${VENUE_INFO.phone}`}
              className={`hidden sm:inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
                scrolled
                  ? 'text-stone-700 hover:bg-stone-100'
                  : 'text-white/90 hover:bg-white/10'
              }`}
              title="Llamar directamente"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{VENUE_INFO.phoneFormatted}</span>
            </a>
            <button
              onClick={onReserveClick}
              className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg shadow-sm transition-all whitespace-nowrap active:scale-95 ${
                scrolled
                  ? 'bg-stone-900 text-white hover:bg-stone-800'
                  : 'bg-amber-500 text-stone-950 hover:bg-amber-400 shadow-amber-900/20'
              }`}
            >
              <Calendar className="w-4 h-4 shrink-0" />
              <span>Reservar Fecha</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
