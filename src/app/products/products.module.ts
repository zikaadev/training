import { NgModule } from '@angular/core';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from '@app/pipes/pipes.module';
import { FindByName } from '@app/pipes/find-by-name.pipe';
import { CommonModule } from '@angular/common';
import { ProductsModalComponent } from './products-modal/products-modal.component';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductFormComponent } from './product-form/product-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    SharedModule,
    TranslateModule,
    ProductsRoutingModule,
    PipesModule,
    CommonModule,
    NgbModule.forRoot(),
    NgbModalModule,
    HttpClientModule
  ],
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
    ProductsModalComponent,
    ProductFormComponent
  ],
  entryComponents: [ProductsModalComponent],
  providers: [FindByName],
  exports: []
})
export class ProductsModule { }
