import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItemData } from '../data/galleryData';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: GalleryItemData[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  items,
  currentIndex,
  onIndexChange,
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onIndexChange((currentIndex - 1 + items.length) % items.length);
      if (e.key === 'ArrowRight') onIndexChange((currentIndex + 1) % items.length);
    },
    [isOpen, currentIndex, items.length, onClose, onIndexChange]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown, isOpen]);

  if (!isOpen || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onIndexChange((currentIndex - 1 + items.length) % items.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onIndexChange((currentIndex + 1) % items.length);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Galería fotográfica a pantalla completa"
      className="fixed inset-0 z-50 flex flex-col justify-between bg-stone-950/95 backdrop-blur-xl transition-all duration-300"
      onClick={onClose}
    >
      {/* Top Bar with Counter and Close Button */}
      <div
        className="w-full flex items-center justify-between px-6 py-4 text-white z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-wider text-amber-400 font-medium">
            The Perfect View in Soo
          </span>
          <span className="text-stone-500">·</span>
          <span className="text-xs font-mono tabular-nums text-stone-300">
            {currentIndex + 1} / {items.length}
          </span>
          <span className="text-stone-500 hidden sm:inline">·</span>
          <span className="text-xs text-stone-400 hidden sm:inline">
            {currentItem.categoryLabel}
          </span>
        </div>

        <button
          onClick={onClose}
          aria-label="Cerrar galería"
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Slide Viewer */}
      <div
        className="relative flex-1 flex items-center justify-center px-4 sm:px-16 max-h-[75vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          aria-label="Foto anterior"
          className="absolute left-4 sm:left-8 z-30 p-3 rounded-full bg-stone-900/80 hover:bg-stone-800 text-white border border-white/10 backdrop-blur-md transition-all active:scale-95"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Current Image */}
        <div className="relative max-w-5xl w-full h-full max-h-[70vh] flex items-center justify-center rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-stone-900">
          <img
            src={currentItem.imageSrc}
            alt={currentItem.title}
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          aria-label="Foto siguiente"
          className="absolute right-4 sm:right-8 z-30 p-3 rounded-full bg-stone-900/80 hover:bg-stone-800 text-white border border-white/10 backdrop-blur-md transition-all active:scale-95"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Caption & Thumbnail Rail */}
      <div
        className="w-full bg-stone-900/90 border-t border-white/10 p-4 sm:p-6 text-white z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white mb-1">
              {currentItem.title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-2xl">
              {currentItem.description}
            </p>
          </div>
        </div>

        {/* Mini Thumbnail Strip */}
        <div className="max-w-4xl mx-auto flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
          {items.map((item, idx) => {
            const isSelected = idx === currentIndex;

            return (
              <button
                key={item.id}
                onClick={() => onIndexChange(idx)}
                className={`relative w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                  isSelected ? 'border-amber-400 scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
