import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import {AuthGuard} './auth.guard'
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AcessoComponent } from './acesso/acesso.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import { RelatorioComponent } from './relatorio/relatorio.component'

const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full'},
  { path: 'Login', component: LoginComponent },
 // { path: 'Semanal', component: SemanalComponent, canActivate: [AuthGuard] },
  //{ path: 'Mensal', component: MensalComponent},
  { path: 'Home', component: HomeComponent, children: [
    {
      path: 'Cadastro', component: CadastroComponent
    },
    {
      path: 'Acesso', component: AcessoComponent
    },
    {
      path: 'Agenda', component: AgendaComponent
    },
    {
      path: 'Configuracoes', component: ConfiguracoesComponent
    },
    {
      path: 'Relatorio', component: RelatorioComponent
    },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
