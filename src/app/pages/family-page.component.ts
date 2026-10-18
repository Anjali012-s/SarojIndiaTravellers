import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { SITE, whatsappUrl } from '../data/site';

@Component({
  selector: 'app-family-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="section">
      <div class="wrap" style="max-width: 44rem">
        <p class="eyebrow">Families · NRIs · wedding guests</p>
        <h1>India with elders, children, and a guest list that lands on three flights.</h1>
        <p>
          This is the work we actually do besides Golden Triangle FIT: reunions, destination-wedding ground handling,
          and multi-generation pace. One desk, extra cars if needed, meals and mobility written into the quote.
        </p>
        <h2>What we arrange</h2>
        <ul class="list">
          <li>Airport name-boards and staggered pickups (Delhi, Jaipur, Udaipur, Kochi)</li>
          <li>Sedan or SUV/MUV for elders, or one coach when the guest list travels together</li>
          <li>Stay band you opt, including kitchens flagged Jain, vegetarian or no-onion in advance</li>
          <li>Licensed guide in the language the family actually speaks</li>
          <li>Wheelchair-aware routing — we say when a fort is not practical</li>
          <li>Guest-list logistics for small palace or haveli weddings (not 500-person MICE)</li>
        </ul>
        <p>{{ site.languages }}.</p>
        <div class="hero-actions">
          <a class="btn" routerLink="/custom">Send the family brief</a>
          <a class="btn btn-ghost" [href]="wa" target="_blank" rel="noopener">WhatsApp the dates</a>
        </div>
      </div>
    </section>
  `,
})
export class FamilyPageComponent {
  site = SITE;
  wa = whatsappUrl(
    'Hello Saroj India Tours — we need a family / wedding-guest plan (dates and cities below).'
  );

  constructor(title: Title) {
    title.setTitle('Family and wedding travel | Saroj India Tours');
  }
}
