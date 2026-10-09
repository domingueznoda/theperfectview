/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { HeroSlider } from './components/HeroSlider';
import { VenueInfo } from './components/VenueInfo';
import { GallerySection } from './components/GallerySection';
import { BookingCalendar } from './components/BookingCalendar';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { INITIAL_GALLERY_ITEMS } from './data/galleryData';
import { VENUE_INFO } from './data/venueData';

export default function App() {
  const scrollToCalendar = () => {
    const el = document.getElementById('calendario');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToGallery = () => {
    const el = document.getElementById('galeria');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-stone-900 selection:bg-amber-200 selection:text-stone-900 flex flex-col font-sans">
      {/* Top Bar */}
      <Navbar onReserveClick={scrollToCalendar} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Fullscreen Slider Hero */}
        <HeroSlider
          slides={INITIAL_GALLERY_ITEMS}
          onReserveClick={scrollToCalendar}
          onExploreGallery={scrollToGallery}
        />

        {/* Venue Information, Amenities, Rules & FAQs */}
        <VenueInfo onReserveClick={scrollToCalendar} />

        {/* Bento Gallery & Popup Slider Lightbox */}
        <GallerySection items={INITIAL_GALLERY_ITEMS} />

        {/* Availability Calendar & Price Calculator & WhatsApp Action */}
        <BookingCalendar />

        {/* Contact Section & Location */}
        <ContactSection />
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* Quick WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${VENUE_INFO.whatsappNumber}?text=${encodeURIComponent('¡Hola! Me gustaría información para reservar The Perfect View in Soo.')}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg shadow-emerald-950/20 hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 text-xs font-semibold"
      >
        <MessageCircle className="w-5 h-5 fill-white text-emerald-500" />
        <span className="hidden sm:inline">WhatsApp Directo</span>
      </a>
    </div>
  );
}
