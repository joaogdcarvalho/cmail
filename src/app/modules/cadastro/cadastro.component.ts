import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpResponseBase, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { PageDataService } from 'src/app/services/page.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  mensagensErro = '';

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    username: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
    telefone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{4}-?[0-9]{4}[0-9]?')]),
    avatar: new FormControl('',[Validators.required],this.validaImagem.bind(this))
  })

  constructor(private httpClient: HttpClient,
    private roteador: Router,
    private pageDataService: PageDataService ) { }

  ngOnInit() {    
    // Definimos o titulo da página.
    this.pageDataService
    .defineTitulo('Login - CMail');
  }
  
  handleCadastrarUsuario(){

    if(this.formCadastro.valid){

      const userData = new User (this.formCadastro.value);

      this.httpClient
      .post('http://localhost:3200/users', userData)
      .subscribe(
        (response) => {
          console.log('Cadastrado com sucesso');
          this.formCadastro.reset()

          //após 1 segundo, redireciona para a rota de login
          setTimeout(() => {
            this.roteador.navigate(['']);
          }, 1000);
        }
        ,(responseError: HttpErrorResponse) => {
          //resposta caso existam erros!
          this.mensagensErro = responseError.error.body
        }
      )     
    }
    else{
      this.validarTodosOsCamposDoFormulario(this.formCadastro);
    }
  }

  validarTodosOsCamposDoFormulario(form: FormGroup){
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field);
      control.markAsTouched({ onlySelf: true});
    })
  }

  validaImagem(campoDoFormulario: FormControl) {
    //return new Promise(resolve => resolve());
    return this.httpClient
    .head(campoDoFormulario.value, {
      observe: 'response'
    })
    .pipe(
      map((response: HttpResponseBase) => {
        return response.ok ? null : { urlInvalida: true}
      }),
      catchError((error) => {
        return [{ urlInvalida: true}]
      })
    )
  }
}
