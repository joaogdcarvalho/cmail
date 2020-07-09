import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class HeaderDataService {
    valorDoFiltro = new Subject<string>();

    constructor(){
    this.atualizarTermoDeFiltro('')
    }

    atualizarTermoDeFiltro(novoValor: string) {
    this.valorDoFiltro.next(novoValor)
    }
}