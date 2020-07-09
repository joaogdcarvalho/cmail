import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'cmail-cmail-list-item',
  templateUrl: './cmail-list-item.component.html',
  styles: []
})
export class CmailListItemComponent implements OnInit {

  @Input () destinatario = '';
  @Input() assunto = '';
  @Input() introducaoDoConteudo = '';
  @Input() dataDeEnvio = '';
  //Nova propriedade
  @Output('eventoVaiRemover') vaiRemover = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  removeEmail(click: Event){
    console.log('Clicou no botão remover!')
    //Emite eventoVaiRemover e ainda manda um status
    if(confirm('Tem certeza?')) {
      this.vaiRemover.emit({ status: 'removing' })   
    }
  }

}