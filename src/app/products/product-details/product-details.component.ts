import { Component, OnInit, Input, Output } from '@angular/core';
import { HelperService } from '../../core/services/helper.service';
import { Product } from '@app/core/models/product.model';
import { TranslateService } from '@ngx-translate/core';
import { IProduct } from '../../core/interfaces/iproduct';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductsModalComponent } from '../products-modal/products-modal.component';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { Modal, BSModalContext } from 'ngx-modialog/plugins/bootstrap';
import { overlayConfigFactory } from 'ngx-modialog';
import { ProductsService } from '@app/products/products.service';
import { ProductFormService } from '@app/products/product-form/product-form.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  @Output() selectedProduct: Product;
  @Output() mode = 'update';
  param = { value: 'world' };
  filteredProducts: Product[];
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
    private modalService: NgbModal,
    private productsService: ProductsService,
    private productFormService: ProductFormService) {
    // this.products = this.helperService.getProducts();
    this.filteredProducts = this.products;
    this.searchText = '';
  }

  ngOnInit() {
    this.products = this.helperService.getProducts();
    // this.getProducts();
  }

  getProducts() {
    this.productsService.getAllProducts().subscribe(
      (products: Product[]) => this.products = products);
  }

  open(product: Product) {
    const modalRef = this.modalService.open(ProductsModalComponent);
    modalRef.componentInstance.selectedProduct = product;
  }

  confirmDelete(product: Product) {
    this.selectedProduct = product;
    const modal = this.modalService.open(DeleteModalComponent);
    modal.componentInstance.selectedProduct = product;
    this.products = this.helperService.getProducts();
  }

  performFilter(filterBy: string): Product[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Product) => product.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  setActiveProduct(product: Product) {
    this.selectedProduct = product;
    this.setMode('update');
    this.productsService.updateProduct(this.selectedProduct)
      .subscribe((x: any) => this.mode = 'new');
  }

  deleteProduct() {
    this.productsService.deleteProduct(this.selectedProduct.id).subscribe();
    this.productsService.getAllProducts(); // .subscribe();
  }
  setMode(mode: string) {
    this.mode = mode;
  }
}
