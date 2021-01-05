import { trigger, state,transition, style, animate } from '@angular/animations';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MenuItem } from './menu-item.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
  animations: [
    trigger('menuItemAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translateY(-20px)'}),
        animate('300ms 0s ease-in')
      ])
    ])
  ]
})
export class MenuItemComponent implements OnInit {


  menuItemState = 'ready';

@Input() menuItem: MenuItem;
//evento de saida do botao adicionar que vai emitir o evento de adicionar
@Output() add = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  //evento adicionar menu-item
  emitAddEvent(){
      this.add.emit(this.menuItem)
  }

}
