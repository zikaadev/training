import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { TranslateModule } from '@ngx-translate/core';
import { FindByName } from '../pipes/find-by-name.pipe';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '@app/pipes/pipes.module';


@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    PipesModule
  ],
  declarations: [
    LoaderComponent
  ],
  exports: [
    LoaderComponent,
    TranslateModule,
    FormsModule,
    FindByName
  ],
  providers: [FindByName]
})
export class SharedModule { }
