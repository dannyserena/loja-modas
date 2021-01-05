import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule, Routes } from '@angular/router';

//criando a rota do modulo
const ROUTES: Routes = [
  {path: '', component: AboutComponent}

]


//utilizando lazy-Loading no modulo sobre
@NgModule({ //import de rotas com base no filho forChild e nao no forRoutes
  declarations:[AboutComponent],
  imports: [RouterModule.forChild(ROUTES)]
})
export class AboutModule{}