import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

 //envio um número toda vez que o valor for setado
 @Output() rated = new EventEmitter<number>()

 //array que representa as estrelas(avaliação do pedido)
   rates: number[] = [1,2,3,4,5];
 
   rate: number = 0;
   previousRate: number;
 
   constructor() { }
 
   ngOnInit() {
   }
 
   setRate(r: number){
     this.rate = r;
     this.previousRate = undefined;
     this.rated.emit(this.rate);
   }
   setTemporaryRate(r: number){
     if(this.previousRate === undefined){
       this.previousRate = this.rate;
     }
     this.rate = r;
   }
   clearTemporaryRate(){
     //passa o rate pro valor antigo e limpa previourate
     if(this.previousRate !== undefined){
       this.rate = this.previousRate
       this.previousRate = undefined;
     }
   }

}

