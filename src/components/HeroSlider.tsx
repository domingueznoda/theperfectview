import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Sparkles, Clock, Users, MapPin } from 'lucide-react';
import { GalleryItemData } from '../data/galleryData';

interface HeroSliderProps {
  slides: GalleryItemData[];
  onReserveClick: () => void;
  onExploreGallery: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  slides,
  onReserveClick,
  onExploreGallery,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const currentSlide = slides[currentIndex];

  return (
    <section
      className="relative w-full h-screen min-h-[640px] flex items-center justify-center overflow-hidden bg-stone-950"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Presentación de The Perfect View in Soo"
    >
      {/* Background Slides */}
      {slides.map((slide, idx) => {
        const isCurrent = idx === currentIndex;

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isCurrent ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105 pointer-events-none'
            } transition-transform duration-7000`}
          >
            <img
              src={slide.imageSrc}
              alt={slide.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
            {/* Scrim overlay for legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-stone-950/50" />
            <div className="absolute inset-0 bg-radial from-transparent via-stone-950/20 to-stone-950/70" />
          </div>
        );
      })}

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-12 sm:mt-16">
        {/* Subtle Location & Vibe Kicker */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium tracking-widest uppercase text-amber-300/95 mb-4 px-3 py-1 rounded-full bg-stone-900/60 backdrop-blur-md border border-amber-500/20 shadow-sm">
          <MapPin className="w-3.5 h-3.5 text-amber-400" />
          <span>Soo, Lanzarote · Terraza Lounge Exclusiva</span>
        </div>

        {/* Hero Title */}
        <h1
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-5 leading-[1.08] drop-shadow-md"
          style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}
        >
          El escenario perfecto para tus <span className="italic font-serif text-amber-200">celebraciones</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-stone-200/90 max-w-2xl mx-auto mb-8 font-light leading-relaxed drop-shadow-xs">
          Piscina privada, cocina exterior techada con barbacoa, amplio jardín de césped y pérgola chill-out con los atardeceres más impresionantes de Lanzarote.
        </p>

        {/* Key Venue Highlights Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-3xl mx-auto mb-9 text-xs sm:text-sm text-stone-200 bg-stone-900/70 backdrop-blur-md p-2.5 rounded-2xl border border-white/10 shadow-lg">
          <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/5">
            <span className="text-stone-400 text-[11px] uppercase tracking-wider">Horario Alquiler</span>
            <span className="font-semibold text-amber-300 flex items-center gap-1 mt-0.5">
              <Clock className="w-3.5 h-3.5" /> 12:00 - 20:00
            </span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/5">
            <span className="text-stone-400 text-[11px] uppercase tracking-wider">Capacidad</span>
            <span className="font-semibold text-amber-300 flex items-center gap-1 mt-0.5">
              <Users className="w-3.5 h-3.5" /> Hasta 55 pers.
            </span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/5">
            <span className="text-stone-400 text-[11px] uppercase tracking-wider">Tarifa Base</span>
            <span className="font-semibold text-amber-300 tabular-nums mt-0.5">
              500 € / 20 pers.
            </span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-white/5">
            <span className="text-stone-400 text-[11px] uppercase tracking-wider">Invitado Extra</span>
            <span className="font-semibold text-amber-300 tabular-nums mt-0.5">
              +20 € / pers.
            </span>
          </div>
        </div>

        {/* CTA Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            onClick={onReserveClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-semibold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-lg shadow-amber-500/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Calendar className="w-5 h-5" />
            <span>Consultar Disponibilidad & Reservar</span>
          </button>
          <button
            onClick={onExploreGallery}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-white bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl border border-white/20 transition-colors"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Ver Todas las Fotos ({slides.length})</span>
          </button>
        </div>
      </div>

      {/* Slider Slide Info Badge (Bottom Left) */}
      <div className="hidden sm:flex absolute bottom-8 left-8 z-20 items-center gap-3 bg-stone-900/80 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 text-white max-w-sm text-left">
        <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse shrink-0" />
        <div>
          <p className="text-xs font-semibold text-white truncate">{currentSlide.title}</p>
          <p className="text-[11px] text-stone-400 truncate">{currentSlide.subtitle}</p>
        </div>
      </div>

      {/* Slider Navigation Arrows */}
      <button
        onClick={handlePrev}
        aria-label="Foto anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-stone-900/60 hover:bg-stone-900/90 text-white/80 hover:text-white backdrop-blur-md border border-white/10 transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        aria-label="Foto siguiente"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-stone-900/60 hover:bg-stone-900/90 text-white/80 hover:text-white backdrop-blur-md border border-white/10 transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators (Bottom Center) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 max-w-xs overflow-x-auto py-1">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Ir a foto ${idx + 1}`}
            className={`transition-all duration-300 rounded-full shrink-0 ${
              idx === currentIndex
                ? 'w-6 h-2 bg-amber-400'
                : 'w-2 h-2 bg-white/40 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
