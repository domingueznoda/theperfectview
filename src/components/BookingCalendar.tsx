import React, { useState, useMemo } from 'react';
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Users,
  Clock,
  Send,
  Sparkles,
  Check,
  MessageCircle,
  HelpCircle,
  Info,
} from 'lucide-react';
import { VENUE_INFO } from '../data/venueData';

interface BookingCalendarProps {
  onReservationSent?: () => void;
}

export const BookingCalendar: React.FC<BookingCalendarProps> = () => {
  // Calendar Month State
  const [currentDate, setCurrentDate] = useState(() => new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(() => {
    // Default to upcoming Saturday for good initial conversion preview
    const d = new Date();
    d.setDate(d.getDate() + ((6 - d.getDay() + 7) % 7 || 7));
    return d;
  });

  // Booking Form State
  const [guests, setGuests] = useState<number>(25);
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [eventType, setEventType] = useState<string>('Cumpleaños');
  const [notes, setNotes] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Price Calculation Math
  const priceCalculation = useMemo(() => {
    const baseGuests = VENUE_INFO.baseGuests; // 20
    const extraGuests = Math.max(0, guests - baseGuests);
    const extraGuestsCost = extraGuests * VENUE_INFO.extraGuestPrice; // extra * 20
    const totalPrice = VENUE_INFO.basePrice + extraGuestsCost; // 500 + extra
    return {
      baseGuests,
      extraGuests,
      extraGuestsCost,
      totalPrice,
    };
  }, [guests]);

  // Calendar Grid Generation
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayIndex = (new Date(year, month, 1).getDay() + 6) % 7; // Monday = 0

  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const isPastDay = (day: number) => {
    const d = new Date(year, month, day);
    d.setHours(0, 0, 0, 0);
    return d < today;
  };

  const isDaySelected = (day: number) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === month &&
      selectedDate.getFullYear() === year
    );
  };

  const handleSelectDay = (day: number) => {
    if (isPastDay(day)) return;
    setSelectedDate(new Date(year, month, day));
  };

  const formattedSelectedDate = useMemo(() => {
    if (!selectedDate) return 'Ninguna fecha seleccionada';
    return selectedDate.toLocaleDateString('es-ES', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }, [selectedDate]);

  const shortSelectedDate = useMemo(() => {
    if (!selectedDate) return 'Sin fecha';
    return selectedDate.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  }, [selectedDate]);

  // WhatsApp Message Composer
  const handleReserveWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const dateStr = selectedDate
      ? `${formattedSelectedDate.charAt(0).toUpperCase() + formattedSelectedDate.slice(1)} (${shortSelectedDate})`
      : 'Por determinar';

    const breakdownText =
      priceCalculation.extraGuests > 0
        ? `Base 500 € + ${priceCalculation.extraGuests} invitados extra (x 20 € = ${priceCalculation.extraGuestsCost} €)`
        : 'Tarifa base de 500 € (hasta 20 personas)';

    const message = [
      `¡Hola! Me gustaría consultar la disponibilidad para reservar The Perfect View in Soo:`,
      ``,
      `📅 Fecha: ${dateStr}`,
      `⏰ Horario: ${VENUE_INFO.hours}`,
      `👥 Invitados: ${guests} personas`,
      `💰 Precio estimado: ${priceCalculation.totalPrice} € (${breakdownText})`,
      clientName ? `👤 Nombre: ${clientName}` : null,
      clientPhone ? `📱 Teléfono: ${clientPhone}` : null,
      `🎉 Tipo de evento: ${eventType}`,
      notes ? `📝 Notas: ${notes}` : null,
      ``,
      `¿Tienen disponible esa fecha? ¡Muchas gracias!`,
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappUrl = `https://wa.me/${VENUE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section id="calendario" className="py-24 bg-stone-100/70 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-semibold tracking-wider text-amber-700 uppercase mb-2">
            Reserva & Disponibilidad
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Calcula tu tarifa y reserva tu fecha
          </h2>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Tarifa base de <strong>500 €</strong> para hasta 20 personas y <strong>20 € adicionales</strong> por cada invitado extra (hasta un aforo máximo de 55). Horario de <strong>12:00 a 20:00 h</strong>.
          </p>
        </div>

        {/* 2-Column Booking Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Monthly Calendar (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-stone-900">
                  {monthNames[month]} {year}
                </h3>
                <p className="text-xs text-stone-500">Selecciona el día de tu evento</p>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handlePrevMonth}
                  aria-label="Mes anterior"
                  className="p-2 rounded-lg hover:bg-stone-100 text-stone-600 hover:text-stone-900 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNextMonth}
                  aria-label="Mes siguiente"
                  className="p-2 rounded-lg hover:bg-stone-100 text-stone-600 hover:text-stone-900 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Days of week header */}
            <div className="grid grid-cols-7 gap-1 text-center text-xs font-semibold text-stone-400 mb-2">
              <span>L</span>
              <span>M</span>
              <span>X</span>
              <span>J</span>
              <span>V</span>
              <span>S</span>
              <span>D</span>
            </div>

            {/* Calendar Days Matrix */}
            <div className="grid grid-cols-7 gap-1 text-center text-sm">
              {/* Empty leading padding slots */}
              {Array.from({ length: firstDayIndex }).map((_, i) => (
                <div key={`empty-${i}`} className="h-10 sm:h-11" />
              ))}

              {/* Month Days */}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const dayNum = i + 1;
                const isPast = isPastDay(dayNum);
                const isSelected = isDaySelected(dayNum);

                // Is weekend?
                const dayOfWeek = (firstDayIndex + i) % 7;
                const isWeekend = dayOfWeek === 5 || dayOfWeek === 6;

                return (
                  <button
                    key={dayNum}
                    type="button"
                    disabled={isPast}
                    onClick={() => handleSelectDay(dayNum)}
                    className={`h-10 sm:h-11 rounded-xl flex items-center justify-center font-medium transition-all ${
                      isSelected
                        ? 'bg-amber-400 text-stone-950 font-bold shadow-md scale-105'
                        : isPast
                        ? 'text-stone-300 cursor-not-allowed'
                        : isWeekend
                        ? 'text-stone-900 hover:bg-amber-50 hover:text-amber-800 font-semibold'
                        : 'text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    {dayNum}
                  </button>
                );
              })}
            </div>

            {/* Selected Date Summary & Schedule Pill */}
            <div className="mt-6 pt-6 border-t border-stone-100 flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="text-stone-500">Fecha elegida:</span>
                <span className="font-semibold text-stone-900 capitalize">
                  {formattedSelectedDate}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="text-stone-500">Horario disponible:</span>
                <span className="font-semibold text-amber-700 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> 12:00 a 20:00 h
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing Calculator & WhatsApp Booking Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-xs">
            <form onSubmit={handleReserveWhatsApp}>
              {/* Step 1: Number of guests slider */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-bold text-stone-900 flex items-center gap-2">
                    <Users className="w-4 h-4 text-amber-600" />
                    <span>Número de Invitados</span>
                  </label>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-stone-900 tabular-nums">
                      {guests}
                    </span>
                    <span className="text-xs text-stone-500 ml-1">personas (máx. 55)</span>
                  </div>
                </div>

                <input
                  type="range"
                  min="1"
                  max="55"
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full h-2.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-amber-500 focus:outline-hidden"
                />

                {/* Quick preset buttons */}
                <div className="flex items-center justify-between gap-1.5 mt-3">
                  {[20, 25, 30, 40, 50, 55].map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setGuests(preset)}
                      className={`px-2.5 py-1 text-xs rounded-md font-medium transition-all ${
                        guests === preset
                          ? 'bg-stone-900 text-white font-semibold'
                          : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                      }`}
                    >
                      {preset} pax
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Breakdown Card */}
              <div className="bg-stone-50 rounded-2xl p-5 mb-8 border border-stone-200/80">
                <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-3">
                  Desglose de la Tarifa
                </div>

                <div className="space-y-2 text-sm text-stone-600">
                  <div className="flex items-center justify-between">
                    <span>Tarifa base del espacio (hasta 20 personas):</span>
                    <span className="font-semibold text-stone-900 tabular-nums">500 €</span>
                  </div>

                  {priceCalculation.extraGuests > 0 ? (
                    <div className="flex items-center justify-between text-amber-800">
                      <span>
                        {priceCalculation.extraGuests} invitados extra (x 20 €/pers.):
                      </span>
                      <span className="font-semibold tabular-nums">
                        +{priceCalculation.extraGuestsCost} €
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between text-stone-400 text-xs italic">
                      <span>Sin coste adicional (evento dentro del cupo base de 20 pax)</span>
                      <span>0 €</span>
                    </div>
                  )}

                  <div className="pt-3 border-t border-stone-200 flex items-baseline justify-between text-base">
                    <div>
                      <span className="font-bold text-stone-900">Total Presupuestado:</span>
                      <p className="text-[11px] text-stone-500 font-normal">
                        Horario completo 12:00 a 20:00 h
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-3xl font-extrabold text-stone-950 tabular-nums">
                        {priceCalculation.totalPrice} €
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Contact Information */}
              <div className="space-y-4 mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                      Tu Nombre y Apellidos *
                    </label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="Ej. María Cabrera"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-stone-900 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-hidden transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                      Teléfono de Contacto
                    </label>
                    <input
                      type="tel"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      placeholder="Ej. 612 345 678"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-stone-900 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-hidden transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                      Tipo de Celebración
                    </label>
                    <select
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-stone-900 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-hidden bg-white"
                    >
                      <option value="Cumpleaños">Cumpleaños</option>
                      <option value="Reunión familiar / Almuerzo">Reunión familiar / Almuerzo</option>
                      <option value="Bautizo o Comunión">Bautizo o Comunión</option>
                      <option value="Evento corporativo / Empresa">Evento corporativo / Empresa</option>
                      <option value="Celebración privada">Celebración privada</option>
                      <option value="Otro tipo de evento">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                      Observaciones o Dudas
                    </label>
                    <input
                      type="text"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Ej. Traemos catering / música acústica"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-stone-900 text-sm focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-hidden transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Submit CTA: WhatsApp Direct Action */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-stone-950 bg-emerald-400 hover:bg-emerald-300 shadow-md shadow-emerald-500/20 transition-all duration-200 active:scale-98"
              >
                <MessageCircle className="w-5 h-5 fill-stone-950" />
                <span>Reservar por WhatsApp · {priceCalculation.totalPrice} €</span>
              </button>

              <div className="mt-3.5 flex items-center justify-center gap-2 text-xs text-stone-500 text-center">
                <Info className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                <span>
                  Al pulsar, se abrirá WhatsApp con todos tus datos y el cálculo pre-rellenado para confirmar la fecha.
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
