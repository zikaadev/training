import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './administration.component';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        AdministrationRoutingModule
    ],
    declarations: [
        AdministrationComponent
    ]
})

export class AdministrationModule { }
