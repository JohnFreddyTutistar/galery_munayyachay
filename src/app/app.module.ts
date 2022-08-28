import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GaleryImgComponent } from './galery/galery-img/galery-img.component';
import { ImgComponentComponent } from './imgComponent/imgComponent.component';

const routes: Routes = [
  { 
    path: 'compGalery', 
    component: ImgComponentComponent 
  }
];

@NgModule({
  declarations: [	
    AppComponent,
    GaleryImgComponent,
    ImgComponentComponent
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
