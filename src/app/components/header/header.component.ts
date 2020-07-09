import { Component } from "@angular/core";
import { PageDataService } from 'src/app/services/page.service';
import { HeaderDataService } from 'src/app/services/header.service';

@Component ({
    selector: 'cmail-header',
    templateUrl: './header.component.html',
    styleUrls:[
        './header.component.css',
        './header-search.css'
    ]
})

export class HeaderComponent{
    private _isMenuOpen = false

     // Restante do código omitido.
     tituloDaPagina = 'CMail'; // Nova propriedade.
     
     // Injeção de PageDataService.
     constructor(private pageService: PageDataService, private headerService: HeaderDataService){
         
        // Assinando titulo de PageDataService.
        this.pageService
        .titulo
        .subscribe(novoTitulo => this.tituloDaPagina = novoTitulo);
    }

    get isMenuOpen() {
        return this._isMenuOpen
    }

    toggleMenu() {
        this._isMenuOpen = !this._isMenuOpen
    }

    handleBuscaChanges({ target }) {
        this.headerService.atualizarTermoDeFiltro(target.value)
    }
}