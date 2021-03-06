import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { OrderItemsComponent } from './order-items/order-items.component';
import { OrderComponent } from './order.component';
import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component';

import { NgModule } from '@angular/core';

const ROUTES: Routes = [
    {path:'', component: OrderComponent}
]

//SharedModule importa todos os modulos compartilhados, ngif, input etc
@NgModule({
    declarations:[OrderComponent, OrderItemsComponent,DeliveryCostsComponent],
    imports: [SharedModule, RouterModule.forChild(ROUTES)]
})
export class OrderModule{}