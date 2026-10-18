import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { EnquiryFormComponent } from '../components/enquiry-form/enquiry-form.component';
import { SITE, whatsappUrl } from '../data/site';
import { tourThemes } from '../data/themes';
import { Tour, getTour } from '../data/tours';

@Component({
  selector: 'app-tour-detail-page',
  standalone: true,
  imports: [RouterLink, EnquiryFormComponent],
  template: `
    @if (tour) {
      <section class="tour-hero" [style.backgroundImage]="'url(' + tour.hero + ')'">
        <div class="wrap">
          <p class="eyebrow">{{ tour.region }} · {{ themeLabel }}</p>
          <h1>{{ tour.name }}</h1>
          <p>{{ tour.duration }} · private itinerary, quoted for your dates</p>
        </div>
      </section>
      <section class="section">
        <div class="wrap grid-2">
          <div>
            <p>{{ tour.summary }}</p>
            <p class="meta">Best for</p>
            <p>{{ tour.bestFor }}</p>
            <h2>Highlights</h2>
            <ul class="list">
              @for (item of tour.highlights; track item) {
                <li>{{ item }}</li>
              }
            </ul>
            <h2>Day by day</h2>
            @for (day of tour.itinerary; track day.title) {
              <h3>{{ day.title }}</h3>
              <p>{{ day.detail }}</p>
            }
            <div class="grid-2">
              <div>
                <h2>Included</h2>
                <ul class="list">
                  @for (item of tour.inclusions; track item) {
                    <li>{{ item }}</li>
                  }
                </ul>
              </div>
              <div>
                <h2>Not included</h2>
                <ul class="list">
                  @for (item of tour.exclusions; track item) {
                    <li>{{ item }}</li>
                  }
                </ul>
              </div>
            </div>
            @if (tour.notes?.length) {
              <h2>Good to know</h2>
              <ul class="list">
                @for (item of tour.notes; track item) {
                  <li>{{ item }}</li>
                }
              </ul>
            }
            <a class="btn btn-ghost" routerLink="/tours">All journeys</a>
            <p class="fineprint" style="margin-top:1rem">
              <a routerLink="/when-to-go">When to go</a> ·
              <a routerLink="/guides/first-india-trip">First trip notes</a> ·
              <a routerLink="/families">Families</a>
            </p>
          </div>
          <div>
            <div class="card">
              <div class="card-body">
                <h2>Get this itinerary</h2>
                <p>
                  We quote privately for hotel class, group size, season, flights, and extras such as safari, helicopter or special darshan.
                  See <a routerLink="/fleet">our fleet</a> and <a routerLink="/our-guides">our guides</a>.
                </p>
                <a class="btn" [href]="'tel:' + site.phoneTel">Call {{ site.phoneDisplay }}</a>
                <a class="btn btn-ghost" [href]="wa" target="_blank" rel="noopener" style="margin-left: 0.4rem">WhatsApp this tour</a>
                <p class="fineprint" style="margin-top:1rem">Or send the planning form — we reply on WhatsApp and email.</p>
                <app-enquiry-form [presetTour]="tour.name" />
              </div>
            </div>
          </div>
        </div>
      </section>
    } @else {
      <section class="section wrap">
        <p>That journey is not on our list.</p>
        <a routerLink="/tours">View journeys</a>
      </section>
    }
  `,
})
export class TourDetailPageComponent {
  site = SITE;
  tour?: Tour;
  wa = '';
  themeLabel = '';

  constructor(route: ActivatedRoute, title: Title) {
    route.paramMap.subscribe((params) => {
      this.tour = getTour(params.get('slug') ?? '');
      if (this.tour) {
        this.themeLabel = tourThemes(this.tour).join(' · ');
        title.setTitle(`${this.tour.name} | Saroj India Tours`);
        this.wa = whatsappUrl(
          `Hello Saroj India Tours — I would like a quote for ${this.tour.name} (${this.tour.duration}).`
        );
      } else {
        this.themeLabel = '';
        title.setTitle('Journey not found | Saroj India Tours');
      }
    });
  }
}
