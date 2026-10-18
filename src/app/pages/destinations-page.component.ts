import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DESTINATIONS } from '../data/destinations';
import { JOURNEY_THEMES, JourneyTheme } from '../data/themes';

@Component({
  selector: 'app-destinations-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="section">
      <div class="wrap">
        <p class="eyebrow">Places we actually operate</p>
        <h1>Destinations</h1>
        <p>
          Browse by category the way guests search: monumental sites (Ajanta–Ellora, Hampi, Khajuraho, Konark), nature,
          wildlife, spiritual, heritage palaces, beaches and Himalaya. Each page leads to a private itinerary we quote
          from Delhi.
        </p>
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
        <p class="meta" style="margin-top:1rem">{{ visible.length }} destinations</p>
        <div class="grid-3" style="margin-top: 1.25rem">
          @for (place of visible; track place.slug) {
            <a class="card" [routerLink]="['/destinations', place.slug]">
              <img [src]="place.hero" [alt]="place.name" />
              <div class="card-body">
                <p class="meta">{{ place.themes.join(' · ') }}</p>
                <h3>{{ place.name }}</h3>
                <p>{{ place.summary }}</p>
              </div>
            </a>
          }
        </div>
      </div>
    </section>
  `,
})
export class DestinationsPageComponent {
  places = DESTINATIONS;
  themes = JOURNEY_THEMES;
  theme: 'All' | JourneyTheme = 'All';

  get visible() {
    if (this.theme === 'All') {
      return this.places;
    }
    return this.places.filter((place) => place.themes.includes(this.theme as JourneyTheme));
  }

  constructor(title: Title) {
    title.setTitle('Destinations | Saroj India Tours');
  }
}
