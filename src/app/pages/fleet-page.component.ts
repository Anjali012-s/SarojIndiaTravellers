import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FLEET_OPTIONS, SITE, whatsappUrl } from '../data/site';

@Component({
  selector: 'app-fleet-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="section">
      <div class="wrap">
        <p class="eyebrow">Transport</p>
        <h1>Our fleet</h1>
        <p>
          {{ site.vehicles }}. The vehicle is chauffeur-driven and reserved for your party — not a mixed public bus.
          Far circuits use the same categories with a named local partner; you still have one Delhi desk.
        </p>
        <div class="grid-3" style="margin-top: 2rem">
          @for (item of fleet; track item.name) {
            <div class="card">
              <div class="card-body">
                <p class="meta">As quoted</p>
                <h2>{{ item.name }}</h2>
                <p>{{ item.text }}</p>
              </div>
            </div>
          }
        </div>
        <h2 style="margin-top: 2.5rem">How we place a vehicle</h2>
        <ul class="list">
          <li>Air-conditioned sedan, SUV/MUV or coach, matched to headcount and luggage.</li>
          <li>Airport or station welcome in the arrival city.</li>
          <li>Hill, desert and long-highway days are quoted with the class that can actually do the road.</li>
          <li>Safari gypsies in national parks follow park rules and are a separate line on the quote.</li>
        </ul>
        <div class="hero-actions" style="margin-top: 1.5rem">
          <a class="btn" [href]="wa" target="_blank" rel="noopener">WhatsApp the vehicle you need</a>
          <a class="btn btn-ghost" routerLink="/our-guides">Our guides</a>
          <a class="btn btn-ghost" routerLink="/contact">Contact</a>
        </div>
      </div>
    </section>
  `,
})
export class FleetPageComponent {
  site = SITE;
  fleet = FLEET_OPTIONS;
  wa = whatsappUrl('Hello Saroj India Tours — I would like to know about your fleet (sedan / SUV-MUV / coach).');

  constructor(title: Title) {
    title.setTitle('Our fleet | Saroj India Tours');
  }
}
