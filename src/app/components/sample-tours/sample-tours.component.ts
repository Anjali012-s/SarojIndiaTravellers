import { Component, OnInit } from '@angular/core';
import { TourComponent } from '../tour/tour.component';
import { Tour } from '../../../tours';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sample-tours',
  standalone: true,
  templateUrl: './sample-tours.component.html',
  styleUrl: './sample-tours.component.scss',
  imports: [TourComponent, CommonModule],
})
export class SampleToursComponent implements OnInit {
  tours: Tour[] = [
    // Add your tour data here
    {
      id: 1,
      name: 'Tour 1',
      description: 'Description 1',
      price: 100,
      imageUrl: '../../../assets/images/img1.jpg',
    },
    {
      id: 2,
      name: 'Tour 2',
      description: 'Description 2',
      price: 150,
      imageUrl: '../../../assets/images/img2.jpg',
    },
    {
      id: 3,
      name: 'Tour 3',
      description: 'Description 3',
      price: 101,
      imageUrl: '../../../assets/images/img1.jpg',
    },
    {
      id: 4,
      name: 'Tour 4',
      description: 'Description 4',
      price: 152,
      imageUrl: '../../../assets/images/img1.jpg',
    },
    {
      id: 5,
      name: 'Tour 5',
      description: 'Description 5',
      price: 103,
      imageUrl: '../../../assets/images/img1.jpg',
    },
    {
      id: 6,
      name: 'Tour 6',
      description: 'Description 6',
      price: 153,
      imageUrl: '../../../assets/images/img1.jpg',
    },
    {
      id: 7,
      name: 'Tour 7',
      description: 'Description 7',
      price: 104,
      imageUrl: '../../../assets/images/img1.jpg',
    },
    {
      id: 8,
      name: 'Tour 8',
      description: 'Description 8',
      price: 154,
      imageUrl: '../../../assets/images/img1.jpg',
    },
  ];

  ngOnInit(): void {}
}
