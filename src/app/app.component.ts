import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SITE, whatsappUrl } from './data/site';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  wa = whatsappUrl('Hello Saroj India Tours — I would like help planning a private India journey.');
  site = SITE;
}
