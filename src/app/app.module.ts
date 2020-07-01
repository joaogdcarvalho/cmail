import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';
import { LoginComponent } from './modules/login/login.component';

import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { ModuloRoteamento } from './app.routes';
import { CmailFormGroupComponent } from './components/cmail-form-group/cmail-form-group.component'; //Importação da referência
import { CmailFormFieldDirective } from './components/cmail-form-group/cmail-form-field.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CaixaDeEntradaComponent,
    LoginComponent,
    CadastroComponent,
    CmailFormGroupComponent,
    CmailFormFieldDirective // importante utilizar intelisense para importação ser carregada acima!
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ModuloRoteamento, //módulo de roteamento aqui!
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
