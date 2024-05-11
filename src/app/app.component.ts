import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from '../app/home-page/home-page.component';
import { ContactComponent } from './components/contact/contact.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, HomePageComponent, ContactComponent],
})
export class AppComponent {
  title = 'SarojIndiaTravellers';
}
