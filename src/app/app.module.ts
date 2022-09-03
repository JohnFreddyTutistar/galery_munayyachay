import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GaleryImgComponent } from './galery/galery-img/galery-img.component';
import { ImgComponentComponent } from './imgComponent/imgComponent.component';
import { ViewCarrosasComponent } from './viewGalery/ViewCarrosas/ViewCarrosas.component';

@NgModule({
  declarations: [		
    AppComponent,
    GaleryImgComponent,
    ImgComponentComponent,
    ViewCarrosasComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
