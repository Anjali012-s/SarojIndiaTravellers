import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../../data/site';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  site = SITE;
  year = new Date().getFullYear();
}
