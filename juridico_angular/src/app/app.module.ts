import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DxButtonComponent, DxButtonModule, DxDataGridModule, DxMenuModule, DxTreeViewModule } from 'devextreme-angular';
import { RouterLink } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AcessoComponent } from './acesso/acesso.component';
import { AgendaComponent } from './agenda/agenda.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import {MatInputModule} from '@angular/material/input';   
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 
import {MatTreeModule} from '@angular/material/tree';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card'
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table'
import { NgxMaskModule, IConfig } from 'ngx-mask'
import {MatSidenavModule} from '@angular/material/sidenav';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { ExcelService } from './services/excel.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CadastroComponent,
    AcessoComponent,
    AgendaComponent,
    ConfiguracoesComponent,
    RelatorioComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DxTreeViewModule,
    DxDataGridModule,
    DxMenuModule,
    DxButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatTreeModule,
    MatDialogModule,
    MatButtonModule,
    MatRadioModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatTooltipModule,
    MatSelectModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatCheckboxModule,
    NgxMaskModule.forRoot(),
    MatSidenavModule,
  ],
  bootstrap: [AppComponent],
  providers:[
    ExcelService,
  ]
})
export class AppModule { }
