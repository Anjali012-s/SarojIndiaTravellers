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
          <li><strong>Brief</strong> — dates, names, hotel band, must-sees, mobility or diet. WhatsApp or the form.</li>
          <li><strong>Plan</strong> — {{ site.quoteSla }}. Day-by-day, hotel options, inclusions, from-price in USD and INR.</li>
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
      q: 'Is this a group coach tour?',
      a: 'No. Private car and chauffeur. Guides at monuments. You are not pooled with other parties unless you ask for a shared safari jeep in the park.',
    },
    {
      q: 'Do you have offices in Nepal, Bhutan and Sri Lanka?',
      a: 'No. We plan from Delhi. Those countries, and far Indian circuits, are quoted with named partners. You still have one WhatsApp number.',
    },
    {
      q: 'Are the website prices the final invoice?',
      a: 'They are from-prices for two adults sharing, 4-star band, quieter season. Festival dates, 5-star palaces, and peak safaris re-quote.',
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
