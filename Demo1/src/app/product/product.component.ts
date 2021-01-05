import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any;
  constructor() { }

  ngOnInit() {
    this.products = [{productId: 1001, productName: 'MOBILE', description: 'No cost EMI from ₹1,499. Standard EMI also availableView Plans',
    price: 19999.99,  imagePath: 'assets/Images/10001.jpg'},
     {productId: 1002, productName: 'MOBILE', description: 'Nokia A6 Pro Brand', price: 13499.99,
     imagePath: 'assets/Images/10002.jpg'},
     {productId: 1003, productName: 'MOBILE', description: 'Samsung J7 Pro Second Edition', price: 19999.99,
     imagePath: 'assets/Images/10003.jpg'},
     {productId: 1004, productName: 'MOBILE', description: 'Get upto ₹11400 off with Exchange Special PriceGet extra ₹2000 off ',
     price: 13499.99, imagePath: 'assets/Images/10004.jpg'},
     {productId: 1005, productName: 'MOBILE', description: 'Samsung J7 Pro Second Edition', price: 19999.99,
     imagePath: 'assets/Images/10005.jpg'},
     {productId: 1006, productName: 'MOBILE', description: 'Nokia A6 Pro Brand', price: 13499.99,
     imagePath: 'assets/Images/10006.jpg'},
    ];
  }
  addToCart(product: any) {

  }
}
