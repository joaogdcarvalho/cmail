export class Email {
    destinatario = '';
    assunto = '';
    conteudo = '';
    dataDeEnvio = '';
    id = ''; //Propriedade id!
    constructor (
    { destinatario, assunto, conteudo, dataDeEnvio, id}: //id aqui
    { destinatario: string, assunto: string, conteudo: string, dataDeEnvio: string, id: string }
    //tipo do id aqui
    ){
    this.destinatario = destinatario;
    this.assunto = assunto;
    this.conteudo = conteudo;
    this.dataDeEnvio = dataDeEnvio;
    this.id = id; //id aqui
    }
    get introducaoDoConteudo() {
    return this.conteudo.substr(0, 140) + '...'

}
}