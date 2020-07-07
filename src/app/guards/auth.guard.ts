import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private roteador: Router){}
    canActivate(): boolean {
        if(localStorage.getItem('TOKEN')){
            return true;
        }
        else {
            this.roteador.navigate([''])
            return false
        }
    }
}