import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../core/helper.service';
import { Product } from '../../core/models/product';
import { TranslateService } from '@ngx-translate/core';
import { IProduct } from '../../core/interfaces/iproduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  param = { value: 'world' };
  filteredProducts: Product[];
  _searchText: string;
  get searchText(): string {
    return this._searchText;
  }
  set searchText(value: string) {
    this._searchText = value;
    this.filteredProducts = this.searchText ? this.performFilter(this.searchText) : this.products;
  }

  constructor(
    private helperService: HelperService,
    private translateService: TranslateService) {
    this.products = this.helperService.getProduct();
    this.filteredProducts = this.products;
    this.searchText = '';
  }

  // pageTitle = 'Check out our Products';
  products: Product[];


  ngOnInit() {
  }

  performFilter(filterBy: string): Product[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Product) => product.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

}
