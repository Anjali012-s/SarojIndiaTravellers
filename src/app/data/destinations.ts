import { JourneyTheme } from './themes';

export interface Destination {
  slug: string;
  name: string;
  hero: string;
  searchPhrase: string;
  summary: string;
  bestSeason: string;
  relatedTourSlugs: string[];
  themes: JourneyTheme[];
}

export const DESTINATIONS: Destination[] = [
  {
    slug: 'golden-triangle',
    name: 'Golden Triangle',
    hero: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=80',
    searchPhrase: 'Golden Triangle tour from Delhi',
    summary:
      'Delhi, Agra and Jaipur in a private car. The first India circuit most US, UK, Europe and Gulf travellers book — sunrise Taj, Old Delhi, Amber Fort, paced so you are not changing hotels every night.',
    bestSeason: 'October–March; July–September is monsoon and still workable with flexible outdoor time.',
    themes: ['Heritage', 'Monumental'],
    relatedTourSlugs: ['golden-triangle', 'taj-and-tigers', 'unesco-north-monuments'],
  },
  {
    slug: 'rajasthan',
    name: 'Rajasthan',
    hero: 'https://images.unsplash.com/photo-1477587458883-47145f52685a?auto=format&fit=crop&w=1600&q=80',
    searchPhrase: 'Private Rajasthan itinerary',
    summary:
      'Jaipur, Jodhpur, Udaipur and optional Jaisalmer. Palace hotels, forts and desert light — built as a 8–12 day private circuit, not a coach dash.',
    bestSeason: 'October–March. April–June is hot; we shorten outdoor blocks and use heritage hotels with pools.',
    themes: ['Heritage'],
    relatedTourSlugs: ['royal-rajasthan', 'golden-triangle', 'jaisalmer-desert'],
  },
  {
    slug: 'wildlife',
    name: 'Taj & tigers',
    hero: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1600&q=80',
    searchPhrase: 'Ranthambore safari with Golden Triangle',
    summary:
      'Two game drives in Ranthambore attached to the Triangle. Permits are date-specific; we only confirm safari slots after you approve the quote. Corbett, Bandhavgarh, Kanha and Kaziranga are separate wildlife files.',
    bestSeason: 'October–June (park calendar). Monsoon closures vary by zone.',
    themes: ['Wildlife'],
    relatedTourSlugs: ['taj-and-tigers', 'jim-corbett', 'bandhavgarh-kanha', 'kaziranga-assam'],
  },
  {
    slug: 'varanasi',
    name: 'Varanasi & spiritual North',
    hero: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1600&q=80',
    searchPhrase: 'Varanasi private tour from Delhi',
    summary:
      'Dawn boat on the Ganges, evening aarti, optional Sarnath and Amritsar. Suited to diaspora families and first-timers who want one sacred city done properly.',
    bestSeason: 'October–March. Summer dawns are still workable; we avoid midday walking.',
    themes: ['Spiritual'],
    relatedTourSlugs: [
      'spiritual-north',
      'india-spiritual-journey',
      'buddha-circuit',
      'jyotirlinga-kashi-kedarnath',
      'amritsar-golden-temple',
      'lucknow-ayodhya',
    ],
  },
  {
    slug: 'char-dham',
    name: 'Char Dham & Kedarnath',
    hero: 'https://images.unsplash.com/photo-1626621341517-388af02f4d28?auto=format&fit=crop&w=1600&q=80',
    searchPhrase: 'Kedarnath Char Dham tour from Haridwar',
    summary:
      'Private Himalayan yatras from Haridwar or Rishikesh: Kedarnath only, Kedarnath with Badrinath, or the full Chota Char Dham. Temples are seasonal; Kedarnath is typically May–October. Pan-India Char Dham (Badrinath, Dwarka, Puri, Rameswaram) is quoted separately.',
    bestSeason: 'May–October for Kedarnath and the high dhams. Shoulder weeks need buffer days for road and weather.',
    themes: ['Spiritual', 'Himalaya'],
    relatedTourSlugs: [
      'kedarnath-one-dham',
      'kedarnath-badrinath-two-dham',
      'chota-char-dham',
      'pan-india-char-dham',
    ],
  },
  {
    slug: 'buddha-circuit',
    name: 'Buddha Circuit',
    hero: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1600&q=80',
    searchPhrase: 'Buddha circuit tour Varanasi Bodh Gaya',
    summary:
      'Sarnath, Bodh Gaya, Rajgir, Nalanda, Vaishali, Kushinagar and Sravasti, starting in Varanasi and ending in Lucknow. Lumbini in Nepal is an optional 1–2 day add-on; foreign guests check visa rules.',
    bestSeason: 'October–March. Summers are hot on the Gangetic plain; we start temple visits early.',
    themes: ['Spiritual'],
    relatedTourSlugs: ['buddha-circuit', 'india-spiritual-journey'],
  },
  {
    slug: 'jyotirlinga',
    name: 'Twelve Jyotirlinga',
    hero: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?auto=format&fit=crop&w=1600&q=80',
    searchPhrase: 'Twelve Jyotirlinga yatra private tour',
    summary:
      'Sold as three circuits you can book together or a year apart: Gujarat–Madhya Pradesh, Maharashtra–South, and Kashi–Vaidyanath–Kedarnath. Confirm which Vaidyanath you want (Deoghar, Parli or Baijnath) before we quote Circuit C.',
    bestSeason: 'October–March for most temples; Circuit C’s Kedarnath leg is typically May–October.',
    themes: ['Spiritual'],
    relatedTourSlugs: [
      'twelve-jyotirlinga',
      'jyotirlinga-gujarat-mp',
      'jyotirlinga-maharashtra-south',
      'jyotirlinga-kashi-kedarnath',
    ],
  },
  {
    slug: 'kerala',
    name: 'Kerala',
    hero: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=80',
    searchPhrase: 'Kerala backwaters private tour',
    summary:
      'Kochi, Munnar tea hills and an overnight houseboat. We remain your Delhi desk; a Kerala partner runs the cars and boat to the same written inclusions.',
    bestSeason: 'November–February; monsoon (June–September) is lush and quieter, with more indoor time.',
    themes: ['Nature', 'Beaches'],
    relatedTourSlugs: ['kerala-backwaters', 'south-india-grand', 'classic-india-grand', 'western-ghats-nature'],
  },
  {
    slug: 'himalaya-kashmir-ladakh',
    name: 'Kashmir, Ladakh & Himachal',
    hero: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80',
    searchPhrase: 'Kashmir Ladakh Himachal private tour',
    summary:
      'Valley houseboats, high-altitude Ladakh with a proper acclimatisation, Shimla–Manali, and Spiti in season. Quoted from Delhi with a named hill partner on the ground.',
    bestSeason: 'Kashmir April–June and Sep–Oct; Ladakh June–September; Himachal March–June and Sep–Nov; Spiti typically June–October.',
    themes: ['Himalaya', 'Nature'],
    relatedTourSlugs: ['kashmir-valley', 'leh-ladakh', 'shimla-manali', 'spiti-valley'],
  },
  {
    slug: 'goa-west',
    name: 'Goa, Mumbai & Gujarat',
    hero: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1600&q=80',
    searchPhrase: 'Goa Mumbai Gujarat private tour',
    summary:
      'Beach days in Goa, Mumbai with Ajanta–Ellora, and a winter Rann of Kutch. West-coast leisure and heritage, not a cruise-port dash.',
    bestSeason: 'October–March for Goa and Gujarat. Ajanta–Ellora year-round with cave closing days observed.',
    themes: ['Beaches', 'Heritage'],
    relatedTourSlugs: ['goa-beaches', 'mumbai-ajanta-ellora', 'ajanta-ellora-caves', 'rann-of-kutch', 'jyotirlinga-gujarat-mp'],
  },
  {
    slug: 'central-india',
    name: 'Central India',
    hero: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=80',
    searchPhrase: 'Khajuraho Kanha Bandhavgarh tour',
    summary:
      'Khajuraho and Orchha for stone, Sanchi and Mandu for quieter monuments, Bandhavgarh and Kanha for jungle lodges. Easy to attach to a Delhi or Varanasi arrival.',
    bestSeason: 'October–March for temples; October–June for tiger parks (core monsoon closures).',
    themes: ['Monumental', 'Wildlife'],
    relatedTourSlugs: ['khajuraho-orchha', 'bandhavgarh-kanha', 'sanchi-mandu'],
  },
  {
    slug: 'east-india',
    name: 'East India',
    hero: 'https://images.unsplash.com/photo-1558431382-27e303142216?auto=format&fit=crop&w=1600&q=80',
    searchPhrase: 'Kolkata Sundarbans Puri Konark tour',
    summary:
      'Kolkata and the Sundarbans boat, Odisha’s temple triangle, and the eastern Buddhist trail from Varanasi. Jagannath entry rules are explained before you book Puri.',
    bestSeason: 'October–March. Sundarbans boats follow tide and cyclone forecasts.',
    themes: ['Heritage', 'Nature'],
    relatedTourSlugs: ['kolkata-sundarbans', 'odisha-temples', 'buddha-circuit'],
  },
  {
    slug: 'northeast-india',
    name: 'Northeast India',
    hero: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=80',
    searchPhrase: 'Kaziranga Meghalaya Sikkim private tour',
    summary:
      'Kaziranga rhinos, Meghalaya hills and root bridges, Darjeeling and Sikkim. Permits and park seasons are written into the quote. Delhi desk, named local partner.',
    bestSeason: 'November–April for Kaziranga; monsoon is a landscape choice in Meghalaya; Sikkim spring and autumn.',
    themes: ['Nature', 'Wildlife'],
    relatedTourSlugs: ['kaziranga-assam', 'meghalaya', 'darjeeling-sikkim'],
  },
  {
    slug: 'south-india',
    name: 'South India',
    hero: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74216?auto=format&fit=crop&w=1600&q=80',
    searchPhrase: 'South India temple and Kerala tour',
    summary:
      'Tamil Nadu temples, Karnataka’s Hampi and Mysore, Pondicherry coast, Tirupati, Kerala and a longer south grand tour. Partner-run south of the Vindhyas.',
    bestSeason: 'November–March. Tamil summers are hot; Kerala monsoon is lush and wet.',
    themes: ['Spiritual', 'Monumental'],
    relatedTourSlugs: [
      'kerala-backwaters',
      'tamil-nadu-temples',
      'karnataka-hampi-mysore',
      'pondicherry-mahabalipuram',
      'tirupati-darshan',
      'south-india-grand',
      'monumental-south',
    ],
  },
  {
    slug: 'andaman',
    name: 'Andaman Islands',
    hero: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=1600&q=80',
    searchPhrase: 'Andaman Islands private tour',
    summary:
      'Port Blair, Havelock and Neil with ferries ticketed before hotels. A beach finish after a mainland circuit, not a last-minute ferry gamble.',
    bestSeason: 'November–April. Monsoon ferries are unreliable; we add a Port Blair buffer for tight international connections.',
    themes: ['Beaches', 'Nature'],
    relatedTourSlugs: ['andaman-islands'],
  },
  {
    slug: 'monumental-india',
    name: 'Monumental India',
    hero: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1600&q=80',
    searchPhrase: 'UNESCO monuments tour India',
    summary:
      'Cave temples, stupas and living stone: Ajanta–Ellora, Hampi, Khajuraho, Mahabalipuram, Konark, Sanchi, Fatehpur Sikri. Journeys for people who travel for buildings, not checklists.',
    bestSeason: 'October–March for most sites. Cave days year-round if we respect Ajanta Monday and Ellora Tuesday closures.',
    themes: ['Monumental'],
    relatedTourSlugs: [
      'ajanta-ellora-caves',
      'mumbai-ajanta-ellora',
      'deccan-unesco-trail',
      'unesco-north-monuments',
      'monumental-south',
      'khajuraho-orchha',
      'sanchi-mandu',
      'odisha-temples',
      'karnataka-hampi-mysore',
      'pondicherry-mahabalipuram',
    ],
  },
  {
    slug: 'ajanta-ellora',
    name: 'Ajanta & Ellora',
    hero: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1600&q=80',
    searchPhrase: 'Ajanta Ellora private tour from Aurangabad',
    summary:
      'Rock-cut Buddhist, Hindu and Jain caves near Aurangabad. Book the dedicated 4-day cave file, add Mumbai and Elephanta, or continue to Badami–Pattadakal on the Deccan trail.',
    bestSeason: 'October–March is kinder on the Ajanta drive. Caves are open year-round except their weekly closing days.',
    themes: ['Monumental'],
    relatedTourSlugs: ['ajanta-ellora-caves', 'mumbai-ajanta-ellora', 'deccan-unesco-trail', 'jyotirlinga-maharashtra-south'],
  },
  {
    slug: 'hampi',
    name: 'Hampi',
    hero: 'https://images.unsplash.com/photo-1606293926075-69a00dbf44dd?auto=format&fit=crop&w=1600&q=80',
    searchPhrase: 'Hampi private tour',
    summary:
      'Vijayanagara’s boulder landscape: Vitthala, Virupaksha, the royal centre. Two or three nights, not a day trip from Goa. Attach Mysore–Coorg or the monumental south file.',
    bestSeason: 'October–February. March–May is very hot; we start at dawn.',
    themes: ['Monumental', 'Heritage'],
    relatedTourSlugs: ['karnataka-hampi-mysore', 'monumental-south', 'deccan-unesco-trail'],
  },
  {
    slug: 'khajuraho',
    name: 'Khajuraho',
    hero: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=80',
    searchPhrase: 'Khajuraho temple tour',
    summary:
      'Chandela sandstone temples, usually with Orchha and Gwalior. Optional Panna safari. Easy to fly in after Varanasi or after the Triangle.',
    bestSeason: 'October–March. Light is better early and late; midday is museum or rest.',
    themes: ['Monumental'],
    relatedTourSlugs: ['khajuraho-orchha', 'bandhavgarh-kanha'],
  },
  {
    slug: 'mahabalipuram',
    name: 'Mahabalipuram',
    hero: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74216?auto=format&fit=crop&w=1600&q=80',
    searchPhrase: 'Mahabalipuram shore temple tour',
    summary:
      'Pallava shore temples and Rathas south of Chennai, often with Pondicherry or the Chola great living temples at Thanjavur. A monumental coastal halt, not only a beach.',
    bestSeason: 'November–March. Cyclone weeks on the Coromandel are written into the quote if they sit on your dates.',
    themes: ['Monumental', 'Beaches'],
    relatedTourSlugs: ['pondicherry-mahabalipuram', 'monumental-south', 'tamil-nadu-temples'],
  },
  {
    slug: 'konark',
    name: 'Konark & Odisha temples',
    hero: 'https://images.unsplash.com/photo-1558431382-27e303142216?auto=format&fit=crop&w=1600&q=80',
    searchPhrase: 'Konark Sun Temple Puri tour',
    summary:
      'Sun Temple at Konark, Jagannath at Puri, Lingaraja at Bhubaneswar. We explain Jagannath entry rules before you book — we do not promise inner-sanctum access we cannot deliver.',
    bestSeason: 'October–March. Rath Yatra dates need a special operations note if you want Puri then.',
    themes: ['Monumental', 'Spiritual'],
    relatedTourSlugs: ['odisha-temples', 'pan-india-char-dham'],
  },
  {
    slug: 'sanchi-mandu',
    name: 'Sanchi & Mandu',
    hero: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=80',
    searchPhrase: 'Sanchi Mandu private tour',
    summary:
      'The Sanchi stupa, Bhimbetka rock shelters and Mandu’s plateau palaces — quieter monumental central India, hubbed on Bhopal and Indore.',
    bestSeason: 'October–March.',
    themes: ['Monumental'],
    relatedTourSlugs: ['sanchi-mandu', 'khajuraho-orchha'],
  },
  {
    slug: 'nature-india',
    name: 'Nature India',
    hero: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80',
    searchPhrase: 'India nature tours mountains forests',
    summary:
      'Hills, forests, rivers and islands: Kashmir, Spiti, Kumaon, Valley of Flowers, Western Ghats, Meghalaya, Sundarbans, Kerala backwaters. Wildlife parks sit on their own destination page when the brief is tigers or rhinos.',
    bestSeason: 'Varies by range — Himalaya summer and autumn, Ghats winter, Valley of Flowers typically July–September.',
    themes: ['Nature'],
    relatedTourSlugs: [
      'kashmir-valley',
      'spiti-valley',
      'kumaon-hills',
      'valley-of-flowers',
      'western-ghats-nature',
      'nilgiri-hills',
      'rishikesh-ganges',
      'meghalaya',
      'kerala-backwaters',
      'kolkata-sundarbans',
    ],
  },
  {
    slug: 'beaches-india',
    name: 'Beaches & islands',
    hero: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1600&q=80',
    searchPhrase: 'Goa Kerala Andaman beach tour',
    summary:
      'Goa, Kerala coast, Pondicherry–Mahabalipuram, Andaman. Beach time after a heritage circuit, with ferries and monsoon honestly described.',
    bestSeason: 'November–March on most coasts. Andaman ferries are unreliable in monsoon.',
    themes: ['Beaches'],
    relatedTourSlugs: ['goa-beaches', 'kerala-backwaters', 'andaman-islands', 'pondicherry-mahabalipuram'],
  },
  {
    slug: 'jaisalmer',
    name: 'Jaisalmer & Thar desert',
    hero: 'https://images.unsplash.com/photo-1477587458883-47145f52685a?auto=format&fit=crop&w=1600&q=80',
    searchPhrase: 'Jaisalmer desert tour',
    summary:
      'Living fort, havelis and a night in the Thar at Sam or Khuri. Usually attached to Royal Rajasthan; can be flown via Jodhpur.',
    bestSeason: 'October–March. Summer desert camps are a hard sell we will not pretty up.',
    themes: ['Heritage', 'Nature'],
    relatedTourSlugs: ['jaisalmer-desert', 'royal-rajasthan'],
  },
  {
    slug: 'western-ghats',
    name: 'Western Ghats',
    hero: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=80',
    searchPhrase: 'Coorg Wayanad Ooty tour',
    summary:
      'Coffee country, Wayanad forest and the Nilgiris. A nature south that is not only Kerala backwaters.',
    bestSeason: 'October–March for clear views; monsoon is lush and wet.',
    themes: ['Nature'],
    relatedTourSlugs: ['western-ghats-nature', 'nilgiri-hills', 'kerala-backwaters', 'karnataka-hampi-mysore'],
  },
  {
    slug: 'spiti',
    name: 'Spiti Valley',
    hero: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80',
    searchPhrase: 'Spiti Valley private tour',
    summary:
      'Trans-Himalayan villages, Ki and Tabo, Chandrataal when the road is open. Typically June–October. Permits for some sectors depend on nationality — we confirm before deposit.',
    bestSeason: 'June–October. We do not sell closed-pass dates as open.',
    themes: ['Nature', 'Himalaya'],
    relatedTourSlugs: ['spiti-valley', 'shimla-manali'],
  },
  {
    slug: 'kumaon',
    name: 'Kumaon',
    hero: 'https://images.unsplash.com/photo-1626621341517-388af02f4d28?auto=format&fit=crop&w=1600&q=80',
    searchPhrase: 'Nainital Almora Kausani tour',
    summary:
      'Nainital, Mukteshwar, Almora and Kausani — oak forest and lake country. Attach Corbett if you also want a jungle morning.',
    bestSeason: 'March–June and September–November. Monsoon is mist and leeches; we say so.',
    themes: ['Nature', 'Himalaya'],
    relatedTourSlugs: ['kumaon-hills', 'jim-corbett', 'rishikesh-ganges'],
  },
  {
    slug: 'sundarbans',
    name: 'Sundarbans',
    hero: 'https://images.unsplash.com/photo-1558431382-27e303142216?auto=format&fit=crop&w=1600&q=80',
    searchPhrase: 'Sundarbans boat tour from Kolkata',
    summary:
      'Mangrove boat from Kolkata. Tigers are possible, not promised. Tide, cyclone and permit rules sit in the quote.',
    bestSeason: 'October–March. We cancel or reroute on cyclone warnings rather than push a boat.',
    themes: ['Nature', 'Wildlife'],
    relatedTourSlugs: ['kolkata-sundarbans'],
  },
  {
    slug: 'rishikesh',
    name: 'Rishikesh & Ganges',
    hero: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80',
    searchPhrase: 'Rishikesh Ganges private tour',
    summary:
      'River town, aarti and a quieter Ganges than Varanasi. Optional rafting in season or Rajaji. Extend to Char Dham only if you actually want the yatra.',
    bestSeason: 'September–June. Rafting is seasonal; monsoon river days are a different product.',
    themes: ['Nature', 'Spiritual'],
    relatedTourSlugs: ['rishikesh-ganges', 'valley-of-flowers', 'kedarnath-one-dham', 'jim-corbett'],
  },
];

export function getDestination(slug: string): Destination | undefined {
  return DESTINATIONS.find((item) => item.slug === slug);
}
