import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '@env/environment';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AdministrationModule } from './administration/administration.module';
import { ProductsModule } from '@app/products/products.module';
import { HelperService } from '@app/core/helper.service';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PipesModule } from '@app/pipes/pipes.module';
import { AboutModule } from '@app/about/about.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgbModule.forRoot(),
    CoreModule,
    SharedModule,
    HomeModule,
    AboutModule,
    AdministrationModule,
    ProductsModule,
    LoginModule,
    AppRoutingModule,
    AdministrationModule,
    ProductsModule,
    PipesModule
  ],
  declarations: [AppComponent],
  providers: [],
  exports: [TranslateModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
