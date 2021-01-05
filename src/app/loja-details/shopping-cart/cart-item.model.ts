import { MenuItem } from './../menu-item/menu-item.model';
export class CartItem {
    //public cria propriedade que da para ser acessada por outros objetos
    constructor (public menuItem: MenuItem,
                 public quantity: number = 1){}
//metodo para totalizar o valor de compras do carrinho
    value(): number {
        return this.menuItem.price * this.quantity;
    }
}