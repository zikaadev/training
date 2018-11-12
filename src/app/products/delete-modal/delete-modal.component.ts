import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '@app/core/models/product.model';
import { ProductsService } from '@app/products/products.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent {

  @Input() selectedProduct: Product;
  param = { value: 'world' };

  constructor(
    public activeModal: NgbActiveModal,
    private productsService: ProductsService) { }

  delete(selectedProduct: Product) {
    this.productsService.deleteProduct(this.selectedProduct.id);
    this.activeModal.dismiss();
  }
}
