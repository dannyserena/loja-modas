/*um serviço receber outro serviço deve marcar como @INJECTABLE decorator */
import {Injectable} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { MenuItem } from '../loja-details/menu-item/menu-item.model';
import { Loja } from './loja/loja.model';
import { LOJA_API } from '../app.api';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class LojasService {


    
    constructor (private http: HttpClient){}
//array de lojas
    lojas(search?: string): Observable<Loja[]>{
      let params: HttpParams = undefined;
      if(search){
        params = new HttpParams().append('q', search)
      }
       return this.http.get<Loja[]>(`${LOJA_API}/lojas`, {params: params})
     }
    //listando lojas
    lojaById(id: string): Observable<Loja>{
      return this.http.get<Loja>(`${LOJA_API}/lojas/${id}`)
      
    } 
    //trazendo o reviews com pipe de cada franquia para consumir no reviews
    reviewsofLoja(id: string): Observable<any>{
      return this.http.get(`${LOJA_API}/lojas/${id}/reviews`)
      
    }
    //metodo para buscar do parent
    menuofLoja(id: string): Observable<MenuItem[]>{
      return this.http.get<MenuItem[]>(`${LOJA_API}/lojas/${id}/menu`)
        
    }
}
