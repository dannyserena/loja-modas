import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Loja } from '../lojas/loja/loja.model';
import { LojasService } from '../lojas/lojas.service';

@Component({
  selector: 'app-loja-details',
  templateUrl: './loja-details.component.html',
  styleUrls: ['./loja-details.component.css']
})
export class LojaDetailsComponent implements OnInit {
  loja: Loja;

  constructor(private lojasService: LojasService,
              private route: ActivatedRoute) { }
/*"loja =>" Observable  "this.loja" seu objeto
"loja" e o conteudo da resposta que sera convertida para "this.loja" */
  ngOnInit() {
    console.log(this.route.snapshot.params['id'])
    this.lojasService.lojaById(this.route.snapshot.params['id'])
      .subscribe(loja => this.loja = loja)
  }

}