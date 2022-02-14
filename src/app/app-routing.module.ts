import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SemanalComponent } from './semanal/semanal.component';
import { MensalComponent } from './mensal/mensal.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'Login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
