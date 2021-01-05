// import { NotificationService } from './../../shared/message/notification.service';
import { MenuItem } from './../menu-item/menu-item.model';
import { CartItem } from './cart-item.model';
import { Injectable } from '@angular/core';
import { NotificationService } from 'src/app/shared/message/notification.service';

//serviço que recebe algo é marcado com Injectable
@Injectable()
export class ShoppingCartService {

    //CartItem vem la do cart-item.model
    items: CartItem[]= [];

    //serviço de notificação incluso para notificar adição de itens no carrinho
    constructor(private notificationService: NotificationService){

    }

    //metodo para limpar os itens do carrinho, recebearray vazia
    clear(){
            this.items = [];
    }
    //adiciona Item do menu e procura se ja tem item do menu no carrinho para incrementar
    addItem(item:MenuItem){
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)
            if(foundItem){
                this.increaseQty(foundItem)
            }else {
                //se nao encontrou nada adiciona item do menu
                this.items.push(new CartItem(item));
            }
            this.notificationService.notify(`Você adicionou o item ${item.name} ao carrinho!`)
    }
    //metodo tbm utilizado em order.service
    increaseQty(item: CartItem){
        item.quantity = item.quantity + 1;
    }
    //metodo tbm utilizado em order.service para decrementar o item
    decreaseQty(item: CartItem){
        item.quantity = item.quantity - 1;
        //se a qtd do item chegar a 0 tem que ser removido do carrinho
        if(item.quantity === 0){
            this.removeItem(item);
        }
    }
    //remove do carrinho
    removeItem(item:CartItem){
        this.items.splice(this.items.indexOf(item), 1);
        this.notificationService.notify(`Você removeu o item ${item.menuItem.name}!`)

    }
    //metodo para contabilizar os pedidos do carrinho
    total(): number{
        /*substituindo o item pelo valor, trocando valor de cartitem para 
        um array de numeros e o reduce soma os dois valores */
        return this.items
            .map(item => item.value())
            .reduce((prev, value)=> prev+value, 0)
    }
}