export const JOURNEY_THEMES = [
  'Monumental',
  'Nature',
  'Wildlife',
  'Spiritual',
  'Heritage',
  'Beaches',
  'Himalaya',
] as const;

export type JourneyTheme = (typeof JOURNEY_THEMES)[number];

/** Fallback themes for published itineraries that do not set `themes` inline. */
export const TOUR_THEME_BY_SLUG: Record<string, JourneyTheme[]> = {
  'golden-triangle': ['Heritage', 'Monumental'],
  'taj-and-tigers': ['Heritage', 'Wildlife'],
  'royal-rajasthan': ['Heritage'],
  'spiritual-north': ['Spiritual'],
  'kerala-backwaters': ['Nature', 'Beaches'],
  'kedarnath-one-dham': ['Spiritual', 'Himalaya'],
  'kedarnath-badrinath-two-dham': ['Spiritual', 'Himalaya'],
  'chota-char-dham': ['Spiritual', 'Himalaya'],
  'buddha-circuit': ['Spiritual'],
  'india-spiritual-journey': ['Spiritual'],
  'jyotirlinga-gujarat-mp': ['Spiritual'],
  'jyotirlinga-maharashtra-south': ['Spiritual', 'Monumental'],
  'jyotirlinga-kashi-kedarnath': ['Spiritual', 'Himalaya'],
  'twelve-jyotirlinga': ['Spiritual'],
  'amritsar-golden-temple': ['Spiritual'],
  'kashmir-valley': ['Nature', 'Himalaya'],
  'leh-ladakh': ['Himalaya', 'Nature'],
  'shimla-manali': ['Himalaya', 'Nature'],
  'jim-corbett': ['Wildlife', 'Nature'],
  'lucknow-ayodhya': ['Spiritual', 'Heritage'],
  'rann-of-kutch': ['Nature', 'Heritage'],
  'mumbai-ajanta-ellora': ['Monumental', 'Heritage'],
  'goa-beaches': ['Beaches'],
  'khajuraho-orchha': ['Monumental'],
  'bandhavgarh-kanha': ['Wildlife'],
  'kolkata-sundarbans': ['Nature', 'Wildlife'],
  'odisha-temples': ['Monumental', 'Spiritual'],
  'kaziranga-assam': ['Wildlife', 'Nature'],
  meghalaya: ['Nature'],
  'darjeeling-sikkim': ['Nature', 'Himalaya'],
  'tamil-nadu-temples': ['Spiritual', 'Monumental'],
  'karnataka-hampi-mysore': ['Monumental', 'Heritage'],
  'pondicherry-mahabalipuram': ['Monumental', 'Beaches'],
  'tirupati-darshan': ['Spiritual'],
  'andaman-islands': ['Beaches', 'Nature'],
  'pan-india-char-dham': ['Spiritual'],
  'classic-india-grand': ['Heritage'],
  'south-india-grand': ['Heritage', 'Spiritual'],
  'custom-india': ['Heritage'],
};

export function tourThemes(tour: { slug: string; themes?: JourneyTheme[] }): JourneyTheme[] {
  if (tour.themes?.length) {
    return tour.themes;
  }
  return TOUR_THEME_BY_SLUG[tour.slug] ?? ['Heritage'];
}
