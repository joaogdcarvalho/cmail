import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SharedComponentModule } from 'src/app/components/shared-components.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CmailFormGroupComponent } from 'src/app/components/cmail-form-group/cmail-form-group.component';
import { CmailFormFieldDirective } from 'src/app/components/cmail-form-group/cmail-form-field.directive';
import { LoginRoutingModule } from './login-routing-module';
import { LoginService } from 'src/app/services/login.service';
import { CMailFormModule } from 'src/app/components/cmail-form-group/cmail-form.module';

@NgModule(
    {
        declarations: [LoginComponent]
        ,imports: [
            CommonModule,
            SharedComponentModule,
            HttpClientModule,
            FormsModule,
            LoginRoutingModule,
            CMailFormModule
        ]
        ,providers: [
            LoginService
        ]
    }
)

export class LoginModule { }