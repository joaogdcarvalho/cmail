import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
