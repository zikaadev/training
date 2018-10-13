import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '@app/core/models/product';

@Component({
  selector: 'app-products-modal',
  templateUrl: './products-modal.component.html',
  styleUrls: ['./products-modal.component.scss']
})
export class ProductsModalComponent {
  @Input() selectedProduct: Product;
  @Input() modalState = false;
  @Output() confirm = new EventEmitter<Product>();
  @Output() cancel = new EventEmitter<boolean>();
  constructor() { }

  setCancel() {
    this.modalState = false;
    this.cancel.emit(true);
  }

  setActive(selectedProduct: Product) {
    this.selectedProduct = selectedProduct;
  }
}
