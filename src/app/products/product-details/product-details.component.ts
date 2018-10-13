import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../core/helper.service';
import { Product } from '../../core/models/product';
import { TranslateService } from '@ngx-translate/core';
import { IProduct } from '../../core/interfaces/iproduct';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductsModalComponent } from '../products-modal/products-modal.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  param = { value: 'world' };
  filteredProducts: Product[];
  selectedProduct: Product;
  modalState = false;
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
    private translateService: TranslateService,
    private modalService: NgbModal) {
    this.products = this.helperService.getProduct();
    this.filteredProducts = this.products;
    this.searchText = '';
  }
  products: Product[];

  open(selectedProduct: Product) {
    this.modalState = true;
    this.selectedProduct = selectedProduct;
    // const modalRef = this.modalService.open(ProductsModalComponent);
    // modalRef.componentInstance.id = this.selectedProduct.id;
    // modalRef.componentInstance.title = this.selectedProduct.title;
    // modalRef.componentInstance.description = this.selectedProduct.description;
    // modalRef.componentInstance.price = this.selectedProduct.price;
    // modalRef.componentInstance.image = this.selectedProduct.image;
    // modalRef.componentInstance.quantity = this.selectedProduct.quantity;
  }

  performFilter(filterBy: string): Product[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Product) => product.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

}
