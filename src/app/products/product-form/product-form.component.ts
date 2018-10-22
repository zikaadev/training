import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '@app/core/models/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  @Input() selectedProduct: Product; // = new Product(null, '', '', null, '../../assets/images/product.png', null);
  @Input() mode: string;
  submitted = false;

  constructor(private productsService: ProductsService) { }

  save(mode: string) {
    console.log(this.selectedProduct);
    this.submitted = true;
    if (this.mode = 'new') {
      this.productsService.postProduct(this.selectedProduct)
        .subscribe();
    } else {
      this.productsService.updateProduct(this.selectedProduct)
        .subscribe(
          // this.mode = 'new';
        );
    }
  }

}
