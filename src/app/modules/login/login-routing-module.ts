import	{	NgModule	}	from	'@angular/core';
import	{	Routes,	RouterModule	}	from	'@angular/router';
import	{	LoginComponent	}	from	'./login.component';

const	rotasLogin:	Routes	=	[
	{path:	'',	component:	LoginComponent }
]
@NgModule({
	imports:	[
			RouterModule.forChild(rotasLogin)
	],
	exports:[
			RouterModule
	]
})
export class	LoginRoutingModule	{}