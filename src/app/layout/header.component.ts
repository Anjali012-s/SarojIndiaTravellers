import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SITE, whatsappUrl } from '../data/site';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  site = SITE;
  open = false;
  quoteLink = whatsappUrl(
    'Hello Saroj India Tours — I would like a private itinerary quote.'
  );

  toggle(): void {
    this.open = !this.open;
  }

  close(): void {
    this.open = false;
  }
}
