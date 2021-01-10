import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'loja-modas',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  content = 'Bem-Vindo ao Blue Modas App!'
  constructor() { }

  ngOnInit() {
  }
}
