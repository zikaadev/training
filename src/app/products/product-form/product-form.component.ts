import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '@app/core/models/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  product = new Product(null, '', '', null, '../../assets/images/product.png', null);
  submitted = false;
  constructor(private productsService: ProductsService) { }

  onSubmit() {
    console.log(this.product);
    this.submitted = true;
    this.productsService.postProduct(this.product)
      .subscribe(
        data => console.log('Success', data),
        error => console.error('Error!', error)
      );
  }
}
