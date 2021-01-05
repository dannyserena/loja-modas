import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Loja } from './loja.model';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css'],
   /**trigger vai chamar as franquias da BlueModas com os estados */
   animations: [
    trigger('lojaAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-30px, -10px)'}),
        animate('300ms 0s ease-in-out')
      ])
    ])
  ]
})
export class LojaComponent implements OnInit {

  lojaState = 'ready';

//Loja criado no model como um dado representativo
  @Input() loja: Loja

  constructor() { }

  ngOnInit() {
  }

}
