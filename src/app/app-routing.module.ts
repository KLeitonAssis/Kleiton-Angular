import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import {AuthGuard} './auth.guard'
import { AppComponent } from './app.component';
import { SemanalComponent } from './semanal/semanal.component';
import { MensalComponent } from './mensal/mensal.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full'},
  { path: 'Login', component: LoginComponent },
 // { path: 'Semanal', component: SemanalComponent, canActivate: [AuthGuard] },
  //{ path: 'Mensal', component: MensalComponent},
  { path: 'Home', component: HomeComponent, children: [
    {
      path: 'Mensal', component: MensalComponent
    },
    {
      path: 'Semanal', component: SemanalComponent
    },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
