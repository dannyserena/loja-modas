import { Observable } from 'rxjs/Observable';
import {HttpErrorResponse} from '@angular/common/http';
import 'rxjs/add/observable/throw';

export class ErrorHandler {
    //status do erro, mostra url que quero acessar
    static handlerError(error: HttpErrorResponse | any){

        let errorMessage: string;
            if(error instanceof HttpErrorResponse){
                const body = error.error
                errorMessage = `Erro ${error.status} ao acessar URL ${error.url}- ${error.statusText || ''} ${body}`
            }else{
                errorMessage =error.message ? error.message : error.toString();
            }

        console.log(errorMessage)
        return Observable.throw(errorMessage)
    }
}