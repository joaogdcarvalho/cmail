import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styles: [' ul, li { margin: 0; padding: 0; list-style-type:none; } ']
})
export class CaixaDeEntradaComponent {

  private _isNewEmailFormOpen = false;

  emailList = [];
  email = {
    destinatario: '',
    assunto: '',
    conteudo: ''
  }

  //injetar emailservice
  constructor (private emailService: EmailService){}

  get isNewEmailFormOpen() {
    return this._isNewEmailFormOpen;
  }

  toggleNewEmailForm() {
    this._isNewEmailFormOpen = !this.isNewEmailFormOpen
  }

  handleNewEmail(formEmail: NgForm) {

    if (formEmail.invalid) return;
    
    this.emailService
    .enviar(this.email)
    .subscribe(
      emailApi => {
        //Fazemos todas as outras operações após o OK da API
        this.emailList.push(emailApi)
        this.email = {destinatario: '', assunto: '', conteudo: ''}
        formEmail.reset();
      }
      ,erro => console.error(erro)
    )
  }
}