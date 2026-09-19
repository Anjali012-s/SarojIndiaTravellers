export const SITE = {
  brand: 'Saroj India Tours',
  shortBrand: 'Saroj',
  tagline: 'Private journeys across India, designed in Delhi and delivered on the ground.',
  phoneDisplay: '+91 79820 10520',
  phoneTel: '+917982010520',
  whatsapp: '917982010520',
  email: 'enquiries@sarojindiatours.com',
  city: 'New Delhi, India',
  area: 'Delhi NCR — meetings by appointment',
  hours: 'Daily 8:00–22:00 IST',
  quoteSla: 'Same-day itinerary on working days',
  deposit: '25% to confirm hotels and permits; balance 30 days before arrival',
  languages: 'English and Hindi on the desk; other languages via licensed local guides',
  payments: 'UPI, Indian bank transfer, Wise / SWIFT. Card on request.',
  includedEveryTrip: [
    'Airport or station welcome in the arrival city',
    'Private air-conditioned car and chauffeur (not a pooled coach)',
    'Licensed monument guides where the site requires them',
    'Written inclusions before you pay a deposit',
    'A named Delhi WhatsApp number while you travel',
  ],
} as const;

export function whatsappUrl(text: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}
