import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { SITE } from '../data/site';
import { JOURNEY_THEMES, JourneyTheme, tourThemes } from '../data/themes';
import { TOURS, TOUR_ZONES, TourZone } from '../data/tours';

@Component({
  selector: 'app-tours-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="section">
      <div class="wrap">
        <p class="eyebrow">Private itineraries</p>
        <h1>Journeys across India</h1>
        <p>
          Filter by region or by category — monumental (Ajanta–Ellora, Hampi, Khajuraho), nature, wildlife, spiritual,
          heritage, beaches and Himalaya. Far circuits run with a named local partner; you still have one Delhi WhatsApp
          desk. {{ site.quoteSla }}.
        </p>
        <p class="meta" style="margin-top:1.25rem">Region</p>
        <div class="filter-row" style="margin-top:0.5rem">
          <button type="button" class="btn btn-ghost" [class.filter-on]="zone === 'All'" (click)="zone = 'All'">
            All
          </button>
          @for (item of zones; track item) {
            <button type="button" class="btn btn-ghost" [class.filter-on]="zone === item" (click)="zone = item">
              {{ item }}
            </button>
          }
        </div>
        <p class="meta" style="margin-top:1.25rem">Category</p>
        <div class="filter-row" style="margin-top:0.5rem">
          <button type="button" class="btn btn-ghost" [class.filter-on]="theme === 'All'" (click)="theme = 'All'">
            All
          </button>
          @for (item of themes; track item) {
            <button type="button" class="btn btn-ghost" [class.filter-on]="theme === item" (click)="theme = item">
              {{ item }}
            </button>
          }
        </div>
        <p class="meta" style="margin-top:1rem">{{ visible.length }} itineraries</p>
        <div class="grid-3" style="margin-top: 1.25rem">
          @for (tour of visible; track tour.slug) {
            <a class="card" [routerLink]="['/tours', tour.slug]">
              <img [src]="tour.hero" [alt]="tour.name" />
              <div class="card-body">
                <p class="meta">{{ tour.zone }} · {{ labels(tour).join(' · ') }} · {{ tour.duration }}</p>
                <h3>{{ tour.name }}</h3>
                <p>{{ tour.summary }}</p>
              </div>
            </a>
          }
        </div>
      </div>
    </section>
  `,
})
export class ToursPageComponent {
  site = SITE;
  tours = TOURS;
  zones = TOUR_ZONES;
  themes = JOURNEY_THEMES;
  zone: 'All' | TourZone = 'All';
  theme: 'All' | JourneyTheme = 'All';

  labels(tour: (typeof TOURS)[number]) {
    return [...new Set([tour.zone, ...tourThemes(tour)])];
  }

  get visible() {
    return this.tours.filter((tour) => {
      const zoneOk = this.zone === 'All' || tour.zone === this.zone;
      const themeOk = this.theme === 'All' || tourThemes(tour).includes(this.theme);
      return zoneOk && themeOk;
    });
  }

  constructor(title: Title) {
    title.setTitle('Journeys | Saroj India Tours');
  }
}
