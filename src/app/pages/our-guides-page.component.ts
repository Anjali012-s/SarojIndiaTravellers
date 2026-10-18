import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { GUIDE_LANGUAGES, SITE, whatsappUrl } from '../data/site';

@Component({
  selector: 'app-our-guides-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="section">
      <div class="wrap">
        <p class="eyebrow">People on the ground</p>
        <h1>Our guides</h1>
        <p>
          {{ site.languages }} You name the language you travel in. We arrange a licensed monument or city guide in that
          language and confirm the person before you pay a deposit.
        </p>
        <div class="grid-2" style="margin-top: 2rem">
          <div class="card">
            <div class="card-body">
              <p class="meta">At monuments</p>
              <h2>Licensed site guides</h2>
              <p>
                Where a fort, tomb or temple requires a licensed guide, we book one. They work your circuit at a private
                pace — not a flag-and-bus commentary for a mixed coach.
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <p class="meta">On the desk</p>
              <h2>English and Hindi in Delhi</h2>
              <p>
                The person who wrote your quote stays reachable on WhatsApp. Other languages on the ground are licensed
                local guides, not a claim that every Saroj employee speaks every tongue.
              </p>
            </div>
          </div>
        </div>
        <h2 style="margin-top: 2.5rem">Languages you can opt</h2>
        <p class="meta">{{ languages.join(' · ') }}</p>
        <p>
          Another language? Tell us the cities and dates. If we cannot staff it, we say so in the quote — we do not invent
          availability.
        </p>
        <h2>What a guide is for</h2>
        <ul class="list">
          <li>Context at the Taj, Amber, Qutub, temples and museums that need a ticketed guide.</li>
          <li>The language you actually speak, confirmed in writing before deposit.</li>
          <li>Not a substitute for the chauffeur, and not a tour leader herding strangers.</li>
        </ul>
        <p>
          Planning notes for first-timers (visa, season, families) live on a different page:
          <a routerLink="/guides">Guides for planning India</a>.
        </p>
        <div class="hero-actions" style="margin-top: 1.5rem">
          <a class="btn" [href]="wa" target="_blank" rel="noopener">WhatsApp the language you need</a>
          <a class="btn btn-ghost" routerLink="/fleet">Our fleet</a>
          <a class="btn btn-ghost" routerLink="/contact">Contact</a>
        </div>
      </div>
    </section>
  `,
})
export class OurGuidesPageComponent {
  site = SITE;
  languages = GUIDE_LANGUAGES;
  wa = whatsappUrl('Hello Saroj India Tours — I would like a licensed guide. Language:');

  constructor(title: Title) {
    title.setTitle('Our guides | Saroj India Tours');
  }
}
