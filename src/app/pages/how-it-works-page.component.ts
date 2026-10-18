import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { SITE, whatsappUrl } from '../data/site';

@Component({
  selector: 'app-how-it-works-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="section">
      <div class="wrap" style="max-width: 44rem">
        <p class="eyebrow">Booking</p>
        <h1>How a Saroj trip is booked</h1>
        <p>
          No online cart. You send a brief, we send a written plan, you pay a deposit when the hotels and (if needed)
          safari permits can actually be held.
        </p>
        <ol class="list">
          <li><strong>Brief</strong> — dates, names, vehicle, stay band, guide language, must-sees, mobility or diet. WhatsApp or the form.</li>
          <li><strong>Plan</strong> — {{ site.quoteSla }}. Day-by-day, hotel options, inclusions, and a written quote.</li>
          <li><strong>Deposit</strong> — {{ site.deposit }}.</li>
          <li><strong>Vouchers</strong> — hotels, chauffeur, guides, and your named Delhi number before you fly.</li>
          <li><strong>On tour</strong> — airport welcome, WhatsApp desk, changes quoted in writing if they cost money.</li>
        </ol>
        <div class="hero-actions">
          <a class="btn" routerLink="/custom">Send a brief</a>
          <a class="btn btn-ghost" [href]="wa" target="_blank" rel="noopener">WhatsApp</a>
        </div>

        <h2 style="margin-top: 2.5rem">Questions people ask before they pay</h2>
        @for (item of faqs; track item.q) {
          <h3>{{ item.q }}</h3>
          <p>{{ item.a }}</p>
        }
      </div>
    </section>
  `,
})
export class HowItWorksPageComponent {
  site = SITE;
  wa = whatsappUrl('Hello Saroj India Tours — I have a question about how booking works.');
  faqs = [
    {
      q: 'What vehicles do you offer?',
      a: 'Sedan, SUV/MUV and coaches across India. Couples and small families usually take a sedan or SUV/MUV with a chauffeur. Larger parties — families, schools, corporates, wedding guests, pilgrimage groups — take a coach booked for your names. Safari jeeps in parks follow park rules (often shared).',
    },
    {
      q: 'Can we choose the guide language?',
      a: 'Yes. English and Hindi on the Delhi desk. At monuments and in cities we arrange a licensed guide in the language you name (French, German, Spanish, Italian, Russian, Japanese, Mandarin, Arabic and others). We confirm that guide before you pay a deposit. If a language cannot be staffed for your dates and cities, we say so in the quote.',
    },
    {
      q: 'What kind of stay can we opt?',
      a: 'You choose the band: 3-star comfortable, 4-star, 5-star and heritage palaces, or a mix. Where the route needs it we add a Kerala houseboat, jungle lodge or desert camp. Hotels are options until you approve the quote — we do not hold a palace we cannot actually book.',
    },
    {
      q: 'Do you have offices in Nepal, Bhutan and Sri Lanka?',
      a: 'No. We plan from Delhi. Those countries, and far Indian circuits, are quoted with named partners. You still have one WhatsApp number.',
    },
    {
      q: 'Are the website itineraries a fixed invoice?',
      a: 'No. Pages show the route and what we typically include. Your emailed quote is the price, matching hotel class, season, group size and extras such as helicopter.',
    },
    {
      q: 'What if a hotel or park is full?',
      a: 'We say so in the quote and offer the next available standard. We do not confirm inventory we do not hold.',
    },
    {
      q: 'Cancellation?',
      a: 'Hotel and park rules differ. The proposal you approve will state the scale. Unspent, recoverable supplier money is refunded; our planning fee after documents are issued is not.',
    },
    {
      q: 'Insurance and visas?',
      a: 'You arrange travel insurance and the Indian visa/e-visa. We send a letter of invitation for the itinerary we have confirmed.',
    },
  ];

  constructor(title: Title) {
    title.setTitle('How booking works | Saroj India Tours');
  }
}
