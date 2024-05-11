import { Component, OnInit } from '@angular/core';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { ExperiencesComponent } from '../experiences/experiences.component';
import { ContactComponent } from '../components/contact/contact.component';
import { FooterComponent } from '../components/footer/footer.component';
import { SampleToursComponent } from '../components/sample-tours/sample-tours.component';
@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  imports: [
    HomeSliderComponent,
    ExperiencesComponent,
    ContactComponent,
    FooterComponent,
    SampleToursComponent,
  ],
})
export class HomePageComponent implements OnInit {
  imageSlides: any[] = new Array(3).fill({ id: -1, src: '' });
  ngOnInit(): void {
    this.imageSlides[0] = {
      src: '/assets/images/img1.jpg',
    };
    this.imageSlides[1] = {
      src: '/assets/images/img2.jpg',
    };
    this.imageSlides[2] = {
      src: '/assets/images/img3.jpg',
    };
  }
}
