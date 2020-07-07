import	{	NgModule	}	from	'@angular/core';
import	{	Routes,	RouterModule	}	from	'@angular/router';
import { CadastroComponent } from 'src/app/modules/cadastro/cadastro.component';
import { CmailFormGroupComponent } from './cmail-form-group.component';
import { CmailFormFieldDirective } from './cmail-form-field.directive';
import { CommonModule } from '@angular/common';

const	rotasCadastro:	Routes	=	[
	{path:	'',	component:	CadastroComponent}
]
@NgModule({
	declarations: [
		CmailFormGroupComponent,
		CmailFormFieldDirective
	],
	imports:	[
			RouterModule.forChild(rotasCadastro),
			CommonModule
	],
	exports:[
			RouterModule,
			CmailFormGroupComponent,
			CmailFormFieldDirective
	]
})
export class	CMailFormModule	{}