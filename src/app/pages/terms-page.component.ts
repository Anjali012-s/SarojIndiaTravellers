import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SITE } from '../data/site';

@Component({
  selector: 'app-terms-page',
  standalone: true,
  template: `
    <section class="section">
      <div class="wrap" style="max-width: 44rem">
        <p class="eyebrow">Legal</p>
        <h1>Booking terms</h1>
        <p>Website from-prices are proposals. The signed or emailed quote is the contract.</p>
        <ul class="list">
          <li>{{ site.deposit }}</li>
          <li>Hotels and safari permits are confirmed only after the deposit clears.</li>
          <li>Cancellation follows each supplier’s rule, stated on your quote. Recoverable unused money is refunded; planning work after documents are issued is not.</li>
          <li>We are not liable for visa refusal, missed flights you booked, or wildlife not appearing.</li>
          <li>{{ site.payments }}</li>
          <li>Indian law; courts in Delhi.</li>
        </ul>
        <p>Questions: <a [href]="'mailto:' + site.email">{{ site.email }}</a>.</p>
      </div>
    </section>
  `,
})
export class TermsPageComponent {
  site = SITE;

  constructor(title: Title) {
    title.setTitle('Booking terms | Saroj India Tours');
  }
}
