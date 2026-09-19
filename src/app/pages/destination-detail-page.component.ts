import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Destination, getDestination } from '../data/destinations';
import { SITE, whatsappUrl } from '../data/site';
import { Tour, getTour } from '../data/tours';

@Component({
  selector: 'app-destination-detail-page',
  standalone: true,
  imports: [RouterLink, CurrencyPipe],
  template: `
    @if (place) {
      <section class="tour-hero" [style.backgroundImage]="'url(' + place.hero + ')'">
        <div class="wrap">
          <p class="eyebrow">{{ place.searchPhrase }}</p>
          <h1>{{ place.name }}</h1>
        </div>
      </section>
      <section class="section">
        <div class="wrap grid-2">
          <div>
            <p>{{ place.summary }}</p>
            <p class="meta">When to go</p>
            <p>{{ place.bestSeason }}</p>
            <a class="btn" [href]="wa" target="_blank" rel="noopener">WhatsApp this destination</a>
          </div>
          <div>
            <h2>Private itineraries</h2>
            @for (tour of tours; track tour.slug) {
              <a class="card" [routerLink]="['/tours', tour.slug]" style="display:block;margin-bottom:1rem">
                <div class="card-body">
                  <p class="meta">{{ tour.duration }}</p>
                  <h3>{{ tour.name }}</h3>
                  <p class="price">From {{ tour.fromUsd | currency: 'USD' : 'symbol' : '1.0-0' }} pp</p>
                </div>
              </a>
            }
          </div>
        </div>
      </section>
    } @else {
      <section class="section wrap">
        <p>We do not publish that destination yet.</p>
        <a routerLink="/destinations">All destinations</a>
      </section>
    }
  `,
})
export class DestinationDetailPageComponent {
  site = SITE;
  place?: Destination;
  tours: Tour[] = [];
  wa = '';

  constructor(route: ActivatedRoute, title: Title) {
    route.paramMap.subscribe((params) => {
      this.place = getDestination(params.get('slug') ?? '');
      this.tours = (this.place?.relatedTourSlugs ?? [])
        .map((slug) => getTour(slug))
        .filter((tour): tour is Tour => !!tour);
      if (this.place) {
        title.setTitle(`${this.place.searchPhrase} | ${SITE.brand}`);
        this.wa = whatsappUrl(
          `Hello Saroj India Tours — I am looking at ${this.place.name} (${this.place.searchPhrase}).`
        );
      } else {
        title.setTitle(`Destination | ${SITE.brand}`);
      }
    });
  }
}
