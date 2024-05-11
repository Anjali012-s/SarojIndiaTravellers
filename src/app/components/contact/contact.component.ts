import { Component } from '@angular/core';
import { GoogleMapsComponent } from '../google-maps/google-maps.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  imports: [CommonModule, GoogleMapsComponent, FormsModule],
})
export class ContactComponent {
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  message: string | undefined;

  submitForm() {
    // Handle form submission logic here
  }
}
