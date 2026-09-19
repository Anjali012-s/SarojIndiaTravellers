export interface TourDay {
  title: string;
  detail: string;
}

export interface Tour {
  slug: string;
  name: string;
  region: string;
  duration: string;
  nights: number;
  days: number;
  fromUsd: number;
  fromInr: number;
  hero: string;
  summary: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  bestFor: string;
  itinerary: TourDay[];
}

export const TOURS: Tour[] = [
  {
    slug: 'golden-triangle',
    name: 'Golden Triangle Classic',
    region: 'Delhi · Agra · Jaipur',
    duration: '6 days / 5 nights',
    nights: 5,
    days: 6,
    fromUsd: 890,
    fromInr: 74000,
    hero: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=80',
    summary:
      'The essential first India journey: Old and New Delhi, sunrise at the Taj Mahal, and Jaipur’s palaces — private car, licensed guides, paced for comfort.',
    highlights: [
      'Taj Mahal at sunrise with a licensed monument guide',
      'Old Delhi walk and Humayun’s Tomb',
      'Amber Fort and Pink City palaces',
      'Airport meet-and-greet in Delhi',
    ],
    inclusions: [
      'Private air-conditioned car and chauffeur',
      'English-speaking local guides at monuments',
      '5 nights in 4-star or similar hotels, breakfast daily',
      'Monument tickets as listed',
      '24/7 phone and WhatsApp support',
    ],
    exclusions: ['International flights', 'Lunches and dinners', 'Tips', 'Travel insurance'],
    bestFor: 'First-time visitors from the US, UK, Europe and the Gulf',
    itinerary: [
      { title: 'Day 1 — Arrive Delhi', detail: 'Airport welcome, hotel check-in, optional evening Old Delhi food walk.' },
      { title: 'Day 2 — Delhi', detail: 'Qutub Minar, Humayun’s Tomb, India Gate, and a guided Old Delhi circuit.' },
      { title: 'Day 3 — Agra', detail: 'Drive to Agra. Sunset at Mehtab Bagh facing the Taj. Overnight Agra.' },
      { title: 'Day 4 — Taj & to Jaipur', detail: 'Sunrise Taj Mahal, Agra Fort, then the countryside drive to Jaipur.' },
      { title: 'Day 5 — Jaipur', detail: 'Amber Fort, City Palace, Jantar Mantar, and bazaar time at your pace.' },
      { title: 'Day 6 — Depart', detail: 'Drive or fly back to Delhi for your onward flight. Tour ends after breakfast.' },
    ],
  },
  {
    slug: 'taj-and-tigers',
    name: 'Taj & Tigers',
    region: 'Delhi · Agra · Ranthambore · Jaipur',
    duration: '8 days / 7 nights',
    nights: 7,
    days: 8,
    fromUsd: 1290,
    fromInr: 108000,
    hero: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1600&q=80',
    summary:
      'Golden Triangle with two game drives in Ranthambore. Heritage by day, jungle at dawn — the itinerary families and wildlife travellers ask for most.',
    highlights: [
      'Two shared or private safari slots in Ranthambore (permits subject to park rules)',
      'Sunrise Taj Mahal',
      'Jaipur palaces after the jungle',
      'Lodge stay near the park',
    ],
    inclusions: [
      'Private transfers throughout',
      'Safari bookings we manage on confirmation',
      '7 nights hotels/lodge with breakfast',
      'Guides in Delhi, Agra and Jaipur',
    ],
    exclusions: ['International flights', 'Park extras beyond listed drives', 'Dinners unless stated'],
    bestFor: 'Families and couples who want monuments plus wildlife',
    itinerary: [
      { title: 'Day 1–2 — Delhi', detail: 'Arrival and a full Delhi sightseeing day.' },
      { title: 'Day 3 — Agra', detail: 'Taj Mahal and Agra Fort.' },
      { title: 'Day 4–5 — Ranthambore', detail: 'Transfer to the park. Two safari drives. Rest at the lodge.' },
      { title: 'Day 6–7 — Jaipur', detail: 'Drive to Jaipur. Palaces, fort and free evening.' },
      { title: 'Day 8 — Depart', detail: 'Return to Delhi airport.' },
    ],
  },
  {
    slug: 'royal-rajasthan',
    name: 'Royal Rajasthan',
    region: 'Jaipur · Jodhpur · Udaipur · Jaisalmer option',
    duration: '10 days / 9 nights',
    nights: 9,
    days: 10,
    fromUsd: 1680,
    fromInr: 140000,
    hero: 'https://images.unsplash.com/photo-1477587458883-47145f52685a?auto=format&fit=crop&w=1600&q=80',
    summary:
      'Palace cities, blue lanes and lake views. Built as a private circuit with time to linger — not a checklist dash across the desert.',
    highlights: [
      'Amber Fort and Jaipur bazaars',
      'Mehrangarh Fort, Jodhpur',
      'Lake Pichola and City Palace, Udaipur',
      'Heritage hotel stays by category you choose',
    ],
    inclusions: [
      'Private chauffeur-driven car',
      '9 nights breakfast hotels',
      'Local guides in each city',
      'Monument fees as listed',
    ],
    exclusions: ['Flights within India unless requested', 'Camel safari (optional extra)'],
    bestFor: 'Couples, photographers, travellers aged 40+',
    itinerary: [
      { title: 'Day 1–3 — Jaipur', detail: 'Forts, palaces and a slower third day for crafts or Amber at dusk.' },
      { title: 'Day 4–5 — Jodhpur', detail: 'Drive via Pushkar or a rural halt. Mehrangarh and the old city.' },
      { title: 'Day 6–8 — Udaipur', detail: 'Lakes, palaces, optional rural village visit.' },
      { title: 'Day 9–10 — Depart', detail: 'Fly Udaipur–Delhi or extend to Jaisalmer on request.' },
    ],
  },
  {
    slug: 'spiritual-north',
    name: 'Spiritual North',
    region: 'Delhi · Varanasi · Amritsar option',
    duration: '7 days / 6 nights',
    nights: 6,
    days: 7,
    fromUsd: 980,
    fromInr: 82000,
    hero: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1600&q=80',
    summary:
      'Ghats at dawn, evening aarti, and an unhurried Ganges morning. Optional Golden Temple extension for diaspora and first-timers alike.',
    highlights: [
      'Sunrise boat on the Ganges',
      'Evening Ganga aarti from a reserved ghat area',
      'Sarnath option',
      'Amritsar Golden Temple night ceremony on extension',
    ],
    inclusions: ['Flights or trains Delhi–Varanasi as quoted', 'Private transfers', 'Boat at sunrise', 'Hotels with breakfast'],
    exclusions: ['Donation at temples', 'Camera fees where levied'],
    bestFor: 'Diaspora families, wellness and culture travellers',
    itinerary: [
      { title: 'Day 1 — Delhi', detail: 'Arrive and rest. Optional Humayun’s Tomb.' },
      { title: 'Day 2–4 — Varanasi', detail: 'Fly or train. Sunrise boat, lanes, Sarnath, evening aarti.' },
      { title: 'Day 5–7 — Delhi or Amritsar', detail: 'Return to Delhi, or fly to Amritsar for the Golden Temple and Wagah.' },
    ],
  },
  {
    slug: 'kerala-backwaters',
    name: 'Kerala Backwaters',
    region: 'Kochi · Munnar · Alleppey',
    duration: '7 days / 6 nights',
    nights: 6,
    days: 7,
    fromUsd: 1120,
    fromInr: 94000,
    hero: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=80',
    summary:
      'A South India counterpart to the Triangle: spice hills, a private houseboat night, and Kochi’s harbour history. Operated with a Kerala ground partner.',
    highlights: [
      'Fort Kochi heritage walk',
      'Munnar tea estates',
      'Overnight houseboat on the backwaters',
      'Seafood and slow evenings',
    ],
    inclusions: ['Private car in Kerala', 'Houseboat with meals', '6 nights as listed', 'Airport transfers Kochi'],
    exclusions: ['Flights from Delhi (quoted separately)', 'Ayurveda treatments'],
    bestFor: 'Honeymoons and winter-sun travellers',
    itinerary: [
      { title: 'Day 1–2 — Kochi', detail: 'Arrive Kochi. Fort Kochi, synagogue, Chinese fishing nets.' },
      { title: 'Day 3–4 — Munnar', detail: 'Drive to the tea hills. Estate walk and valley views.' },
      { title: 'Day 5 — Houseboat', detail: 'Alleppey backwaters, overnight on a private boat.' },
      { title: 'Day 6–7 — Depart Kochi', detail: 'Short coastal halt if time allows, then airport.' },
    ],
  },
  {
    slug: 'custom-india',
    name: 'Custom private India',
    region: 'Your dates · your pace · your hotels',
    duration: 'From 5 days',
    nights: 4,
    days: 5,
    fromUsd: 750,
    fromInr: 62000,
    hero: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=80',
    summary:
      'Family reunions, wedding guests, multi-generation trips and special-interest routes. We design the circuit, you approve hotels and pace, we run the ground.',
    highlights: [
      'Itinerary draft on the same working day',
      'Hotel options in 3, 4 and 5-star bands',
      'Wedding and group airport logistics',
      'Combine North with Kerala, wildlife or Nepal on request',
    ],
    inclusions: ['Planning and quoting', 'Private transport once confirmed', 'Guides where needed', 'On-tour WhatsApp desk'],
    exclusions: ['Until you confirm: hotels and tickets are proposals only'],
    bestFor: 'Families, wedding parties, repeat guests',
    itinerary: [
      { title: 'Tell us the brief', detail: 'Dates, cities, hotel style, mobility needs, celebrations.' },
      { title: 'We send a plan', detail: 'Day-by-day, hotel options, and a clear from-price.' },
      { title: 'You travel', detail: 'Chauffeur, guides, and a named contact while you are in India.' },
    ],
  },
];

export function getTour(slug: string): Tour | undefined {
  return TOURS.find((tour) => tour.slug === slug);
}
