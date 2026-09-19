import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ToursPageComponent } from './pages/tours-page.component';
import { TourDetailPageComponent } from './pages/tour-detail-page.component';
import { AboutPageComponent } from './pages/about-page.component';
import { CustomPageComponent } from './pages/custom-page.component';
import { ContactPageComponent } from './pages/contact-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'tours', component: ToursPageComponent },
  { path: 'tours/:slug', component: TourDetailPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'custom', component: CustomPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: '**', redirectTo: '' },
];
