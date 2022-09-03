import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GaleryImgComponent } from './galery/galery-img/galery-img.component';
import { ViewCarrosasComponent } from './viewGalery/ViewCarrosas/ViewCarrosas.component';

const routes: Routes = [
  { path: '', component: GaleryImgComponent },
  { path: 'carrosas', component: ViewCarrosasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
