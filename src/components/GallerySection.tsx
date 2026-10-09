import React, { useState } from 'react';
import { ZoomIn, Camera } from 'lucide-react';
import { GalleryItemData } from '../data/galleryData';
import { LightboxModal } from './LightboxModal';

interface GallerySectionProps {
  items: GalleryItemData[];
}

export const GallerySection: React.FC<GallerySectionProps> = ({ items }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const filteredItems = items.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  const handleOpenLightbox = (itemId: string) => {
    const originalIndex = items.findIndex((i) => i.id === itemId);
    setActiveImageIndex(originalIndex !== -1 ? originalIndex : 0);
    setLightboxOpen(true);
  };

  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold tracking-wider text-amber-700 uppercase mb-2">
              Galería Fotográfica Real
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Cada rincón de The Perfect View in Soo
            </h2>
            <p className="mt-3 text-base text-stone-600 max-w-xl">
              Explora las {items.length} fotografías oficiales del espacio. Haz clic sobre cualquiera de ellas para abrir el visor ampliado a pantalla completa.
            </p>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1.5 bg-stone-100 rounded-2xl max-w-full overflow-x-auto scrollbar-none mb-10">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all whitespace-nowrap ${
              activeFilter === 'all'
                ? 'bg-white text-stone-900 shadow-xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Todas ({items.length})
          </button>
          <button
            onClick={() => setActiveFilter('vistas')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all whitespace-nowrap ${
              activeFilter === 'vistas'
                ? 'bg-white text-stone-900 shadow-xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Vistas & Atardecer
          </button>
          <button
            onClick={() => setActiveFilter('piscina')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all whitespace-nowrap ${
              activeFilter === 'piscina'
                ? 'bg-white text-stone-900 shadow-xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Piscina & Jardín
          </button>
          <button
            onClick={() => setActiveFilter('lounge')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all whitespace-nowrap ${
              activeFilter === 'lounge'
                ? 'bg-white text-stone-900 shadow-xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Pérgola Chill-Out
          </button>
          <button
            onClick={() => setActiveFilter('cocina')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all whitespace-nowrap ${
              activeFilter === 'cocina'
                ? 'bg-white text-stone-900 shadow-xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Cocina & Comedor
          </button>
          <button
            onClick={() => setActiveFilter('bano')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all whitespace-nowrap ${
              activeFilter === 'bano'
                ? 'bg-white text-stone-900 shadow-xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Baño de Diseño
          </button>
          <button
            onClick={() => setActiveFilter('detalles')}
            className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all whitespace-nowrap ${
              activeFilter === 'detalles'
                ? 'bg-white text-stone-900 shadow-xs font-semibold'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Detalles & Cartel
          </button>
        </div>

        {/* Bento Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const isFeatured = index === 0 && activeFilter === 'all';

            return (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(item.id)}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-stone-100 border border-stone-200/90 shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                  isFeatured ? 'sm:col-span-2 lg:col-span-2 aspect-[16/10]' : 'aspect-[4/3]'
                }`}
              >
                {/* Real Media Photo */}
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Scrim Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/25 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                {/* Badges and Actions (Top) */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-10">
                  <span className="text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-md bg-stone-900/60 backdrop-blur-md border border-white/10 text-stone-200">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Content info (Bottom) */}
                <div className="absolute bottom-4 left-4 right-4 text-white z-10 flex items-end justify-between">
                  <div className="max-w-[80%]">
                    <h3 className="text-base sm:text-lg font-bold leading-snug group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-300 mt-0.5 truncate">
                      {item.subtitle}
                    </p>
                  </div>
                  <div className="p-2 rounded-xl bg-white/20 backdrop-blur-md text-white group-hover:bg-amber-400 group-hover:text-stone-950 transition-colors shrink-0">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Popup Slider */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={items}
        currentIndex={activeImageIndex}
        onIndexChange={setActiveImageIndex}
      />
    </section>
  );
};
