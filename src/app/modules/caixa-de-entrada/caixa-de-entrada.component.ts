import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
import { PageDataService } from 'src/app/services/page.service';
import { HeaderDataService } from 'src/app/services/header.service';

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
  };
  termoParaFiltro = '';
  
  // Injetamos PageDataService.
  constructor(private emailService: EmailService,
    private pageDataService: PageDataService, private headerService: HeaderDataService) {}
    
    ngOnInit() {
      this.emailService
      .listar()
      .subscribe(
        lista => {
          this.emailList = lista;
        })
        
        // Definimos o titulo da página.
        this.pageDataService
        .defineTitulo('Caixa de entrada - CMail');

        this.headerService
        .valorDoFiltro
        .subscribe(novoValor => this.termoParaFiltro = novoValor)
    }

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

  //recebe emailID no segundo parâmetro
  handleRemoveEmail(eventoVaiRemover, emailId){
    console.log(eventoVaiRemover);
    if (eventoVaiRemover.status === 'removing'){
      this.emailService
      .deletar(emailId)
      .subscribe(
        res => {
          console.log(res);
          //remove o email da lista de emails depois dela ser apagada da API
          this.emailList = this.emailList.filter(email => email.id != emailId);
        }
        ,err => console.error(err)
        )
      }
  }

  filtrarEmailsPorAssunto() {
    const termoParaFiltroEmMinusculo = this.termoParaFiltro.toLowerCase();
    return this.emailList.filter( email => {
    const assunto = email.assunto.toLowerCase()
    return assunto.includes(termoParaFiltroEmMinusculo)
    })
    }
}