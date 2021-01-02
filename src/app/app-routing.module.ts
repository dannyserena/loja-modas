import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LojaDetailsComponent } from './loja-details/loja-details.component';
import { MenuComponent } from './loja-details/menu/menu.component';
import { ReviewsComponent } from './loja-details/reviews/reviews.component';
import { LojasComponent } from './lojas/lojas.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { LoginComponent } from './security/login/login.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
    {path:'login', component: LoginComponent},
    //referencia do lazyLoad
    {path:'about', loadChildren: './about/about.module#AboutModule'},
    {path:'lojas', component: LojasComponent},
    //acessando apps filhas com children
    {path:'lojas/:id', component: LojaDetailsComponent,
    
        children:[ //exibe componente padrao igual ao home com redirectTo
            {path:'', redirectTo: 'menu', pathMatch:'full'},
            {path: 'menu', component: MenuComponent},
            {path: 'reviews', component: ReviewsComponent}
        ]},
    {path: 'order', loadChildren: './order/order.module#OrderModule'},
    {path: 'order-summary', component: OrderSummaryComponent},
    {path:'**', component: NotFoundComponent} //Wildcard deve ficar no fim
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
