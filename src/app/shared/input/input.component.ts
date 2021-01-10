import { Component, ContentChild, Input, OnInit } from '@angular/core';
import { FormControlName, NgModel } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input() label:string;
  @Input() errorMessage: string;
  @Input() showTip: boolean = true;

  input: any;

  @ContentChild(NgModel) model: NgModel;
  @ContentChild(FormControlName) control: FormControlName;
    constructor() { }

    ngOnInit() {
  }
/** Metodo ue vai ser chamado quando o conteudo for definido */
    ngAfterContentInit(){
      this.input = this.model || this.control
        if(this.input === undefined){
           throw new Error('Esse componente precisa ser usado com uma diretiva ngModel ou FormControlName');
        }
    }
    hasSucess(): boolean{
        return this.input.valid && (this.input.dirty || this.input.touched);
    }
    hasError():boolean{
        return this.input.invalid && (this.input.dirty || this.input.touched);
    }

}
