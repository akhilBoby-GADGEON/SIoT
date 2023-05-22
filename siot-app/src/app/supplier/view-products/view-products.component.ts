import { Component, OnInit } from '@angular/core';

interface Product {
  name: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.scss']
})
export class ViewProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products: Product[] = [
    {
      name: 'Product 1',
      description: 'Description of Product 1',
      imageUrl: 'https://m.media-amazon.com/images/I/51IcFtRpZdL.jpg'
    },
    {
      name: 'Product 2',
      description: 'Description of Product 2',
      imageUrl: 'https://m.media-amazon.com/images/I/51IcFtRpZdL.jpg'
    },
    {
      name: 'Product 3',
      description: 'Description of Product 3',
      imageUrl: 'https://m.media-amazon.com/images/I/51IcFtRpZdL.jpg'
    },
    {
      name: 'Product 4',
      description: 'Description of Product 4',
      imageUrl: 'https://m.media-amazon.com/images/I/51IcFtRpZdL.jpg'
    },
    {
      name: 'Product 5',
      description: 'Description of Product 5',
      imageUrl: 'https://m.media-amazon.com/images/I/51IcFtRpZdL.jpg'
    },
    {
      name: 'Product 6',
      description: 'Description of Product 6',
      imageUrl: 'https://m.media-amazon.com/images/I/51IcFtRpZdL.jpg'
    },
    {
      name: 'Product 7',
      description: 'Description of Product 7',
      imageUrl: 'https://m.media-amazon.com/images/I/51IcFtRpZdL.jpg'
    },
    {
      name: 'Product 8',
      description: 'Description of Product 8',
      imageUrl: 'https://m.media-amazon.com/images/I/51IcFtRpZdL.jpg'
    }
  ];

}
