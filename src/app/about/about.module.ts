import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { Routes } from '@angular/router';

//criando a rota do modulo
const ROUTES: Routes = [
  {path: '', component: AboutComponent}

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AboutModule { }
