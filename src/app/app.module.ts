import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DxButtonComponent, DxButtonModule, DxDataGridModule, DxMenuModule, DxTreeViewModule } from 'devextreme-angular';
import { SemanalComponent } from './semanal/semanal.component';
import { MensalComponent } from './mensal/mensal.component';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    SemanalComponent,
    MensalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DxTreeViewModule,
    DxDataGridModule,
    DxMenuModule,
    DxButtonModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
