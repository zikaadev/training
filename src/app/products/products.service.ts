import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Product } from '@app/core/models/product.model';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { PersistenceService } from '../core/services/persistence-service';
import { NotificationsService } from 'angular2-notifications';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiUrl = this.persistenceService.apiUrl + '/products';
  options = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': 'my-token',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(
    private http: HttpClient,
    private persistenceService: PersistenceService,
    private notificationsService: NotificationsService) { }

  getAllProducts(): Observable<Product[]> {
    console.log(this.apiUrl);
    return this.http.get(this.apiUrl)
      .pipe(
        map((res: Product[]) => {
          this.notificationsService.success('Success', 'Data successfully loaded');
          return res as Product[];
        }),
        catchError((err: any) => this.persistenceService.handleError(err))
      );
  }

  getProductById(id: number): Observable<Product> {
    console.log(this.apiUrl + '/' + id);
    return this.http.get(this.apiUrl + '/' + id, this.options)
      .pipe(
        map((res: Product) => res as Product),
        catchError((err: any) => this.persistenceService.handleError(err)));
  }

  addProduct(product: Product) {
    console.log(this.apiUrl);
    return this.http.post<Product>(this.apiUrl, product, this.options);
  }

  updateProduct(product: Product) {
    console.log(this.apiUrl + '/' + product.id);
    return this.http.put<Product>(this.apiUrl + '/' + product.id, product, this.options);
  }

  deleteProduct(id: number) {
    console.log(this.apiUrl + '/' + id);
    return this.http.delete<Product>(this.apiUrl + '/' + id, this.options);
  }
}
