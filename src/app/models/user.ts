export class User {

    name = '';
    username = '';
    password = '';
    phone = '';
    avatar = '';

    constructor({nome, username, password, telefone, avatar}){
        this.name = nome;
        this.username = username;
        this.password = password;
        this.phone = telefone;
        this.avatar = avatar;
    }
}