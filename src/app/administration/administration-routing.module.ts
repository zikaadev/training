import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { AdministrationComponent } from './administration.component';

const routes: Routes = [
    Route.withShell([
        { path: 'administration', component: AdministrationComponent, data: { title: extract('Administration') } }
    ])
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class AdministrationRoutingModule { }
