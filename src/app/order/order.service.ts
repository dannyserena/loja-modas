import { LoginService } from './../security/login/login.service';
import { LOJA_API } from './../app.api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CartItem } from './../loja-details/shopping-cart/cart-item.model';
import { ShoppingCartService } from './../loja-details/shopping-cart/shopping-cart.service';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Order } from './order.model';


@Injectable()
export class OrderService{
    constructor(private cartService: ShoppingCartService,
                private http: HttpClient,
                private loginService: LoginService){}

    /**expor itens fornecidos pelo carrinho  */
    cartItems(): CartItem[]{
        return this.cartService.items;
    }

    increaseQty(item: CartItem){
        this.cartService.increaseQty(item);
    }
    decreaseQty(item: CartItem){
        this.cartService.decreaseQty(item);
    }
    remove(item: CartItem){
        this.cartService.removeItem(item)
    }
    itemsValue():number{
        return this.cartService.total();
    }
    
    clear(){
        this.cartService.clear;
    }

    //fazer um post para uma determinada url
    checkOrder(order: Order): Observable<string>{
       let headers = new HttpHeaders();
       if(this.loginService.isLoggedIn()){
           headers = headers.set('Authorization', `Bearer ${this.loginService.user.accessToken}`)
       }
        return this.http.post<Order>(`${LOJA_API}/orders`, order, {headers:headers})
                        .map(order => order.id)
    }

}