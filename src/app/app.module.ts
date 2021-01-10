import { ShoppingCartService } from './loja-details/shopping-cart/shopping-cart.service';
import { NotificationService } from './shared/message/notification.service';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, ROUTES } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LojaDetailsComponent } from './loja-details/loja-details.component';
import { LojasComponent } from './lojas/lojas.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrderComponent } from './order/order.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { MenuComponent } from './loja-details/menu/menu.component';
import { MenuItemComponent } from './loja-details/menu-item/menu-item.component';
import { ReviewsComponent } from './loja-details/reviews/reviews.component';
import { ShoppingCartComponent } from './loja-details/shopping-cart/shopping-cart.component';
import { LojaComponent } from './lojas/loja/loja.component';
import { OrderItemsComponent } from './order/order-items/order-items.component';
import { DeliveryCostsComponent } from './order/delivery-costs/delivery-costs.component';
import { LoginComponent } from './security/login/login.component';
// import { InputComponent } from './shared/input/input.component';
// import { RadioComponent } from './shared/radio/radio.component';
// import { RatingComponent } from './shared/rating/rating.component';
import { HttpClientModule } from '@angular/common/http';
import { PreloadAllModules, RouterModule } from '@angular/router';
// import { SnackbarComponent } from './shared/message/snackbar/snackbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { LojasService } from './lojas/lojas.service';
import { OrderService } from './order/order.service';
import { LoginService } from './security/login/login.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    MenuComponent,
    MenuItemComponent,
    ReviewsComponent,
    ShoppingCartComponent,
    LojaComponent,
    OrderItemsComponent,
    DeliveryCostsComponent,
    LoginComponent,
    // InputComponent,
    // RadioComponent,
    // RatingComponent,
    // SnackbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SharedModule.forRoot(), //importe de componentes compartilhados + serviços
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules}), FontAwesomeModule,
      // NgbModule.forRoot()
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},
    NotificationService,ShoppingCartService,LojasService,OrderService,LoginService,
    {provide:LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
