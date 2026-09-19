import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SITE } from '../data/site';

@Component({
  selector: 'app-privacy-page',
  standalone: true,
  template: `
    <section class="section">
      <div class="wrap" style="max-width: 44rem">
        <p class="eyebrow">Legal</p>
        <h1>Privacy</h1>
        <p>
          {{ site.brand }} collects only what we need to quote and run your trip: names, contact details, dates,
          passport names for hotels and tickets, and notes you send us (diet, mobility, celebrations).
        </p>
        <p>
          We share that with hotels, drivers, guides and, where needed, airlines or parks — not with advertisers.
          Enquiry forms open your email and WhatsApp; they are not stored on this website.
        </p>
        <p>
          To change or delete what we hold, write to <a [href]="'mailto:' + site.email">{{ site.email }}</a>.
        </p>
      </div>
    </section>
  `,
})
export class PrivacyPageComponent {
  site = SITE;

  constructor(title: Title) {
    title.setTitle('Privacy | Saroj India Tours');
  }
}
