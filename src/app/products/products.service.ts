import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '@app/core/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiUurl = '/products';
  constructor(private http: HttpClient) { }

  postProduct(product: Product) {
    return this.http.post<Product>(this.apiUurl, product);
  }
}
