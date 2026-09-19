import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { SITE } from '../data/site';

@Component({
  selector: 'app-first-india-guide-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <article class="section">
      <div class="wrap" style="max-width: 44rem">
        <p class="eyebrow">Guide</p>
        <h1>Your first private trip to India</h1>
        <p>
          Most first-timers from the US, UK, Europe and the Gulf should start with Delhi, Agra and Jaipur, then add
          one thing: tigers, Varanasi, or a slower Rajasthan city. Trying to “do India” in ten days is how trips feel
          like airports.
        </p>
        <h2>A sensible first circuit</h2>
        <ul class="list">
          <li>6 days — Golden Triangle only.</li>
          <li>8 days — Triangle plus Ranthambore (permits must be held; we confirm after you approve).</li>
          <li>10–12 days — Triangle plus Jaipur linger, or fly to Varanasi, or continue to Udaipur.</li>
        </ul>
        <p><a routerLink="/tours/golden-triangle">Golden Triangle Classic</a> is the template we quote most.</p>
        <h2>Before you fly</h2>
        <ul class="list">
          <li>e-Visa or visa — start 3–4 weeks out. We send an invitation letter for the itinerary we have confirmed.</li>
          <li>Travel insurance is yours. We do not sell it.</li>
          <li>A local SIM or eSIM on landing is enough; WhatsApp is how you reach us.</li>
          <li>Cards work in hotels; keep some rupees for small stalls and tips.</li>
        </ul>
        <h2>On the road</h2>
        <p>
          Your chauffeur is not a guide. Licensed guides work at the monuments. Tip both at the end of the day if the
          service was good — we put a suggested range on the voucher, never a mandatory “service fee” on the invoice.
        </p>
        <p>
          Dress for temples: shoulders and knees covered. Remove shoes when asked. Photography rules change at each
          site; your guide will say so.
        </p>
        <h2>What we will not do</h2>
        <p>
          We will not pack five cities into five nights, or promise a tiger. Parks are wild. We book drives; sightings
          are not a deliverable.
        </p>
        <p>{{ site.quoteSla }}. <a routerLink="/custom">Send dates</a> or read <a routerLink="/when-to-go">when to go</a>.</p>
      </div>
    </article>
  `,
})
export class FirstIndiaGuidePageComponent {
  site = SITE;

  constructor(title: Title) {
    title.setTitle('First private trip to India | Saroj India Tours');
  }
}
