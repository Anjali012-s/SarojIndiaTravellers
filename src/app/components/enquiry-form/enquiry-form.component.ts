import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SITE, whatsappUrl } from '../../data/site';
import { TOURS } from '../../data/tours';

@Component({
  selector: 'app-enquiry-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './enquiry-form.component.html',
})
export class EnquiryFormComponent implements OnInit {
  @Input() presetTour = '';

  site = SITE;
  tours = TOURS;
  sent = false;

  model = {
    name: '',
    email: '',
    phone: '',
    startDate: '',
    adults: 2,
    children: 0,
    hotel: '4-star',
    tour: '',
    budget: 'USD 1,000–2,000 per person',
    message: '',
  };

  ngOnInit(): void {
    if (this.presetTour) {
      this.model.tour = this.presetTour;
    }
  }

  submit(): void {
    const body = [
      `Name: ${this.model.name}`,
      `Email: ${this.model.email}`,
      `Phone: ${this.model.phone}`,
      `Travel start: ${this.model.startDate || 'flexible'}`,
      `Adults: ${this.model.adults}, children: ${this.model.children}`,
      `Hotel style: ${this.model.hotel}`,
      `Journey: ${this.model.tour || 'custom / not sure'}`,
      `Budget: ${this.model.budget}`,
      `Notes: ${this.model.message || '—'}`,
    ].join('\n');

    const subject = `Enquiry — ${this.model.tour || 'custom India trip'} — ${this.model.name}`;
    window.open(
      `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      '_self'
    );
    window.open(whatsappUrl(`Hello Saroj India Tours\n\n${body}`), '_blank', 'noopener');
    this.sent = true;
  }
}
