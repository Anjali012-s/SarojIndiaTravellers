import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DESTINATIONS } from '../data/destinations';

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
          These pages match how people search. Each one leads to a private itinerary we can quote from Delhi — not a
          catalogue of every state in India.
        </p>
        <div class="grid-3" style="margin-top: 2rem">
          @for (place of places; track place.slug) {
            <a class="card" [routerLink]="['/destinations', place.slug]">
              <img [src]="place.hero" [alt]="place.name" />
              <div class="card-body">
                <p class="meta">{{ place.searchPhrase }}</p>
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

  constructor(title: Title) {
    title.setTitle('Destinations | Saroj India Tours');
  }
}
