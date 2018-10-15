import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../core/helper.service';
import { Product } from '../../core/models/product';
import { TranslateService } from '@ngx-translate/core';
import { IProduct } from '../../core/interfaces/iproduct';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductsModalComponent } from '../products-modal/products-modal.component';
import { Modal, BSModalContext } from 'ngx-modialog/plugins/bootstrap';
import { overlayConfigFactory } from 'ngx-modialog';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  param = { value: 'world' };
  filteredProducts: Product[];
  selectedProduct: Product;
  products: Product[];
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


  open(product: Product) {
    const modalRef = this.modalService.open(ProductsModalComponent);
    modalRef.componentInstance.selectedProduct = product;
  }

  performFilter(filterBy: string): Product[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Product) => product.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

}
