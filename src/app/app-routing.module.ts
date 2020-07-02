import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './modules/login/login.component';
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { NgModule }	from '@angular/core';

const rotas: Routes	=	[
	{
		path: 'cadastro',
		loadChildren: () =>	import('./modules/cadastro/cadastro.module').then(m	=> m.CadastroModule)
	},
	{
		path: 'login',
		loadChildren: () =>	import('./modules/login/login.module').then(m => m.LoginModule)
	},
	{
		path: 'caixa-de-entrada',
		loadChildren: () =>	import('./modules/caixa-de-entrada/caixa-de-entrada.module').then(m => m.CaixaDeEntradaModule)
	},
	{
		path: ''
		,pathMatch: 'full'
	},
	{
		path: '**'
		,redirectTo: ''
		,pathMatch:	'full'
	}
]

@NgModule({
	imports: [
		RouterModule.forRoot(rotas)
	],
	exports: [ RouterModule ]
})

export class AppRoutingModule{}