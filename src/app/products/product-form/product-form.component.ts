import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '@app/core/models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  productsModel = new Product(null, '', '', null, '', null);
  submitted = false;
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.productsModel);
    this.submitted = true;
    this.productsService.postProduct(this.productsModel)
      .subscribe(
        data => console.log('Success', data),
        error => console.error('Error!', error)
      );
  }
}
