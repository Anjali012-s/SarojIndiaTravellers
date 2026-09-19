import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="section">
      <div class="wrap" style="max-width: 36rem">
        <p class="eyebrow">404</p>
        <h1>That page is not on this site.</h1>
        <p>Try a journey, a destination, or message us — we answer the same number either way.</p>
        <div class="hero-actions">
          <a class="btn" routerLink="/tours">Journeys</a>
          <a class="btn btn-ghost" routerLink="/contact">Contact</a>
        </div>
      </div>
    </section>
  `,
})
export class NotFoundPageComponent {
  constructor(title: Title) {
    title.setTitle('Page not found | Saroj India Tours');
  }
}
