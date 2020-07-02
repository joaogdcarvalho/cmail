import	{	NgModule	}	from	'@angular/core';
import	{	Routes,	RouterModule	}	from	'@angular/router';
import { CadastroComponent } from 'src/app/modules/cadastro/cadastro.component';
import { CmailFormGroupComponent } from './cmail-form-group.component';
import { CmailFormFieldDirective } from './cmail-form-field.directive';

const	rotasCadastro:	Routes	=	[
	{path:	'',	component:	CadastroComponent}
]
@NgModule({
	imports:	[
			RouterModule.forChild(rotasCadastro)
	],
	exports:[
			RouterModule,
			CmailFormGroupComponent,
			CmailFormFieldDirective
	]
})
export class	CadastroRoutingModule	{}