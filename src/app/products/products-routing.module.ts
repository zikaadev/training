import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from '@app/products/product-details/product-details.component';

const routes: Routes = [
    Route.withShell([
        { path: 'products', component: ProductsComponent, data: { title: extract('Products') } },
        { path: 'product-details', component: ProductDetailsComponent, data: { title: extract('Product Details') } }
    ])
];

@NgModule({
    imports: [RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    providers: []
})
export class ProductsRoutingModule { }
