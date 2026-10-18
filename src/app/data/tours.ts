import { ALL_INDIA_TOURS } from './tours-all-india';
import { THEMATIC_TOURS } from './tours-thematic';
import type { JourneyTheme } from './themes';
export type { JourneyTheme } from './themes';
export { JOURNEY_THEMES, tourThemes } from './themes';

export interface TourDay {
  title: string;
  detail: string;
}

export const TOUR_ZONES = [
  'North',
  'Himalaya',
  'West',
  'Central',
  'East',
  'Northeast',
  'South',
  'Islands',
  'Pan-India',
] as const;

export type TourZone = (typeof TOUR_ZONES)[number];

export interface Tour {
  slug: string;
  name: string;
  region: string;
  zone: TourZone;
  duration: string;
  nights: number;
  days: number;
  hero: string;
  summary: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  notes?: string[];
  bestFor: string;
  itinerary: TourDay[];
  featured?: boolean;
  themes?: JourneyTheme[];
}

export const TOURS: Tour[] = [
  {
    slug: 'golden-triangle',
    name: 'Golden Triangle Classic',
    region: 'Delhi · Agra · Jaipur',
    zone: 'North',
    duration: '6 days / 5 nights',
    nights: 5,
    days: 6,
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
    featured: true,
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
    zone: 'North',
    duration: '8 days / 7 nights',
    nights: 7,
    days: 8,
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
    featured: true,
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
    zone: 'West',
    duration: '10 days / 9 nights',
    nights: 9,
    days: 10,
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
    featured: true,
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
    zone: 'North',
    duration: '7 days / 6 nights',
    nights: 6,
    days: 7,
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
    featured: true,
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
    zone: 'South',
    duration: '7 days / 6 nights',
    nights: 6,
    days: 7,
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
    featured: true,
    bestFor: 'Honeymoons and winter-sun travellers',
    itinerary: [
      { title: 'Day 1–2 — Kochi', detail: 'Arrive Kochi. Fort Kochi, synagogue, Chinese fishing nets.' },
      { title: 'Day 3–4 — Munnar', detail: 'Drive to the tea hills. Estate walk and valley views.' },
      { title: 'Day 5 — Houseboat', detail: 'Alleppey backwaters, overnight on a private boat.' },
      { title: 'Day 6–7 — Depart Kochi', detail: 'Short coastal halt if time allows, then airport.' },
    ],
  },
  {
    slug: 'kedarnath-one-dham',
    name: 'One Dham: Kedarnath',
    region: 'Haridwar · Guptkashi · Kedarnath',
    zone: 'Himalaya',
    duration: '4 days / 3 nights',
    nights: 3,
    days: 4,
    featured: true,
    hero: 'https://images.unsplash.com/photo-1626621341517-388af02f4d28?auto=format&fit=crop&w=1600&q=80',
    summary:
      'A focused Kedarnath yatra from Haridwar or Rishikesh: Guptkashi, Gaurikund, evening aarti, morning darshan and return. You choose trek, pony/palanquin or helicopter. Temple typically open May–October; we only confirm once opening dates and your registration are clear.',
    highlights: [
      'Starts and ends Haridwar or Rishikesh — station, hotel or Dehradun airport drop as quoted',
      'Scenic drive via Rishikesh, Devprayag and Rudraprayag',
      'Evening aarti at Kedarnath and early morning darshan before descent',
      'Trek (~16 km from Gaurikund), pony/palanquin or helicopter from the Phata / Sersi / Guptkashi side — chosen before we quote',
    ],
    inclusions: [
      'Private air-conditioned car Haridwar/Rishikesh–Guptkashi–Sonprayag/Gaurikund and return',
      '3 nights: two in Guptkashi (or nearby), one in Kedarnath in the category you approve',
      'Breakfast daily; driver allowance, tolls, parking and state taxes on the car',
      'Help with Uttarakhand Char Dham registration where required',
      'Named Delhi WhatsApp desk while you travel',
    ],
    exclusions: [
      'Helicopter tickets, pony, palanquin, porter and extra night if weather closes the trail',
      'Temple donations, VIP darshan and special puja',
      'Lunches, dinners, oxygen cans and personal trekking gear',
      'Travel insurance and any medical evacuation',
    ],
    notes: [
      'Kedarnath sits around 3,583 m. Elders and anyone with heart or lung issues should tell us before we plan helicopter vs trek.',
      'Road time is 8–10 hours each way in season; landslides can add hours. We keep a buffer in the drop time where we can.',
      'Guptkashi/Sitapur hotels are simpler than city 4-stars. We send options, not a surprise on arrival.',
      'Helicopter is weather-dependent and often a separate operator ticket. We never treat a seat as confirmed until the operator issues it.',
    ],
    bestFor: 'Pilgrims with four days who want Kedarnath done properly',
    itinerary: [
      {
        title: 'Day 1 — Haridwar to Guptkashi',
        detail:
          'Pick-up in Haridwar or Rishikesh (hotel, station or, by arrangement, Dehradun airport). Drive about 9 hours along the Ganga and Mandakini via Rishikesh, Devprayag (Bhagirathi–Alaknanda sangam) and Rudraprayag. Short tea and lunch stops as the road allows. Check in at Guptkashi or Sitapur. Evening free; optional visit to the ancient Vishwanath temple in Guptkashi if you arrive in light. Overnight Guptkashi.',
      },
      {
        title: 'Day 2 — Guptkashi to Kedarnath',
        detail:
          'Very early start. Drive to Sonprayag, then local jeep (where running) on to Gaurikund. From Gaurikund the trail to Kedarnath is about 16 km: walk, hire a pony or palanquin, or use the helicopter sector if that is on your quote (reporting time is given the evening before). Arrive, rest, and attend evening aarti at the temple. Overnight in a Kedarnath lodge or camp as booked — rooms are basic at this height.',
      },
      {
        title: 'Day 3 — Darshan and return to Guptkashi',
        detail:
          'Early morning darshan when the queue is shorter. Time at the temple courtyard, then descend the same way you came (trek, pony or return helicopter). Meet the car at Gaurikund/Sonprayag and drive back to Guptkashi. Rest, hot shower, and an easier night at lower altitude. Overnight Guptkashi.',
      },
      {
        title: 'Day 4 — Guptkashi to Haridwar or Rishikesh',
        detail:
          'After breakfast, drive about 8–9 hours to Haridwar or Rishikesh. Drop at the hotel, station or airport as listed on your voucher. If your train or flight is late evening, we can add a day-use room on request.',
      },
    ],
  },
  {
    slug: 'kedarnath-badrinath-two-dham',
    name: 'Two Dham: Kedarnath & Badrinath',
    region: 'Haridwar · Kedarnath · Badrinath · Rishikesh',
    zone: 'Himalaya',
    duration: '7 days / 6 nights',
    nights: 6,
    days: 7,
    hero: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80',
    summary:
      'Kedarnath and Badrinath in one private circuit from Haridwar or Rishikesh, with Mana village, Tapt Kund and the Alaknanda road. Long Himalayan driving days, paced with overnights in Guptkashi and Badrinath. Typical season May–October.',
    highlights: [
      'Kedarnath evening aarti and morning darshan',
      'Badrinath temple, Tapt Kund hot springs',
      'Mana village — Vyas Gufa, Bhim Pul and Vasudhara viewpoint',
      'Road via Chopta, Chamoli, Joshimath, Vishnuprayag and Devprayag',
    ],
    inclusions: [
      'Private car throughout, including Guptkashi–Badrinath and Badrinath–Rishikesh',
      '6 nights as listed (Guptkashi, Kedarnath, Badrinath/Joshimath, Rishikesh) with breakfast',
      'Driver allowance, tolls, parking',
      'Char Dham registration assistance where required',
      'On-tour WhatsApp desk',
    ],
    exclusions: [
      'Helicopter, pony, palanquin and porter for Kedarnath',
      'Temple donations and special puja',
      'Meals other than breakfast',
      'Travel insurance and inner-line or extra permits if a side valley is added',
    ],
    notes: [
      'Two high dhams in seven days means two 8–10 hour road days. We do not squeeze Yamunotri and Gangotri into this file.',
      'If elders prefer not to sleep at Kedarnath altitude, we can quote same-day helicopter darshan from Guptkashi instead of the overnight.',
      'Badrinath town hotels fill in peak yatra. Confirm dates early if you want a specific property.',
      'Vasudhara walk from Mana is weather- and fitness-dependent; we treat it as a viewpoint attempt, not a guaranteed trek.',
    ],
    bestFor: 'Families and elders who want both Himalayan dhams without Yamunotri and Gangotri',
    itinerary: [
      {
        title: 'Day 1 — Haridwar to Guptkashi',
        detail:
          'Pick-up in Haridwar or Rishikesh. Full-day drive along the Ganga and then the Mandakini via Devprayag and Rudraprayag (about 9 hours). Overnight Guptkashi or Sitapur. Rest and yatra briefing: trek vs helicopter for the next morning.',
      },
      {
        title: 'Day 2 — Guptkashi to Kedarnath',
        detail:
          'Early drive to Sonprayag and Gaurikund. Trek, pony/palanquin or helicopter to Kedarnath (about 16 km on foot if walking). Check in, rest, evening aarti. Overnight Kedarnath.',
      },
      {
        title: 'Day 3 — Kedarnath darshan, return to Guptkashi',
        detail:
          'Morning darshan. Descend to Gaurikund, meet the car, drive to Guptkashi. Overnight at more comfortable altitude. Pack for the Badrinath road the next day.',
      },
      {
        title: 'Day 4 — Guptkashi to Badrinath',
        detail:
          'About 8–9 hours via Chopta (optional short halt if timing allows), Chamoli and Joshimath. The last stretch climbs beside the Alaknanda. Evening visit to Badrinath temple and Tapt Kund if you arrive before closing. Overnight Badrinath.',
      },
      {
        title: 'Day 5 — Badrinath darshan and Mana',
        detail:
          'Morning darshan at Badrinath. Short drive to Mana, the last Indian village on this road: Vyas Gufa, Ganesh Gufa, Bhim Pul over the Saraswati, and a look toward Vasudhara if weather and walking ability allow. Return for a second night in Badrinath, or drop to Joshimath if you prefer a lower hotel — say so when we quote.',
      },
      {
        title: 'Day 6 — Badrinath to Rishikesh',
        detail:
          'Long descent, about 10 hours, along the Alaknanda. Photo stops at Vishnuprayag and Devprayag if the road is moving. Overnight Rishikesh, river-facing if that hotel band is on your quote.',
      },
      {
        title: 'Day 7 — Rishikesh to Haridwar',
        detail:
          'Optional morning: Triveni Ghat, a short Ganga aarti if it fits your departure, or a temple halt in Haridwar. Drop at the station, hotel or airport. Buffer the train — mountain delays do happen on day 6.',
      },
    ],
  },
  {
    slug: 'chota-char-dham',
    name: 'Four Dham: Chota Char Dham',
    region: 'Yamunotri · Gangotri · Kedarnath · Badrinath',
    zone: 'Himalaya',
    duration: '11 days / 10 nights',
    nights: 10,
    days: 11,
    featured: true,
    hero: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1600&q=80',
    summary:
      'The Uttarakhand Char Dham from Haridwar: Yamunotri, Gangotri, Kedarnath and Badrinath in one private car. Long mountain days; trek or helicopter only where the trail requires it. Temples are seasonal — we quote only when the dhams are scheduled to be open for your dates.',
    highlights: [
      'All four Himalayan dhams in the usual yatra order',
      'Yamunotri: 5–6 km trail from Janki Chatti, pony or palanquin available',
      'Gangotri darshan as a day trip from Uttarkashi, plus Vishwanath Temple in town',
      'Kedarnath overnight with aarti; Badrinath with Mana village',
    ],
    inclusions: [
      'Private car from Haridwar and back for 11 days',
      '10 nights hotels/guesthouses with breakfast in the band you approve',
      'Driver allowances, tolls, parking, local jeeps where the last road is restricted (e.g. toward Gaurikund)',
      'Char Dham yatra registration assistance',
      'Named Delhi desk on WhatsApp',
    ],
    exclusions: [
      'Pony, palanquin, porter and Kedarnath helicopter',
      'Temple donations, special puja and VIP lines',
      'Lunches and dinners (mountain towns have simple kitchens; we can MAP on request)',
      'Travel insurance',
    ],
    notes: [
      'This is the Chota Char Dham of Uttarakhand, not the pan-India circuit of Badrinath, Dwarka, Puri and Rameswaram. That 15–20 day tour is quoted separately with flights or trains between regions.',
      'Opening dates differ slightly each year. We will not hold this itinerary for winter when Kedarnath and Yamunotri are closed.',
      'Expect several 8–10 hour drives. Families with small children or limited walking should tell us so we can add rest nights or helicopter on Kedarnath.',
      'Uttarakhand often requires online yatra registration; we share the link and check names against the voucher.',
    ],
    bestFor: 'Pilgrim families with 11 days who want the complete Uttarakhand Char Dham',
    itinerary: [
      {
        title: 'Day 1 — Haridwar to Barkot',
        detail:
          'Pick-up in Haridwar. Drive about 8–9 hours via Dehradun and Mussoorie toward Yamuna valley. Halt for lunch. Check in at Barkot. Overnight Barkot — rest for the Yamunotri trail.',
      },
      {
        title: 'Day 2 — Yamunotri',
        detail:
          'Drive to Janki Chatti. Trek about 5–6 km to Yamunotri (pony or palanquin available; the trail is steep in places). Darshan at the Yamuna temple, bath in Surya Kund if you wish and if it is running. Return the same way to Janki Chatti and Barkot. Overnight Barkot.',
      },
      {
        title: 'Day 3 — Barkot to Uttarkashi',
        detail:
          'About 4 hours toward the Bhagirathi valley. Check in at Uttarkashi. Visit the Vishwanath Temple. Evening free on the riverfront. Overnight Uttarkashi.',
      },
      {
        title: 'Day 4 — Gangotri',
        detail:
          'Day trip: about 3–4 hours each way to Gangotri. Darshan at the Ganga temple, time at the river, packed or simple lunch. Return to Uttarkashi the same evening. Overnight Uttarkashi. (Harsil halt can be added if you want a slower Gangotri night — say so when we quote.)',
      },
      {
        title: 'Day 5 — Uttarkashi to Guptkashi',
        detail:
          'The long cross-over, about 9–10 hours via Tehri and Ghansali toward the Mandakini. Overnight Guptkashi or Sitapur, positioned for Kedarnath.',
      },
      {
        title: 'Day 6 — Guptkashi to Kedarnath',
        detail:
          'Early drive to Sonprayag and Gaurikund. Trek (~16 km), pony/palanquin or helicopter to Kedarnath. Evening aarti. Overnight Kedarnath.',
      },
      {
        title: 'Day 7 — Kedarnath darshan, return to Guptkashi',
        detail:
          'Morning darshan, descend, meet the car, drive to Guptkashi. Overnight Guptkashi.',
      },
      {
        title: 'Day 8 — Guptkashi to Badrinath',
        detail:
          'Drive via Chopta and Joshimath (about 8–9 hours). Evening darshan at Badrinath if the temple is still open. Overnight Badrinath.',
      },
      {
        title: 'Day 9 — Badrinath and Mana',
        detail:
          'Morning darshan. Mana village, Vyas Gufa, Bhim Pul, Vasudhara viewpoint if weather allows. Second night in Badrinath or drop to Joshimath.',
      },
      {
        title: 'Day 10 — Badrinath to Rishikesh',
        detail:
          'Full-day drive down the Alaknanda, with Vishnuprayag and Devprayag on the way. Overnight Rishikesh.',
      },
      {
        title: 'Day 11 — Rishikesh to Haridwar',
        detail:
          'Optional short Ganga aarti or temple halt, then drop at the station or airport. Keep evening flights only if day 10 ran on time.',
      },
    ],
  },
  {
    slug: 'buddha-circuit',
    name: 'Buddha Circuit',
    region: 'Varanasi · Bodh Gaya · Rajgir · Kushinagar · Sravasti',
    zone: 'East',
    duration: '8 days / 7 nights',
    nights: 7,
    days: 8,
    featured: true,
    hero: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1600&q=80',
    summary:
      'The Buddhist trail from Varanasi to Lucknow: Sarnath, Bodh Gaya, Rajgir, Nalanda, Vaishali, Kushinagar and Sravasti. Private car, monastery time, optional Lumbini extension into Nepal. Built for pilgrims and study groups, not a checklist dash.',
    highlights: [
      'Sarnath: Dhamek Stupa, Mulagandhakuti Vihar, museum and the first-sermon site',
      'Two nights at Bodh Gaya — Mahabodhi Temple, Bodhi Tree, monasteries, Sujata Village',
      'Rajgir (Vulture Peak, Venuvana, Vishwa Shanti Stupa) and Nalanda University ruins',
      'Vaishali Ashokan pillar; Kushinagar Mahaparinirvana; Jetavana at Sravasti',
    ],
    inclusions: [
      'Private car Varanasi–Bodh Gaya–Rajgir–Patna–Vaishali–Kushinagar–Sravasti–Lucknow',
      '7 nights hotels with breakfast',
      'Local guides at Sarnath, Bodh Gaya and Nalanda as quoted',
      'Ganga aarti evening in Varanasi (ghat seating as available)',
      'Monument and site tickets listed on the voucher',
    ],
    exclusions: [
      'International flights into Varanasi or out of Lucknow',
      'Nepal visa, Lumbini hotels and the border crossing (quoted as an add-on)',
      'Temple donations and optional pujas',
      'Lunches and dinners unless MAP is requested',
    ],
    notes: [
      'Starts Varanasi, ends Lucknow. Do not book a same-day international departure from Lucknow after the Sravasti morning — keep a buffer or an extra night.',
      'Lumbini (Nepal) adds 1–2 days from Kushinagar or Sravasti. Foreign guests must check Nepal visa rules before we hold that extension.',
      'Summer on the Gangetic plain is hot; we start temple visits early. October–March is the kinder window.',
      'Photography rules differ at Mahabodhi and inside some monasteries; your guide will say where cameras stop.',
    ],
    bestFor: 'Buddhist pilgrims, study groups and first-time visitors to the Gangetic circuit',
    itinerary: [
      {
        title: 'Day 1 — Arrive Varanasi',
        detail:
          'Airport or station transfer and check-in. Rest. Toward evening, walk or rickshaw to Dashashwamedh Ghat for Ganga aarti. Overnight Varanasi.',
      },
      {
        title: 'Day 2 — Sarnath and Varanasi',
        detail:
          'Morning at Sarnath: Dhamek Stupa, Mulagandhakuti Vihar, the archaeological museum and the park where the first sermon is remembered. Afternoon in the old city — Kashi Vishwanath (security line, no large bags) and time on the ghats. Overnight Varanasi.',
      },
      {
        title: 'Day 3 — Varanasi to Bodh Gaya',
        detail:
          'Road about 5–6 hours via the Ganga plain (route depends on works). Check in at Bodh Gaya. Evening at the Mahabodhi Temple complex when the lamps are lit. Overnight Bodh Gaya.',
      },
      {
        title: 'Day 4 — Bodh Gaya',
        detail:
          'Full day: Mahabodhi Temple and the Bodhi Tree, Great Buddha Statue, a selection of international monasteries (Thai, Japanese, Bhutanese or Tibetan as open), and Sujata Village across the river. Meditation time is built in if you want it unhurried. Overnight Bodh Gaya.',
      },
      {
        title: 'Day 5 — Rajgir, Nalanda and Patna',
        detail:
          'Drive to Rajgir: Griddhakuta (Vulture Peak — ropeway if running), Venuvana and the Vishwa Shanti Stupa. Continue to the Nalanda University ruins with a local guide. On to Patna for the night. Overnight Patna.',
      },
      {
        title: 'Day 6 — Vaishali and Kushinagar',
        detail:
          'About 7–8 hours with a halt at Vaishali for the Ashokan Pillar and relic stupa. Continue to Kushinagar. Evening at the Mahaparinirvana Temple if you arrive in light. Overnight Kushinagar.',
      },
      {
        title: 'Day 7 — Kushinagar to Sravasti',
        detail:
          'Morning at the Mahaparinirvana Temple, Ramabhar Stupa and Matha Kuar shrine. Afternoon drive about 6 hours to Sravasti. Overnight Sravasti.',
      },
      {
        title: 'Day 8 — Sravasti to Lucknow',
        detail:
          'Jetavana Monastery and the Anandabodhi Tree, then about 4–5 hours to Lucknow. Drop at the airport or station. Optional Lumbini extension is inserted after Kushinagar or Sravasti, not on this last morning.',
      },
    ],
  },
  {
    slug: 'india-spiritual-journey',
    name: 'India Spiritual Journey',
    region: 'Delhi · Haridwar · Rishikesh · Varanasi · Bodh Gaya',
    zone: 'North',
    duration: '9 days / 8 nights',
    nights: 8,
    days: 9,
    hero: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1600&q=80',
    summary:
      'A flexible north-India spiritual template: Delhi, Haridwar aarti, Rishikesh yoga and the Ganga, then Varanasi and Bodh Gaya. You fly out via Gaya. Amritsar, Pushkar, Mathura–Vrindavan or Ayodhya can be swapped in before we lock hotels.',
    highlights: [
      'Har Ki Pauri aarti and Mansa Devi in Haridwar',
      'Two nights in Rishikesh: yoga, Laxman Jhula, Ram Jhula, Beatles Ashram, Triveni Ghat aarti',
      'Sunrise boat on the Ganga and Kashi Vishwanath',
      'Sarnath plus a full day at Mahabodhi Temple',
    ],
    inclusions: [
      'Private car on all road sectors (Delhi–Haridwar–Rishikesh–Dehradun; Varanasi–Sarnath–Bodh Gaya–Gaya)',
      'Domestic flights as listed on the quote (typically Dehradun–Varanasi via Delhi, and Gaya–Delhi)',
      '8 nights hotels with breakfast',
      'One yoga/meditation session in Rishikesh as available',
      'Sunrise boat in Varanasi',
    ],
    exclusions: [
      'International flights',
      'Temple donations, VIP darshan and optional pujas',
      'Swaps to Amritsar, Ayodhya, Pushkar or Mathura–Vrindavan until those nights replace others in writing',
      'Travel insurance',
    ],
    notes: [
      'This is a template. Tell us which city to swap and which to drop so the night count stays honest.',
      'Day 5 is a travel day (road + flight). We do not promise Varanasi aarti that evening if the inbound is late.',
      'Gaya airport is small; evening international connections via Delhi need a realistic layover. We will flag this on the quote.',
      'Akshardham has closing days and ticket windows; Lotus Temple is the quieter alternative if timings fail.',
    ],
    bestFor: 'Wellness travellers and diaspora families who want Ganga, yoga and Bodh Gaya in one trip',
    itinerary: [
      {
        title: 'Day 1 — Arrive Delhi',
        detail:
          'Airport welcome and hotel check-in. Depending on arrival time: Akshardham (ticketed, last entry is early evening) or the Lotus Temple. Overnight Delhi.',
      },
      {
        title: 'Day 2 — Delhi to Haridwar',
        detail:
          'Drive about 5–6 hours via Meerut/Muzaffarnagar or as traffic dictates. Check in. Evening Ganga aarti at Har Ki Pauri — we place you where the crowd is manageable. Overnight Haridwar.',
      },
      {
        title: 'Day 3 — Haridwar to Rishikesh',
        detail:
          'Morning at Mansa Devi (cable car if running, or walk). Short drive to Rishikesh. Check in. Evening aarti at Triveni Ghat. Overnight Rishikesh.',
      },
      {
        title: 'Day 4 — Rishikesh',
        detail:
          'Morning yoga and meditation (ashram or hotel teacher as available). Walk or drive to Laxman Jhula and Ram Jhula, Beatles Ashram (ticketed; closed some days), cafes and the river. Rest before the travel day. Overnight Rishikesh.',
      },
      {
        title: 'Day 5 — Rishikesh to Varanasi',
        detail:
          'Drive to Dehradun airport, fly via Delhi to Varanasi (routing follows the airline we ticket). Transfer to the hotel. Quiet evening if you land late. Overnight Varanasi.',
      },
      {
        title: 'Day 6 — Varanasi',
        detail:
          'Sunrise boat on the Ganga. Breakfast, then Kashi Vishwanath (security queue — travel light). Lanes, optional silk stop, evening aarti. Overnight Varanasi.',
      },
      {
        title: 'Day 7 — Sarnath and Bodh Gaya',
        detail:
          'Morning at Sarnath (stupa, vihar, museum). Drive about 5–6 hours to Bodh Gaya. Evening at Mahabodhi if you arrive in light. Overnight Bodh Gaya.',
      },
      {
        title: 'Day 8 — Bodh Gaya',
        detail:
          'Mahabodhi Temple, sitting time at the Bodhi Tree, Great Buddha Statue and one or two monasteries. Unhurried afternoon. Overnight Bodh Gaya.',
      },
      {
        title: 'Day 9 — Departure',
        detail:
          'Transfer to Gaya airport for the flight to Delhi and your onward international or domestic connection.',
      },
    ],
  },
  {
    slug: 'jyotirlinga-gujarat-mp',
    name: 'Jyotirlinga Circuit A: Gujarat & Madhya Pradesh',
    region: 'Somnath · Dwarka · Omkareshwar · Ujjain',
    zone: 'West',
    duration: '8 days / 7 nights',
    nights: 7,
    days: 8,
    hero: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?auto=format&fit=crop&w=1600&q=80',
    summary:
      'Four Jyotirlingas — Somnath, Nageshwar, Omkareshwar and Mahakaleshwar — with Dwarkadhish and Bet Dwarka. Private ground in Gujarat and Madhya Pradesh. Mahakaleshwar Bhasma aarti needs advance booking; we attempt it once dates are fixed, and we say so if the temple has not confirmed.',
    highlights: [
      'Somnath Temple, Triveni Sangam and Bhalka Tirth',
      'Dwarkadhish evening aarti; Nageshwar Jyotirlinga; Gopi Talav; Bet Dwarka by ferry',
      'Omkareshwar on the Narmada, with a boat parikrama as available',
      'Ujjain: Mahakaleshwar, Kal Bhairav and Harsiddhi',
    ],
    inclusions: [
      'Private car on all road days in Gujarat and Madhya Pradesh',
      '7 nights hotels with breakfast',
      'Ferry to Bet Dwarka as the day’s schedule allows',
      'Bhasma aarti booking attempt once you confirm dates and names',
    ],
    exclusions: [
      'Flights into Rajkot/Diu/Porbandar and onward to Indore unless we ticket them',
      'Temple donations, special puja and skip-the-line services we cannot honestly sell',
      'Bhasma aarti until the temple issues the slot',
      'Travel insurance',
    ],
    notes: [
      'Arrive Rajkot, Diu, Porbandar or Somnath itself — we match the first transfer to your flight.',
      'Bet Dwarka ferries pause in rough sea. We keep Nageshwar on land either way.',
      'Bhasma aarti is pre-dawn. We book an Ujjain hotel that can do a 2–3 a.m. wake-up, not a late nightlife property.',
      'This circuit does not include Kedarnath or Kashi; those sit in Circuit C.',
    ],
    bestFor: 'Jyotirlinga pilgrims starting in Gujarat',
    itinerary: [
      {
        title: 'Day 1 — Arrive toward Somnath',
        detail:
          'Land at Rajkot, Diu, Porbandar or a nearby airport. Drive to Somnath (time depends on the airport). Check in. If you arrive in light, a first look at the sea-facing temple. Overnight Somnath.',
      },
      {
        title: 'Day 2 — Somnath',
        detail:
          'Morning darshan at Somnath. Triveni Sangam where Hiran, Kapila and Saraswati meet the sea. Bhalka Tirth, associated with Krishna’s last leela. Evening aarti if you want a second visit. Overnight Somnath.',
      },
      {
        title: 'Day 3 — Somnath to Dwarka',
        detail:
          'Drive about 5–6 hours along the Saurashtra coast/inland as the road allows. Check in at Dwarka. Evening darshan and aarti at Dwarkadhish. Overnight Dwarka.',
      },
      {
        title: 'Day 4 — Nageshwar and Bet Dwarka',
        detail:
          'Nageshwar Jyotirlinga (short drive). Gopi Talav. Ferry to Bet Dwarka for the Krishna temple on the island; return by boat. Rest in Dwarka. Overnight Dwarka.',
      },
      {
        title: 'Day 5 — Dwarka to Indore',
        detail:
          'Transfer to the airport we ticket (often Rajkot or similar) and fly or travel on to Indore. Check in. Overnight Indore — rest before the Narmada day.',
      },
      {
        title: 'Day 6 — Omkareshwar and Ujjain',
        detail:
          'Drive Indore to Omkareshwar about 2.5–3 hours. Darshan at Omkareshwar Jyotirlinga on Mandhata island; Narmada parikrama by boat if the river is open for it. Continue to Ujjain. Overnight Ujjain.',
      },
      {
        title: 'Day 7 — Ujjain',
        detail:
          'Pre-dawn Mahakaleshwar Bhasma aarti if the temple has confirmed your names. Later: Kal Bhairav and Harsiddhi. Time in the old city if energy remains. Overnight Ujjain.',
      },
      {
        title: 'Day 8 — Departure',
        detail: 'Drive to Indore airport (about 1–1.5 hours) for your onward flight.',
      },
    ],
  },
  {
    slug: 'jyotirlinga-maharashtra-south',
    name: 'Jyotirlinga Circuit B: Maharashtra & South',
    region: 'Nashik · Ellora · Bhimashankar · Srisailam · Rameshwaram',
    zone: 'South',
    duration: '10 days / 9 nights',
    nights: 9,
    days: 10,
    hero: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74216?auto=format&fit=crop&w=1600&q=80',
    summary:
      'Five Jyotirlingas of the Deccan and far south: Trimbakeshwar, Grishneshwar, Bhimashankar, Mallikarjuna (Srisailam) and Rameshwaram, with Ellora, Meenakshi Temple and Dhanushkodi. Mix of road and domestic flights as we ticket.',
    highlights: [
      'Trimbakeshwar, Brahmagiri base and the Godavari ghats in Nashik',
      'Grishneshwar beside the Ellora Caves',
      'Bhimashankar in the Sahyadri; Mallikarjuna and Bhramaramba Devi at Srisailam',
      'Ramanathaswamy Temple (22 theerthams) and Dhanushkodi',
    ],
    inclusions: [
      'Private cars on each road sector (Nashik, Aurangabad, Bhimashankar/Pune, Hyderabad–Srisailam, Madurai–Rameshwaram)',
      '9 nights hotels with breakfast',
      'Domestic flights listed on the quote (typically toward Hyderabad and Madurai)',
      'Temple-town hotels in the category you choose',
    ],
    exclusions: [
      'International flights into Mumbai/Nashik or out of Madurai/Chennai',
      'Shirdi halt unless you ask for it (adds time on day 3)',
      'Temple donations, special abhishekam and paid theertham extras',
      'Travel insurance',
    ],
    notes: [
      'Day 5 (Bhimashankar) is a long mountain drive; we do not add Ajanta the same day.',
      'Srisailam road can close in heavy rain. Monsoon dates need a Hyderabad buffer night.',
      'Rameshwaram theertham bathing is optional and takes time; say if you want the full 22 or a shorter darshan.',
      'Dress codes are strict at Trimbakeshwar and Ramanathaswamy — we send a packing note with the voucher.',
    ],
    bestFor: 'Pilgrims covering the Deccan and Tamil Jyotirlingas',
    itinerary: [
      {
        title: 'Day 1 — Arrive Nashik',
        detail:
          'Airport or station transfer (Mumbai + drive, or Nashik if your flight lands there). Check in and rest. Overnight Nashik.',
      },
      {
        title: 'Day 2 — Trimbakeshwar',
        detail:
          'Drive to Trimbakeshwar (about 30 km). Darshan at the Jyotirlinga, time at the Brahmagiri base, Godavari kund and ghats. Return to Nashik; optional Panchavati if energy remains. Overnight Nashik.',
      },
      {
        title: 'Day 3 — Nashik to Aurangabad',
        detail:
          'Drive to Aurangabad. Optional halt at Shirdi if you want Sai Baba darshan — this stretches the day, so we only add it when you ask. Overnight Aurangabad.',
      },
      {
        title: 'Day 4 — Grishneshwar and Ellora',
        detail:
          'Morning darshan at Grishneshwar, a few minutes from the Ellora Caves. Then Ellora (Kailasa and the main caves you choose). Overnight Aurangabad.',
      },
      {
        title: 'Day 5 — Bhimashankar and Pune',
        detail:
          'Long drive into the Sahyadri to Bhimashankar Jyotirlinga. Darshan, then continue toward Pune. Overnight Pune or a hotel nearer the highway if you prefer not to enter the city late.',
      },
      {
        title: 'Day 6 — Toward Srisailam',
        detail:
          'Fly or travel Pune/Mumbai–Hyderabad as ticketed, then drive about 4–5 hours to Srisailam. Overnight Srisailam.',
      },
      {
        title: 'Day 7 — Mallikarjuna',
        detail:
          'Darshan at Mallikarjuna Jyotirlinga, Bhramaramba Devi Shakti Peetha and Patalaganga on the Krishna. Drive back toward Hyderabad. Overnight Hyderabad (airport-side if the next morning is a flight).',
      },
      {
        title: 'Day 8 — Hyderabad to Madurai',
        detail:
          'Fly to Madurai. Evening at Meenakshi Temple (aarti timing depends on landing). Overnight Madurai.',
      },
      {
        title: 'Day 9 — Rameshwaram',
        detail:
          'Drive about 4 hours to Rameshwaram. Ramanathaswamy Temple — corridor walk and the 22 theerthams if you want the full ritual. Afternoon at Dhanushkodi (road as open). Overnight Rameshwaram.',
      },
      {
        title: 'Day 10 — Departure',
        detail:
          'Drive to Madurai airport (or Tuticorin/Rameswaram connections if that is what we ticket) for your onward flight.',
      },
    ],
  },
  {
    slug: 'jyotirlinga-kashi-kedarnath',
    name: 'Jyotirlinga Circuit C: Kashi, Vaidyanath & Kedarnath',
    region: 'Varanasi · Deoghar · Kedarnath',
    zone: 'Himalaya',
    duration: '9 days / 8 nights',
    nights: 8,
    days: 9,
    hero: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1600&q=80',
    summary:
      'Kashi Vishwanath, then Baidyanath (Deoghar is the default; tell us if you mean Parli in Maharashtra or Baijnath in Himachal), then the seasonal Kedarnath leg. Kedarnath is typically May–October — we will not sell this file for a closed temple.',
    highlights: [
      'Two nights in Varanasi: Ganga aarti, Kashi Vishwanath, boat, Sarnath',
      'Baidyanath darshan at Deoghar unless you name another Vaidyanath before we quote',
      'Kedarnath overnight with evening aarti and morning darshan',
      'Honest note: three places claim Vaidyanath — the quote names which one',
    ],
    inclusions: [
      'Private cars on road days (Varanasi local, Deoghar local, Haridwar–Guptkashi–Gaurikund and return)',
      '8 nights as listed with breakfast',
      'Train or road Varanasi–Deoghar as quoted',
      'Flight Ranchi or Patna–Delhi as quoted (Deoghar airport if it suits your date)',
    ],
    exclusions: [
      'Kedarnath helicopter, pony, palanquin and porter',
      'Temple donations and special puja',
      'Travel insurance',
      'The Kedarnath nights if the temple is closed for winter — we then quote Kashi + Vaidyanath only',
    ],
    notes: [
      'Confirm Vaidyanath in writing: Deoghar (Jharkhand), Parli (Maharashtra) or Baijnath (Himachal). The road and flight change completely.',
      'Shravan in Deoghar is extremely crowded; we add time or a different hotel band if your dates fall then.',
      'Kedarnath altitude and 16 km trail — same fitness notes as the One Dham package.',
      'Do not book this as a December yatra expecting Kedarnath to be open.',
    ],
    bestFor: 'Pilgrims combining Kashi with Kedarnath; book the Himalaya leg in season',
    itinerary: [
      {
        title: 'Day 1 — Arrive Varanasi',
        detail:
          'Transfer and check-in. Evening Ganga aarti at Dashashwamedh. Overnight Varanasi.',
      },
      {
        title: 'Day 2 — Varanasi',
        detail:
          'Sunrise boat. Kashi Vishwanath darshan (Jyotirlinga). Sarnath in the later morning or afternoon. Overnight Varanasi.',
      },
      {
        title: 'Day 3 — Varanasi to Deoghar',
        detail:
          'Train or long road day (we pick what is saner for your date). Check in at Deoghar. Overnight Deoghar.',
      },
      {
        title: 'Day 4 — Baidyanath darshan',
        detail:
          'Morning darshan at Baba Baidyanath. Transfer to Ranchi or Patna (or Deoghar airport) and fly to Delhi. Overnight Delhi — rest before the Himalaya road.',
      },
      {
        title: 'Day 5 — Delhi to Haridwar',
        detail:
          'Drive or train to Haridwar (about 5–6 hours by road). Overnight Haridwar. Optional Har Ki Pauri aarti.',
      },
      {
        title: 'Day 6 — Haridwar to Guptkashi',
        detail:
          'About 9 hours via Rishikesh, Devprayag and Rudraprayag. Overnight Guptkashi.',
      },
      {
        title: 'Day 7 — Guptkashi to Kedarnath',
        detail:
          'Sonprayag, Gaurikund, then trek or helicopter. Evening aarti. Overnight Kedarnath.',
      },
      {
        title: 'Day 8 — Kedarnath darshan, return to Guptkashi',
        detail: 'Morning darshan, descend, drive to Guptkashi. Overnight Guptkashi.',
      },
      {
        title: 'Day 9 — Guptkashi to Haridwar or Rishikesh',
        detail: 'Drive about 8–9 hours. Drop at the station, hotel or airport.',
      },
    ],
  },
  {
    slug: 'twelve-jyotirlinga',
    name: 'Twelve Jyotirlinga Yatra',
    region: 'Three circuits · about 24 nights',
    zone: 'Pan-India',
    duration: 'From 24 nights, or book A / B / C alone',
    nights: 24,
    days: 27,
    hero: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=80',
    summary:
      'All twelve Jyotirlingas as three private circuits you can book together or a year apart: Gujarat–Madhya Pradesh, Maharashtra–South, and Kashi–Vaidyanath–Kedarnath. About 24 nights if run back to back; we re-quote if you split seasons or change Vaidyanath.',
    highlights: [
      'Circuit A (8 days): Somnath, Nageshwar, Mahakaleshwar, Omkareshwar — plus Dwarka',
      'Circuit B (10 days): Trimbakeshwar, Grishneshwar, Bhimashankar, Mallikarjuna, Rameshwaram',
      'Circuit C (9 days): Kashi Vishwanath, Vaidyanath, Kedarnath',
      'Kedarnath only in season (typically May–October)',
    ],
    inclusions: [
      'One planning file or three separate quotes — your choice',
      'Ground, hotels and domestic flights as in Circuits A, B and C',
      'Help with temple-slot attempts (Bhasma aarti, Char Dham registration) once names and dates are fixed',
    ],
    exclusions: [
      'Hotels, flights and temple slots until you approve the written quote',
      'Which Vaidyanath you visit — Deoghar, Parli or Baijnath must be named',
      'Helicopter and pony on the Kedarnath sector',
    ],
    notes: [
      'Back-to-back travel is tiring. Many families do A in winter, B after monsoon, C in May–June or September.',
      'Open each circuit page for the full day-by-day. This page is the map of all twelve.',
      'We will not invent a thirteenth shrine or skip one to make the calendar prettier.',
    ],
    bestFor: 'Serious Jyotirlinga pilgrims with three to four weeks, or families booking circuits a year apart',
    itinerary: [
      {
        title: 'Circuit A — Gujarat and Madhya Pradesh (8 days / 7 nights)',
        detail:
          'Arrive Rajkot or Diu side. Somnath (temple, Triveni Sangam, Bhalka Tirth), drive to Dwarka, Nageshwar and Bet Dwarka, fly or travel to Indore, Omkareshwar and the Narmada, Ujjain for Mahakaleshwar Bhasma aarti, depart Indore. Full days are on the Circuit A page.',
      },
      {
        title: 'Circuit B — Maharashtra and South (10 days / 9 nights)',
        detail:
          'Nashik and Trimbakeshwar, Aurangabad for Grishneshwar and Ellora, Bhimashankar then Pune, fly toward Hyderabad and Srisailam (Mallikarjuna, Bhramaramba Devi), fly to Madurai, Rameshwaram and Dhanushkodi, depart Madurai. Full days on the Circuit B page.',
      },
      {
        title: 'Circuit C — Kashi, Vaidyanath and Kedarnath (9 days / 8 nights)',
        detail:
          'Varanasi (aarti, Kashi Vishwanath, Sarnath), travel to Deoghar for Baidyanath unless you have named Parli or Baijnath, fly to Delhi, Haridwar, Guptkashi, Kedarnath overnight, return to Haridwar or Rishikesh. Seasonal. Full days on the Circuit C page.',
      },
    ],
  },
  ...ALL_INDIA_TOURS,
  ...THEMATIC_TOURS,
  {
    slug: 'custom-india',
    name: 'Custom private India',
    region: 'Your dates · your pace · your hotels',
    zone: 'Pan-India',
    duration: 'From 5 days',
    nights: 4,
    days: 5,
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
      { title: 'We send a plan', detail: 'Day-by-day, hotel options, inclusions, and a written quote for your dates.' },
      { title: 'You travel', detail: 'Chauffeur, guides, and a named contact while you are in India.' },
    ],
  },
];

export function getTour(slug: string): Tour | undefined {
  return TOURS.find((tour) => tour.slug === slug);
}
