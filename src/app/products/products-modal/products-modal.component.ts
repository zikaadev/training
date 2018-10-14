import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '@app/core/models/product';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-products-modal',
  templateUrl: './products-modal.component.html',
  styleUrls: ['./products-modal.component.scss']
})
export class ProductsModalComponent {
  @Input() selectedProduct: Product;

  constructor(public activeModal: NgbActiveModal) { }

}
