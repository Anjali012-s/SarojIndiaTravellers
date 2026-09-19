import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { SITE } from '../data/site';
import { TOURS } from '../data/tours';

@Component({
  selector: 'app-tours-page',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  template: `
    <section class="section">
      <div class="wrap">
        <p class="eyebrow">Private itineraries</p>
        <h1>Journeys we quote every week</h1>
        <p>
          Each page has days, inclusions and a from-price. Your quote will match hotel class, season and group size.
          {{ site.quoteSla }}.
        </p>
        <div class="grid-3" style="margin-top: 2rem">
          @for (tour of tours; track tour.slug) {
            <a class="card" [routerLink]="['/tours', tour.slug]">
              <img [src]="tour.hero" [alt]="tour.name" />
              <div class="card-body">
                <p class="meta">{{ tour.duration }} · {{ tour.bestFor }}</p>
                <h3>{{ tour.name }}</h3>
                <p>{{ tour.summary }}</p>
                <p class="price">From {{ tour.fromUsd | currency: 'USD' : 'symbol' : '1.0-0' }} pp</p>
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

  constructor(title: Title) {
    title.setTitle('Journeys | Saroj India Tours');
  }
}
