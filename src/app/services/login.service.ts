import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class LoginService {
    
    api = 'http://localhost:3200/login'

    constructor(private http: HttpClient){
    }
    
    logar(dadosLogin){
        return this.http
        .post(this.api, dadosLogin)
        .pipe(
            map( (response: any) => {
                localStorage.setItem('TOKEN', response.token);
                return response;
            })
        )
    }
}