import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GaleryImgComponent } from './galery/galery-img/galery-img.component';
import { ImgComponentComponent } from './imgComponent/imgComponent.component';
import { ViewGaleryComponent } from './ViewGalery/ViewGalery.component';

const routes: Routes = [
  { 
    path: 'compGalery', 
    component: ViewGaleryComponent
  }
];

@NgModule({
  declarations: [		
    AppComponent,
    GaleryImgComponent,
    ImgComponentComponent,
      ViewGaleryComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
