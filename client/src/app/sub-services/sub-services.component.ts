import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-sub-services',
  standalone: true,
  templateUrl: './sub-services.component.html',
  styleUrls: ['./sub-services.component.scss']
})
export class SubServicesComponent implements OnInit {
  products: any[] = [];

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    axios.get('http://localhost:3000/products')
      .then(response => {
        this.products = response.data;
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }
}
