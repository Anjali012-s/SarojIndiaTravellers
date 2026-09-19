export const SITE = {
  brand: 'Saroj India Tours',
  shortBrand: 'Saroj',
  tagline: 'Private journeys across India, designed in Delhi and delivered on the ground.',
  phoneDisplay: '+91 87008 77594',
  phoneTel: '+918700877594',
  whatsapp: '918700877594',
  email: 'enquiries@sarojindiatours.com',
  city: 'New Delhi, India',
  area: 'Delhi NCR — meetings by appointment',
  hours: 'Daily 8:00–22:00 IST',
  quoteSla: 'Same-day itinerary on working days',
  deposit: '25% to confirm hotels and permits; balance 30 days before arrival',
} as const;

export function whatsappUrl(text: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}
