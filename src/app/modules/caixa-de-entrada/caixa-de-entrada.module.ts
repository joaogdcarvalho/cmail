import{ NgModule } from '@angular/core';
import{ CommonModule } from '@angular/common';
import{ FormsModule } from '@angular/forms';
import{ CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { SharedComponentModule } from 'src/app/components/shared-components.module';

@NgModule({
    declarations: [ CaixaDeEntradaComponent ],
    imports: [
    CommonModule,
    FormsModule,
    SharedComponentModule
    ]
    })

export class CaixaDeEntradaModule { }