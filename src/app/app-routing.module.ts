import { OrderComponent } from './order/order.component';
import { AboutComponent } from './about/about.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LojaDetailsComponent } from './loja-details/loja-details.component';
import { MenuComponent } from './loja-details/menu/menu.component';
import { ReviewsComponent } from './loja-details/reviews/reviews.component';
import { LojasComponent } from './lojas/lojas.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { LoginComponent } from './security/login/login.component';


export const ROUTES: Routes =  [
  {path:'', component: HomeComponent},
    {path:'login', component: LoginComponent},
    //referencia do lazyLoad
    {path:'about', component: AboutComponent},
    {path:'lojas', component: LojasComponent},
    //acessando apps filhas com children
    {path:'lojas/:id', component: LojaDetailsComponent,
    
        children:[ //exibe componente padrao igual ao home com redirectTo
            {path:'', redirectTo: 'menu', pathMatch:'full'},
            {path: 'menu', component: MenuComponent},
            {path: 'reviews', component: ReviewsComponent}
        ]},
    {path: 'order', component: OrderComponent},
    {path: 'order-summary', component: OrderSummaryComponent},
    {path:'**', component: NotFoundComponent} //Wildcard deve ficar no fim
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
