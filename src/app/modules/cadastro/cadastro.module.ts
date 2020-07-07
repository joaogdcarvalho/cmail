import {NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import {CadastroComponent } from './cadastro.component';
import {CmailFormGroupComponent } from 'src/app/components/cmail-form-group/cmail-form-group.component';
import {CmailFormFieldDirective } from 'src/app/components/cmail-form-group/cmail-form-field.directive';
import { SharedComponentModule } from 'src/app/components/shared-components.module';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { CMailFormModule } from '../../components/cmail-form-group/cmail-form.module';

@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedComponentModule,
    CMailFormModule,
    CadastroRoutingModule,
    HttpClientModule
  ],
})

export class CadastroModule { }