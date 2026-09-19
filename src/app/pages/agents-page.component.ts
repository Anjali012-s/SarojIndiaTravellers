import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { EnquiryFormComponent } from '../components/enquiry-form/enquiry-form.component';
import { SITE, whatsappUrl } from '../data/site';

@Component({
  selector: 'app-agents-page',
  standalone: true,
  imports: [EnquiryFormComponent],
  template: `
    <section class="section">
      <div class="wrap grid-2">
        <div>
          <p class="eyebrow">For travel advisors</p>
          <h1>A Delhi FIT desk that answers in your working day.</h1>
          <p>
            We are not a 30-office DMC and we do not run a partner portal yet. If you sell private India to a handful of
            clients a year, send the file. We return a costed itinerary you can put on your letterhead.
          </p>
          <ul class="list">
            <li>{{ site.quoteSla }} on complete briefs (dates, pax, hotel class, interests)</li>
            <li>Net rates on request — no public website undercutting your client</li>
            <li>English operations from {{ site.city }}</li>
            <li>Golden Triangle, Rajasthan, Varanasi, Ranthambore, Kerala via partner</li>
            <li>No series groups or MICE in year one unless we agree in writing first</li>
          </ul>
          <p>
            <a class="btn" [href]="wa" target="_blank" rel="noopener">WhatsApp an agent brief</a>
          </p>
        </div>
        <div class="card">
          <div class="card-body">
            <h2>Send a client file</h2>
            <app-enquiry-form presetTour="Travel advisor / agent FIT" />
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AgentsPageComponent {
  site = SITE;
  wa = whatsappUrl(
    'Hello Saroj India Tours — I am a travel advisor and would like net rates / a FIT quote for a client.'
  );

  constructor(title: Title) {
    title.setTitle('Travel advisors | Saroj India Tours');
  }
}
