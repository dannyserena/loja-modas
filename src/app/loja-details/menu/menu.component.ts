import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {MenuItem} from '../menu-item/menu-item.model';
import { LojasService } from 'src/app/lojas/lojas.service';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>

  constructor(private lojasService: LojasService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    //acessando menu via parente por a comunicação ocorreu via parente e nao no menu
    this.menu = this.lojasService
    .menuofLoja(this.route.parent.snapshot.params['id']);
  }
  //adiciona ao carrinhpo
  addMenuItem(item: MenuItem){
    console.log(item)
  }

}
