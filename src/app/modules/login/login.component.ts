import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  mensagemErro: '';
  login = {
    email: '',
    password: ''
  }

  constructor ( private loginService: LoginService, private roteador: Router ) { }

  ngOnInit() {
  }
  
  handleLogin(formLogin: NgForm){
    if(formLogin.valid) {
      this.loginService
      .logar(this.login)
      .subscribe(
        () => this.roteador.navigate(['/inbox'])
        ,(responseError: HttpErrorResponse) => this.mensagemErro = responseError.error
      )
    }
  }
}

/*
  handleLogin(formLogin: NgForm){
    if(formLogin.valid){
      this.httpClient
      .post('http://localhost:3200/login', this.login)
      .subscribe(
        (response) => {
          console.log(response);
          console.log('deu certo');
        },
        (error) => {
          console.error(error);
          console.log('deu ruim');
        }
        )
      }

      (responseError: HttpErrorResponse) => {
        this.mensagemErro = responseError.error.body
        }

      (response: any) => {
        localStorage.setItem('cmail-token',response.token);
        }

    }

}
*/
