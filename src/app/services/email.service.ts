import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Email } from '../models/emails';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
    }
)

    export class EmailService {

        api = 'http://localhost:3200/emails';
        cabecalho = new HttpHeaders({ 'Authorization': localStorage.getItem('TOKEN')});

        constructor(private http: HttpClient){}

        enviar({destinatario, assunto, conteudo}){

            const emailParaApi = {
                to: destinatario,
                subject: assunto,
                content: conteudo
            }

            return this.http
            .post(this.api, emailParaApi, { headers: this.cabecalho })
            .pipe<Email>(
                map(
                    (emailApi: any) => {
                        return new Email({
                            destinatario: emailApi.to,
                            assunto: emailApi.subject,
                            conteudo: emailApi.content,
                            dataDeEnvio: emailApi.created_at
                        })
                    }
                )
            )
        }
    }