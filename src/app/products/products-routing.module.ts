import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from '@app/products/product-details/product-details.component';
import { ProductFormComponent } from '@app/products/product-form/product-form.component';

const routes: Routes = [
    Route.withShell([
        { path: 'products', component: ProductsComponent, data: { title: extract('Products') } },
        { path: 'product-details', component: ProductDetailsComponent, data: { title: extract('Product Details') } },
        { path: 'product-form', component: ProductFormComponent, data: { title: extract('Product Form') } }
    ])
];

@NgModule({
    imports: [RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    providers: []
})
export class ProductsRoutingModule { }
