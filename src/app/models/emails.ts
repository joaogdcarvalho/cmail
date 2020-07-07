export class Email {
    destinatario = '';
    assunto = '';
    conteudo = '';
    dataDeEnvio = '';
    
    constructor(
        { destinatario, assunto, conteudo, dataDeEnvio}:
        { destinatario: string, assunto: string, conteudo: string, dataDeEnvio: string }
        ){
            this.destinatario = destinatario;
            this.assunto = assunto;
            this.conteudo = conteudo;
            this.dataDeEnvio = dataDeEnvio;
        }

        get introducaoDoConteudo() {
            return this.conteudo.substr(0,140) + '...'
        }
    }