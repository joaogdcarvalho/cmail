import { Routes, RouterModule } from "@angular/router";
/*
import { LoginComponent } from './modules/login/login.component';
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
*/
import { NgModule }	from '@angular/core';
import { AuthGuard } from './guards/auth.guard';

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
		path: 'inbox', /*'caixa-de-entrada',*/
		loadChildren: () =>	import('./modules/caixa-de-entrada/caixa-de-entrada.module').then(m => m.CaixaDeEntradaModule),
		canActivate: [ AuthGuard ] // AuthGuard aqui!
	},
	{
		path: ''
		,redirectTo: 'cadastro'
		,pathMatch: 'full'
	},
	{
		path: '**'
		,redirectTo: 'login'
		,pathMatch:	'full'
	}
]

@NgModule({
	imports: [
		RouterModule.forRoot(rotas)
	],
	exports: [ RouterModule ],
	providers: [ AuthGuard ] // importar AuthGuard como um provider da rota!
})

export class AppRoutingModule{}
//export class ModuloRoteamento{}