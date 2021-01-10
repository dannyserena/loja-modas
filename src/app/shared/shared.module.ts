import { LoginService } from './../security/login/login.service';
import { NotificationService } from './message/notification.service';
import { LojasService } from './../lojas/lojas.service';
import { ShoppingCartService } from './../loja-details/shopping-cart/shopping-cart.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RatingComponent } from './rating/rating.component';
import { RadioComponent } from './radio/radio.component';
import { InputComponent } from './input/input.component';
import { SnackbarComponent } from './message/snackbar/snackbar.component';
import { OrderService } from '../order/order.service';


//Criando modulo compartilhado
@NgModule({
    declarations:[InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
    imports:[CommonModule, FormsModule, ReactiveFormsModule],
    exports: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent,
              CommonModule, FormsModule, ReactiveFormsModule ]

})

export class SharedModule {
//função para adicionar serviços ao modulo compartilhado
static forRoot(): ModuleWithProviders{
    return{
        ngModule: SharedModule, 
        providers: [
            OrderService, 
            ShoppingCartService, 
            LojasService, 
            NotificationService, 
            LoginService]
    }
}
}