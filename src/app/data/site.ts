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
  languages:
    'English and Hindi on the Delhi desk. Licensed monument and city guides in the language you opt — confirmed before deposit.',
  payments: 'UPI, Indian bank transfer, Wise / SWIFT. Card on request.',
  vehicles: 'Sedan, SUV/MUV and coaches across India',
  includedEveryTrip: [
    'Airport or station welcome in the arrival city',
    'Chauffeur-driven sedan, SUV/MUV or coach as quoted — across India, reserved for your party',
    'Licensed guide in the language you choose, where the site needs a guide',
    'Stay in the band you opt — 3-star, 4-star, 5-star / heritage, or a mix with houseboat, lodge or camp',
    'Written inclusions before you pay a deposit',
    'A named Delhi WhatsApp number while you travel',
  ],
} as const;

export const FLEET_OPTIONS = [
  {
    name: 'Sedan',
    text: 'Couples and two or three guests. City sightseeing and highway days with a chauffeur.',
  },
  {
    name: 'SUV / MUV',
    text: 'Families, extra luggage and hill roads. The usual choice when a sedan is tight.',
  },
  {
    name: 'Coach',
    text: 'School, college, corporate, wedding-guest and yatra groups. Booked for your names, not a public bus.',
  },
] as const;

export const GUIDE_LANGUAGES = [
  'English',
  'Hindi',
  'French',
  'German',
  'Spanish',
  'Italian',
  'Russian',
  'Portuguese',
  'Japanese',
  'Mandarin',
  'Korean',
  'Arabic',
  'Dutch',
  'Hebrew',
] as const;

export const STAY_OPTIONS = [
  {
    name: '3-star comfortable',
    text: 'Clean, well-located hotels for a practical circuit and a sensible budget.',
  },
  {
    name: '4-star',
    text: 'The usual FIT band: reliable rooms, breakfast, easy meeting point for the chauffeur.',
  },
  {
    name: '5-star & heritage',
    text: 'City five-stars and palace / haveli stays. Named properties sent as options, held only after you approve.',
  },
  {
    name: 'Houseboat, lodge & camp',
    text: 'Kerala houseboat, jungle lodge or desert camp — only where the itinerary actually needs them.',
  },
] as const;

export function whatsappUrl(text: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}
