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

@NgModule({
  imports: [
    SharedModule,
    TranslateModule,
    ProductsRoutingModule,
    PipesModule,
    CommonModule
  ],
  declarations: [
    ProductsComponent,
    ProductDetailsComponent
  ],
  providers: [FindByName],
  exports: []
})
export class ProductsModule { }
