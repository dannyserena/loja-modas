import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { trigger, animate, style, transition, state } from '@angular/animations';

import { Loja } from './loja/loja.model';
import { LojasService } from './lojas.service';
import 'rxjs/add/operator/switchMap';
import { switchMap } from 'rxjs/operators';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/from';
import { Observable } from 'rxjs/internal/Observable';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs/internal/observable/throwError';

@Component({
  selector: 'app-lojas',
  templateUrl: './lojas.component.html',
  styleUrls: ['./lojas.component.css'],
  animations:[
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0,
        "max-height": "0px"
      })),
      state('visible', style({
        opacity: 1,
        "max-height": "70px",
        "margin-top": "20px"
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class LojasComponent implements OnInit {


  searchBarState = 'hidden';
  lojas: Loja[]
  
  searchForm: FormGroup;
  searchControl: FormControl;

  constructor(private lojasService: LojasService,
              private fb:FormBuilder) { }

  ngOnInit() {

    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })
    this.searchControl.valueChanges
    .pipe(debounceTime(500),distinctUntilChanged())//trata diferença entre pesquisas
    .pipe(switchMap(searchTerm => 
      this.lojasService
      .lojas(searchTerm)
      // .catch(error=>Observable.from([]))))
      .pipe(catchError(this.erroHandler))))
      .subscribe(lojas => this.lojas = lojas)

      //retorna observable necessario subscribe
      this.lojasService.lojas()
      .subscribe(lojas => this.lojas = lojas)

  }
  erroHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server Error');
  }
  //trocando o estado da toggleBar
  toggleSearch(){
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden'
  }
}
