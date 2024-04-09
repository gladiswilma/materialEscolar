import { RouterModule ,Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { CarrinhoComponent } from './pagina/carrinho/carrinho.component';
import { HomeComponent } from './pagina/home/home.component';
import { ContatoComponent } from './pagina/contato/contato.component';
import { QuemSomosComponent } from './pagina/quem-somos/quem-somos.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'contato', component: ContatoComponent},
    {path: 'quem-somos', component: QuemSomosComponent},
    {path: 'carrinho', component: CarrinhoComponent}

];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

export class AppRoutingModule{ }


