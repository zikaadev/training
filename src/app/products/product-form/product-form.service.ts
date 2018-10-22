import { ProductsService } from '@app/products/products.service';
import { Product } from '@app/core/models/product.model';
import { Input, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProductFormService {
    @Input() selectedProduct: Product;

    constructor(private productService: ProductsService) { }

    setData(product: Product) {
        this.selectedProduct = product;
    }
}
