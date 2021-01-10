import { CartItem } from './../../loja-details/shopping-cart/cart-item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.css']
})
export class OrderItemsComponent implements OnInit {

/*criar eventos para adicinar ou remover items do carrinho, incrementar, decrementar e excluir pedido */

@Input() items: CartItem[];

@Output() increaseQty = new EventEmitter<CartItem>();
@Output() decreaseQty = new EventEmitter<CartItem>();
@Output() remove = new EventEmitter<CartItem>();

constructor() { }

ngOnInit() {
}
//incrementar o item do carrinho
emitIncreaseQty(item: CartItem){
  this.increaseQty.emit(item);
}
//decrementar item do carrinho
emitDecreaseQty(item: CartItem){
  this.decreaseQty.emit(item);
}
//remove item do carrinho
emitRemove(item: CartItem){
  this.remove.emit(item)
}

}



