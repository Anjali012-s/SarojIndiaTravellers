import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-guides-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="section">
      <div class="wrap">
        <p class="eyebrow">Practical notes</p>
        <h1>Guides for planning India</h1>
        <p>Short, usable pages — not a magazine. Written for first-timers booking a private car from Delhi.</p>
        <div class="grid-2" style="margin-top: 2rem">
          <a class="card" routerLink="/guides/first-india-trip">
            <div class="card-body">
              <p class="meta">Planning</p>
              <h3>Your first private trip to India</h3>
              <p>Visa, SIM, cash, tipping, and why six days on the Triangle is enough for most people.</p>
            </div>
          </a>
          <a class="card" routerLink="/when-to-go">
            <div class="card-body">
              <p class="meta">Season</p>
              <h3>When to go</h3>
              <p>Month by month for North India, Rajasthan, Kerala and wildlife — without pretending every month is perfect.</p>
            </div>
          </a>
          <a class="card" routerLink="/how-it-works">
            <div class="card-body">
              <p class="meta">Booking</p>
              <h3>How we book a trip</h3>
              <p>Deposit, vouchers, cancellation, and what is not included until you approve a quote.</p>
            </div>
          </a>
          <a class="card" routerLink="/families">
            <div class="card-body">
              <p class="meta">Groups</p>
              <h3>Families and wedding guests</h3>
              <p>Staggered flights, extra cars, kitchens, and elders who will not climb Amber Fort twice.</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  `,
})
export class GuidesPageComponent {
  constructor(title: Title) {
    title.setTitle('Travel guides | Saroj India Tours');
  }
}
