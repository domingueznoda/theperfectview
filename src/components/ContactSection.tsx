import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Mail, Send, CheckCircle2 } from 'lucide-react';
import { VENUE_INFO } from '../data/venueData';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullMsg = `Hola, soy ${name}. Mi teléfono es ${phone}. Consulta: ${message}`;
    const url = `https://wa.me/${VENUE_INFO.whatsappNumber}?text=${encodeURIComponent(fullMsg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  return (
    <section id="contacto" className="py-24 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider text-amber-700 uppercase mb-2">
            Contacto Directo & Ubicación
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Estamos a tu disposición para cualquier consulta
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600">
            Escríbenos directamente por WhatsApp, llámanos o rellena el formulario para resolver cualquier detalle sobre tu próximo evento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Details & Location Card (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Phone & WhatsApp Card */}
            <div className="bg-stone-50 rounded-2xl p-7 border border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-stone-500 uppercase tracking-wider font-semibold">
                    Teléfono & WhatsApp
                  </div>
                  <a
                    href={`tel:${VENUE_INFO.phone}`}
                    className="text-xl sm:text-2xl font-bold text-stone-900 hover:text-amber-700 transition-colors"
                  >
                    {VENUE_INFO.phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <a
                  href={`tel:${VENUE_INFO.phone}`}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Llamar</span>
                </a>
                <a
                  href={`https://wa.me/${VENUE_INFO.whatsappNumber}?text=${encodeURIComponent('¡Hola! Me gustaría información sobre The Perfect View in Soo.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Location & Hours Card */}
            <div className="bg-stone-50 rounded-2xl p-7 border border-stone-200 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-stone-200 text-stone-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-stone-500 uppercase tracking-wider font-semibold mb-0.5">
                    Ubicación del Espacio
                  </div>
                  <div className="text-base font-bold text-stone-900">
                    Soo, Tinajo, Lanzarote
                  </div>
                  <p className="text-sm text-stone-600 mt-1 leading-relaxed">
                    Situado en una zona elevada de Soo con vistas panorámicas a las calderas volcánicas y a los atardeceres sobre el mar. A solo 15 minutos de Famara y 20 minutos de Arrecife.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-stone-500 uppercase tracking-wider font-semibold mb-0.5">
                    Horario Disponible para Eventos
                  </div>
                  <div className="text-base font-bold text-stone-900">
                    12:00 a 20:00 h
                  </div>
                  <p className="text-sm text-stone-600 mt-1">
                    Jornada completa de 8 horas continuas para disfrutar del sol y del atardecer.
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Visual Map Preview */}
            <div className="rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-stone-700 uppercase tracking-wider">
                  Entorno Natural de Soo
                </span>
                <span className="text-xs text-stone-500">Lanzarote · Reserva de la Biosfera</span>
              </div>
              <div className="relative w-full h-40 bg-stone-200 rounded-xl overflow-hidden flex items-center justify-center text-stone-500 text-xs border border-stone-300">
                <div className="text-center p-4">
                  <MapPin className="w-7 h-7 text-amber-600 mx-auto mb-1 animate-bounce" />
                  <p className="font-bold text-stone-800">The Perfect View in Soo</p>
                  <p className="text-stone-500 text-[11px]">35560 Soo, Tinajo, Las Palmas, España</p>
                  <a
                    href="https://maps.google.com/?q=Soo+Lanzarote"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-xs font-semibold text-amber-700 hover:underline"
                  >
                    Ver en Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Inquiries Form (6 cols) */}
          <div className="lg:col-span-6 bg-stone-900 text-white rounded-3xl p-8 sm:p-10 border border-stone-800">
            <h3
              className="text-2xl font-bold text-white mb-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Envíanos un Mensaje
            </h3>
            <p className="text-stone-400 text-sm mb-8 leading-relaxed">
              ¿Tienes una duda sobre fechas, catering o equipamiento? Te responderemos en menos de 2 horas.
            </p>

            {sent ? (
              <div className="bg-emerald-950/60 border border-emerald-500/30 rounded-2xl p-6 text-center">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-white mb-1">¡Mensaje preparado!</h4>
                <p className="text-xs sm:text-sm text-stone-300 mb-4">
                  Se ha generado la conversación en WhatsApp para que nos envíes tu consulta directamente.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="text-xs text-amber-400 hover:underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    Tu Nombre
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Carlos Noda"
                    className="w-full px-4 py-3 rounded-xl bg-stone-800 border border-stone-700 text-white text-sm placeholder-stone-500 focus:border-amber-400 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ej. 637 000 000"
                    className="w-full px-4 py-3 rounded-xl bg-stone-800 border border-stone-700 text-white text-sm placeholder-stone-500 focus:border-amber-400 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    Mensaje / Consulta
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Cuéntanos qué fecha te gustaría o qué dudas tienes sobre la finca..."
                    className="w-full px-4 py-3 rounded-xl bg-stone-800 border border-stone-700 text-white text-sm placeholder-stone-500 focus:border-amber-400 focus:outline-hidden resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-sm transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Consulta por WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
