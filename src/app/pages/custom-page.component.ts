import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { EnquiryFormComponent } from '../components/enquiry-form/enquiry-form.component';
import { SITE } from '../data/site';

@Component({
  selector: 'app-custom-page',
  standalone: true,
  imports: [EnquiryFormComponent],
  template: `
    <section class="section">
      <div class="wrap grid-2">
        <div>
          <p class="eyebrow">Custom FIT</p>
          <h1>Tell us the dates. We send a plan the same working day.</h1>
          <p>
            Family reunions, wedding guest lists, multi-generation pace, Jain or vegetarian kitchens, wheelchair-aware
            routing — this is the product our sample journeys exist to start.
          </p>
          <ul class="list">
            <li>{{ site.quoteSla }}</li>
            <li>Hotel options in 3, 4 and 5-star / heritage bands</li>
            <li>Combine Triangle + Rajasthan, Varanasi, tigers or Kerala</li>
            <li>{{ site.deposit }}</li>
          </ul>
        </div>
        <div class="card">
          <div class="card-body">
            <h2>Trip brief</h2>
            <app-enquiry-form presetTour="Custom private India" />
          </div>
        </div>
      </div>
    </section>
  `,
})
export class CustomPageComponent {
  site = SITE;

  constructor(title: Title) {
    title.setTitle('Custom trip | Saroj India Tours');
  }
}
