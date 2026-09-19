export interface Destination {
  slug: string;
  name: string;
  hero: string;
  searchPhrase: string;
  summary: string;
  bestSeason: string;
  relatedTourSlugs: string[];
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
    relatedTourSlugs: ['golden-triangle', 'taj-and-tigers'],
  },
  {
    slug: 'rajasthan',
    name: 'Rajasthan',
    hero: 'https://images.unsplash.com/photo-1477587458883-47145f52685a?auto=format&fit=crop&w=1600&q=80',
    searchPhrase: 'Private Rajasthan itinerary',
    summary:
      'Jaipur, Jodhpur, Udaipur and optional Jaisalmer. Palace hotels, forts and desert light — built as a 8–12 day private circuit, not a coach dash.',
    bestSeason: 'October–March. April–June is hot; we shorten outdoor blocks and use heritage hotels with pools.',
    relatedTourSlugs: ['royal-rajasthan', 'golden-triangle'],
  },
  {
    slug: 'wildlife',
    name: 'Taj & tigers',
    hero: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?auto=format&fit=crop&w=1600&q=80',
    searchPhrase: 'Ranthambore safari with Golden Triangle',
    summary:
      'Two game drives in Ranthambore attached to the Triangle. Permits are date-specific; we only confirm safari slots after you approve the quote.',
    bestSeason: 'October–June (park calendar). Monsoon closures vary by zone.',
    relatedTourSlugs: ['taj-and-tigers'],
  },
  {
    slug: 'varanasi',
    name: 'Varanasi & spiritual North',
    hero: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1600&q=80',
    searchPhrase: 'Varanasi private tour from Delhi',
    summary:
      'Dawn boat on the Ganges, evening aarti, optional Sarnath and Amritsar. Suited to diaspora families and first-timers who want one sacred city done properly.',
    bestSeason: 'October–March. Summer dawns are still workable; we avoid midday walking.',
    relatedTourSlugs: ['spiritual-north'],
  },
  {
    slug: 'kerala',
    name: 'Kerala',
    hero: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=80',
    searchPhrase: 'Kerala backwaters private tour',
    summary:
      'Kochi, Munnar tea hills and an overnight houseboat. We remain your Delhi desk; a Kerala partner runs the cars and boat to the same written inclusions.',
    bestSeason: 'November–February; monsoon (June–September) is lush and quieter, with more indoor time.',
    relatedTourSlugs: ['kerala-backwaters', 'custom-india'],
  },
];

export function getDestination(slug: string): Destination | undefined {
  return DESTINATIONS.find((item) => item.slug === slug);
}
