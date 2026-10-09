import React from 'react';
import {
  Waves,
  UtensilsCrossed,
  Armchair,
  Trees,
  Bath,
  ShieldCheck,
  Clock,
  Users,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';
import { VENUE_INFO, AMENITIES, RULES, FAQS } from '../data/venueData';

interface VenueInfoProps {
  onReserveClick: () => void;
}

export const VenueInfo: React.FC<VenueInfoProps> = ({ onReserveClick }) => {
  const iconMap: Record<string, React.ReactNode> = {
    Waves: <Waves className="w-5 h-5" />,
    UtensilsCrossed: <UtensilsCrossed className="w-5 h-5" />,
    Armchair: <Armchair className="w-5 h-5" />,
    Trees: <Trees className="w-5 h-5" />,
    Bath: <Bath className="w-5 h-5" />,
    ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  };

  return (
    <div id="espacio" className="py-24 bg-[#FAF9F6]">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider text-amber-700 uppercase mb-2">
            El Espacio · Soo, Lanzarote
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-tight mb-5"
            style={{ fontFamily: 'var(--font-display)', textWrap: 'balance' }}
          >
            Diseñado para celebrar momentos únicos con total privacidad
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed">
            The Perfect View in Soo es un enclave exclusivo al aire libre en el pueblo de Soo (Tinajo). Diseñado con la arquitectura blanca tradicional de Lanzarote combinada con detalles contemporáneos, ofrece todas las comodidades para albergar cumpleaños, aniversarios, comidas familiares o eventos de empresa.
          </p>
        </div>

        {/* 6 Core Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {AMENITIES.map((amenity) => (
            <div
              key={amenity.id}
              className="bg-white rounded-2xl p-7 border border-stone-200/80 shadow-xs hover:border-amber-400/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-5">
                  {iconMap[amenity.icon]}
                </div>
                <div className="text-xs font-medium text-stone-400 uppercase tracking-wider mb-1">
                  {amenity.badge}
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2.5">
                  {amenity.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner: Normas y Horarios */}
        <div id="normas" className="bg-stone-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16 mb-24 relative overflow-hidden">
          {/* Subtle warm ambient gradient */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            <div className="text-xs font-semibold tracking-wider text-amber-400 uppercase mb-3">
              Información de Alquiler & Convivencia
            </div>
            <h3
              className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Normas del espacio y condiciones de reserva
            </h3>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-10 max-w-2xl">
              Cuidamos cada rincón para que disfrutes de una jornada perfecta. Estas pautas garantizan la comodidad, seguridad y preservación de las instalaciones.
            </p>

            {/* Rules Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {RULES.map((rule, idx) => (
                <div
                  key={idx}
                  className="bg-stone-800/80 backdrop-blur-sm p-5 rounded-xl border border-stone-700/80"
                >
                  <div className="flex items-center gap-2 mb-2 text-amber-400 font-semibold text-sm">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{rule.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                    {rule.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick summary strip */}
            <div className="pt-6 border-t border-stone-800 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-stone-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Horario continuo: <strong>12:00 a 20:00 h</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-amber-400" />
                <span>Capacidad: <strong>20 a 55 invitados</strong></span>
              </div>
              <button
                onClick={onReserveClick}
                className="px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-stone-950 font-semibold text-xs sm:text-sm transition-colors"
              >
                Reservar Mi Fecha
              </button>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-semibold tracking-wider text-amber-700 uppercase mb-2">
              Dudas Habituales
            </div>
            <h3
              className="text-2xl sm:text-3xl font-bold text-stone-900"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Preguntas Frecuentes sobre el Alquiler
            </h3>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white rounded-2xl border border-stone-200/80 p-6 [&_summary::-webkit-details-marker]:none cursor-pointer transition-all hover:border-stone-300"
              >
                <summary className="flex items-center justify-between font-semibold text-stone-900 text-base sm:text-lg list-none">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-amber-600 shrink-0" />
                    <span>{faq.q}</span>
                  </div>
                  <span className="text-stone-400 group-open:rotate-180 transition-transform duration-200 text-lg">
                    ▾
                  </span>
                </summary>
                <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed pl-8">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
