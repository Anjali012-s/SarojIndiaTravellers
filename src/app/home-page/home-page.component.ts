import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DESTINATIONS } from '../data/destinations';
import { FLEET_OPTIONS, GUIDE_LANGUAGES, SITE, STAY_OPTIONS, whatsappUrl } from '../data/site';
import { TOURS } from '../data/tours';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  imports: [RouterLink],
})
export class HomePageComponent {
  site = SITE;
  fleet = FLEET_OPTIONS;
  guideLanguages = GUIDE_LANGUAGES;
  stays = STAY_OPTIONS;
  places = DESTINATIONS.filter((place) =>
    [
      'golden-triangle',
      'rajasthan',
      'char-dham',
      'kerala',
      'ajanta-ellora',
      'monumental-india',
      'nature-india',
      'himalaya-kashmir-ladakh',
    ].includes(place.slug)
  );
  tours = TOURS.filter((tour) => tour.featured);
  wa = whatsappUrl('Hello Saroj India Tours — I would like a private itinerary quote.');
  hero =
    'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1800&q=80';

  styles = [
    {
      title: 'Heritage & palaces',
      text: 'Delhi, Agra, Jaipur and the Rajasthan circuit — licensed guides, hotels you choose, sedan, SUV/MUV or coach to match the group.',
    },
    {
      title: 'Sedan, SUV/MUV & coaches',
      text: 'Chauffeur-driven sedan or SUV/MUV for couples and small families. Coaches for larger groups. Quoted from Delhi, placed across India — still your party only.',
    },
    {
      title: 'Wildlife add-on',
      text: 'Ranthambore or Corbett attached to the Triangle. We handle park permits when you confirm dates.',
    },
    {
      title: 'Spiritual North',
      text: 'Varanasi dawn boat and aarti; Amritsar on request. Paced for families and first-time visitors.',
    },
    {
      title: 'Char Dham & Jyotirlinga',
      text: 'Kedarnath, Two Dham, Chota Char Dham, Buddha Circuit and the twelve Jyotirlingas as three bookable circuits.',
    },
    {
      title: 'South with a partner',
      text: 'Kerala houseboat and tea hills with a local ground partner — we stay accountable as your single desk.',
    },
    {
      title: 'All over India',
      text: 'Kashmir and Ladakh, Himachal, Gujarat and Goa, Khajuraho and tiger parks, Kolkata, Odisha, the Northeast, Tamil Nadu, Karnataka, Andaman, and pan-India Char Dham — quoted from Delhi, partner-run where we do not staff the ground.',
    },
    {
      title: 'Monumental India',
      text: 'Ajanta–Ellora, Hampi, Khajuraho, Mahabalipuram, Konark, Sanchi and Fatehpur Sikri — cave, stupa and temple circuits for travellers who come for stone.',
    },
    {
      title: 'Nature & hills',
      text: 'Spiti, Kumaon, Valley of Flowers, Western Ghats, Rishikesh river days, Meghalaya and the Sundarbans — seasonal, permit-aware, not a fake “always open” list.',
    },
  ];

  steps = [
    { n: '01', title: 'Tell us the brief', text: 'Dates, travellers, vehicle, stay band, guide language, must-sees, and anything we should not plan.' },
    { n: '02', title: 'Receive a plan', text: 'Same working day: day-by-day, hotel options, inclusions, and a written quote for your dates.' },
    { n: '03', title: 'Travel with a named desk', text: 'Chauffeur, guides, airport welcome, and WhatsApp while you are in India.' },
  ];

  constructor(title: Title) {
    title.setTitle('Saroj India Tours | Private India journeys from Delhi');
  }
}
