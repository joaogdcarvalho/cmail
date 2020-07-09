import	{	BrowserModule	}	from	'@angular/platform-browser';
import	{	NgModule	}	from	'@angular/core';
import	{	AppComponent	}	from	'./app.component';
import	{	AppRoutingModule	}	from	'./app-routing.module';
import { HttpClientModule } from '@angular/common/http'; 
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';
import { FiltroPorAssunto } from './modules/caixa-de-entrada/filtro-por-assunto.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CaixaDeEntradaComponent,
    FiltroPorAssunto
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, //importou!
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }