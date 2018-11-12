import { Component, OnInit } from '@angular/core';
import { Product } from '@app/core/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  mode = 'new';
  selectedProduct: Product;
  constructor() { }

}
