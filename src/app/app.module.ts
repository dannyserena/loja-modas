import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LojaDetailsComponent } from './loja-details/loja-details.component';
import { LojasComponent } from './lojas/lojas.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrderComponent } from './order/order.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { SecurityComponent } from './security/security.component';
import { MenuComponent } from './loja-details/menu/menu.component';
import { MenuItemComponent } from './loja-details/menu-item/menu-item.component';
import { ReviewsComponent } from './loja-details/reviews/reviews.component';
import { ShoppingCartComponent } from './loja-details/shopping-cart/shopping-cart.component';
import { LojaComponent } from './lojas/loja/loja.component';
import { OrderItemsComponent } from './order/order-items/order-items.component';
import { DeliveryCostsComponent } from './order/delivery-costs/delivery-costs.component';
import { LoginComponent } from './security/login/login.component';
import { InputComponent } from './shared/input/input.component';
import { MessageComponent } from './shared/message/message.component';
import { RadioComponent } from './shared/radio/radio.component';
import { RatingComponent } from './shared/rating/rating.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SnackbarComponent } from './shared/message/snackbar/snackbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LojaDetailsComponent,
    LojasComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    OrderComponent,
    OrderSummaryComponent,
    SecurityComponent,
    MenuComponent,
    MenuItemComponent,
    ReviewsComponent,
    ShoppingCartComponent,
    LojaComponent,
    OrderItemsComponent,
    DeliveryCostsComponent,
    LoginComponent,
    InputComponent,
    MessageComponent,
    RadioComponent,
    RatingComponent,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
