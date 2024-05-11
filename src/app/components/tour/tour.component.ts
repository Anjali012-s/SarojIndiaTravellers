import { Component, OnInit, Input } from '@angular/core';
import { Tour } from '../../../tours';

@Component({
  selector: 'app-tour',
  standalone: true,
  imports: [],
  templateUrl: './tour.component.html',
  styleUrl: './tour.component.scss',
})
export class TourComponent implements OnInit {
  // @Input() tour: Tour | undefined;
  @Input() tour: Tour = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    imageUrl: '',
  }; // Initialize with a default Tour object

  ngOnInit(): void {}
}
