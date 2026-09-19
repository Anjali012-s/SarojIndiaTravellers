import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { EnquiryFormComponent } from '../components/enquiry-form/enquiry-form.component';
import { SITE, whatsappUrl } from '../data/site';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [EnquiryFormComponent],
  template: `
    <section class="section">
      <div class="wrap grid-2">
        <div>
          <p class="eyebrow">Contact</p>
          <h1>A person in Delhi answers.</h1>
          <p><a [href]="'tel:' + site.phoneTel">{{ site.phoneDisplay }}</a></p>
          <p><a [href]="'mailto:' + site.email">{{ site.email }}</a></p>
          <p>{{ site.area }}<br />{{ site.hours }}</p>
          <p>
            <a class="btn" [href]="wa" target="_blank" rel="noopener">Open WhatsApp</a>
          </p>
          <p>
            We plan from New Delhi. The map is the city we operate from — ask on WhatsApp for a meeting point; we do not
            publish a walk-in shop front.
          </p>
          <iframe
            title="New Delhi"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725708!3d28.52755440946369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b8494e55808f!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1715400000000"
            width="100%"
            height="280"
            style="border:0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="card">
          <div class="card-body">
            <h2>Send a brief</h2>
            <app-enquiry-form />
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ContactPageComponent {
  site = SITE;
  wa = whatsappUrl('Hello Saroj India Tours — I would like to talk about a trip.');

  constructor(title: Title) {
    title.setTitle('Contact | Saroj India Tours');
  }
}
