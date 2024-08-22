import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Import CommonModule
import axios from 'axios';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule], // <-- Add CommonModule here
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  testimonials: any[] = [];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,  // Enable infinite looping
    arrows: false,   // Hide arrows for a cleaner look
    dots: true       // Show navigation dots
  };

  ngOnInit() {
    this.fetchTestimonials();
  }

  fetchTestimonials() {
    axios.get('http://localhost:4002/testimonials')
      .then(response => {
        this.testimonials = response.data;
      })
      .catch(error => {
        console.error('Error fetching testimonials!', error);
      });
  }
}
