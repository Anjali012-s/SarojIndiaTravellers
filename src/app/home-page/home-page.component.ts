import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { SITE, whatsappUrl } from '../data/site';
import { TOURS } from '../data/tours';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  imports: [RouterLink, CurrencyPipe],
})
export class HomePageComponent {
  site = SITE;
  tours = TOURS.filter((tour) => tour.slug !== 'custom-india');
  wa = whatsappUrl('Hello Saroj India Tours — I would like a private itinerary quote.');
  hero =
    'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1800&q=80';

  styles = [
    {
      title: 'Heritage & palaces',
      text: 'Delhi, Agra, Jaipur and the Rajasthan circuit — private car, licensed guides, hotels you choose.',
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
      title: 'South with a partner',
      text: 'Kerala houseboat and tea hills with a local ground partner — we stay accountable as your single desk.',
    },
  ];

  steps = [
    { n: '01', title: 'Tell us the brief', text: 'Dates, travellers, hotel band, must-sees, and anything we should not plan.' },
    { n: '02', title: 'Receive a plan', text: 'Same working day: day-by-day, hotel options, inclusions, and a from-price in USD and INR.' },
    { n: '03', title: 'Travel with a named desk', text: 'Chauffeur, guides, airport welcome, and WhatsApp while you are in India.' },
  ];

  constructor(title: Title) {
    title.setTitle('Saroj India Tours | Private India journeys from Delhi');
  }
}
