import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SharedComponentModule } from 'src/app/components/shared-components.module';

@NgModule({
    declarations: [LoginComponent],
    imports: [CommonModule,SharedComponentModule]
})

export class LoginModule { }