export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'exterior' | 'piscina' | 'pergola' | 'cocina' | 'bano';
  svgIllustration: string;
  customImageUrl?: string;
  description: string;
}

export interface BookingState {
  selectedDate: string | null;
  guests: number;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  eventType: string;
  notes: string;
}

export interface PriceBreakdown {
  basePrice: number;
  baseGuests: number;
  extraGuests: number;
  extraGuestFee: number;
  extraGuestsCost: number;
  totalPrice: number;
}
