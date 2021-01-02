
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'gt-home',
  templateUrl: './home.component.html',
  animations: [
    trigger('homeAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translateY(-20px)'}),
        animate('300ms 0s ease-in')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  homeState = 'ready';
 //imagePath = '/assets/img/welcome.png';
  constructor() { }

  ngOnInit() {
  }

}