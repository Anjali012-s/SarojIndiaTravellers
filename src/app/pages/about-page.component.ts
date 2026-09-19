import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { SITE, whatsappUrl } from '../data/site';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="section">
      <div class="wrap" style="max-width: 44rem">
        <p class="eyebrow">About</p>
        <h1>A Delhi desk for private India travel</h1>
        <p>
          {{ site.brand }} plans chauffeur-driven journeys for independent travellers, families and small groups.
          We work from {{ site.city }}. We answer the phone. We do not advertise 25 offices or awards we have not earned.
        </p>
        <p>
          What we operate ourselves is North India FIT: Golden Triangle, Rajasthan, Varanasi, wildlife add-ons, and
          airport logistics for wedding guests. Kerala and far circuits are delivered with named local partners — you still
          have one WhatsApp number: {{ site.phoneDisplay }}.
        </p>
        <h2>Who this is for</h2>
        <p>
          First-time visitors who want a private car, not a coach. Diaspora families who need a practical circuit.
          Overseas agents who want a 24-hour quote on a simple FIT file — not a white-label portal (yet).
        </p>
        <h2>How we keep promises small enough to keep</h2>
        <ul class="list">
          <li>Written inclusions before you pay a deposit.</li>
          <li>{{ site.deposit }}.</li>
          <li>Licensed monument guides where the site requires them.</li>
          <li>Safari and palace-hotel inventory confirmed only after you approve the quote — parks and palaces sell out.</li>
        </ul>
        <p>
          If you need a 500-person DMC, there are excellent ones. If you need a reachable planner in Delhi, start here.
        </p>
        <div class="hero-actions">
          <a class="btn" routerLink="/custom">Plan a custom trip</a>
          <a class="btn btn-ghost" [href]="wa" target="_blank" rel="noopener">WhatsApp us</a>
        </div>
      </div>
    </section>
  `,
})
export class AboutPageComponent {
  site = SITE;
  wa = whatsappUrl('Hello Saroj India Tours — I would like to know more about travelling with you.');

  constructor(title: Title) {
    title.setTitle('About | Saroj India Tours');
  }
}
