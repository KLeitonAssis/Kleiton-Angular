import { Component, OnInit } from '@angular/core';
import { RelatorioService } from '../services/relatorio.service';
import { ExcelService } from '../services/excel.service';
import { FuncionarioService } from '../services/funcionario.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { CampoRelatorio } from '../models/campoRelatorio'
import { Relatorio } from '../models/Relatorio';
import { Byte } from '@angular/compiler/src/util';
import { Tabela } from '../models/tabela';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {

  ProcessoAnalitico!: number;
  ProcessoSintetico!: number;
  Agenda!: number;
  Testemunha!: number;
  Pedido!: number;
  Carta!: number;
  RoboCEF!: number;
  Custo!: number;
  PedidoAnalitico!: number;
  nomeRelatorio!: string;

  Filtro!: string;
  CondiGrid!: string;
  radioFiltro!: string;
  tit!: string;
  condi: any;
  CondicaoData!: number;
  CondicaoDrop!: number;
  condiDataIni!: string;
  condiDataFim!: string;
  tipo!: string;
  reset!: string;  paramen: string = '';  comparador: Array<string> = [];

  Relatorio: CampoRelatorio[] = [];
  codigoRelatorio!: number;

  Condicao: any = {} as CampoRelatorio;
  Exportacao = {} as Relatorio;

  relatorio!: number;
  filtro!: string;
  campo!:  string;
  condicao!:  string;
  tabela!: any;

  param: Array<string> = [];

  constructor(private relatorioService: RelatorioService,private funcionario: FuncionarioService,private excelService: ExcelService,private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void { 
    if (this.funcionario.islogged() == false) {
      this.router.navigate(['Login'])
  };
  }

  ativaNav(radioFiltro: string)
  {
  this.tipo = radioFiltro;
    if(radioFiltro == "1")
    {
      this.Filtro = radioFiltro;
    }
    else
    {
      this.Filtro = "";
      this.Exportacao.condicao = this.reset;
      this.Exportacao.campo = this.reset;
      
    }
  }

  

  getRelatorioCampo(relatorio: number)
  {
    if(relatorio == 7 || relatorio == 6 || relatorio == 3 || relatorio == 9)
    {
      this.radioFiltro = "";
      this.Filtro = "";

    }
    else
    {
      this.radioFiltro = "1";
      
    
      this.relatorioService.getCampo(relatorio).subscribe((campoRelatorio: CampoRelatorio[]) => {
        this.Relatorio = campoRelatorio;
    })
  }
  this.codigoRelatorio = relatorio;

  }

  getRelatorioCodicao(condicao: any,titulo: any)
  {

      if(condicao != null)
      {

        if(this.Exportacao.campo == undefined)
        {
          this.Exportacao.campo = condicao;
          this.comparador = [condicao];
        }
        else if (this.comparador[this.comparador.length-1] != condicao)
        {
          this.Exportacao.campo = this.Exportacao.campo+'$'+condicao
          this.comparador = [condicao];
        }

        this.CondiGrid = condicao;
        
        if(condicao == 'PRO_DTATUALIZACAO' || condicao == 'PRO_DATAHORA' || condicao == 'PRO_DTDISTRIBUICAO')
          {
            this.CondicaoData = 1;
            this.CondicaoDrop = 0;
          }
          else
          {
            this.CondicaoDrop = 1;
            this.CondicaoData = 0;
          }
      }
    
        this.relatorioService.getCondicao(this.codigoRelatorio,condicao).subscribe((CondicaoRelatorio: CampoRelatorio) => {
          this.Condicao = CondicaoRelatorio;
      })
      this.tit = titulo
  }

  enviarGrid(cond: string)
  {

    if(this.Exportacao.condicao == undefined)
    {
      this.Exportacao.condicao = cond;
    }
    else
    {
      this.Exportacao.condicao = this.Exportacao.condicao+'$'+cond
    }

      if(this. param[this.param.length-1] != cond)
      {
        if(this.param[0] == null || this.param[0] == '')
        {
          this.param = [cond];
        }
        else
        {
            this.param[this.param.length] = cond;
        }
      }else{}

  }
  enviarGridDta(DataIni: string, DataFim: string)
  {
      if(this. param[this.param.length-1] != DataFim)
      {
        if(this.param[0] == null || this.param[0] == '')
        {
          this.param = [DataIni];
          this.param[1] = DataFim;
        }
        else
        {
            this.param[this.param.length] = DataIni;
            this.param[this.param.length] = DataFim;
        }
      }else{}

  }
  
  apagarParam()
  {
      this.param = [''];  
      this.Exportacao.campo = '';
      this.Exportacao.condicao = '';
  }

  ExportarExcel()
  {
    this.Exportacao.relatorio = this.codigoRelatorio;
    this.Exportacao.filtro = this.tipo;

    this.relatorio = this.codigoRelatorio;
    this.filtro = this.tipo;
    this.campo = this.Exportacao.campo;
    this.condicao = this.Exportacao.condicao;
    
    if(this.codigoRelatorio == 1)
    {
        this.nomeRelatorio = 'Processo_Analitico'
        this.relatorioService.ExportarExcel_Processo_Analitico(this.nomeRelatorio,this.relatorio, this.filtro, this.campo, this.condicao).subscribe((arquivosExcel: Tabela) => {
        this.tabela = JSON.parse(JSON.stringify(arquivosExcel));

       this.excelService.exportAsExcelFile(this.tabela,'Relatorio_Juridico',this.nomeRelatorio);
      })
      
      }
      else if (this.codigoRelatorio == 2)
      { 
        this.nomeRelatorio = 'Agenda'
        this.relatorioService.ExportarExcel_Processo_Analitico(this.nomeRelatorio,this.relatorio, this.filtro, this.campo, this.condicao).subscribe((arquivosExcel: Tabela) => {
          this.tabela = JSON.parse(JSON.stringify(arquivosExcel));
  
         this.excelService.exportAsExcelFile(this.tabela,'Relatorio_Juridico',this.nomeRelatorio);
        })
      }
      else if (this.codigoRelatorio == 3) 
      { 
        this.nomeRelatorio = 'Testemunha'
        this.relatorioService.ExportarExcel_Testemunha(this.nomeRelatorio,this.relatorio, this.filtro, this.campo, this.condicao).subscribe((arquivosExcel: Tabela) => {
          this.tabela = JSON.parse(JSON.stringify(arquivosExcel));
  
         this.excelService.exportAsExcelFile(this.tabela,'Relatorio_Juridico',this.nomeRelatorio);
        })
      }
      else if (this.codigoRelatorio == 4)
      { 
        this.nomeRelatorio = 'Pedido'
        this.relatorioService.ExportarExcel_Pedido(this.nomeRelatorio,this.relatorio, this.filtro, this.campo, this.condicao).subscribe((arquivosExcel: Tabela) => {
          this.tabela = JSON.parse(JSON.stringify(arquivosExcel));
  
         this.excelService.exportAsExcelFile(this.tabela,'Relatorio_Juridico',this.nomeRelatorio);
        })
      }
      else if (this.codigoRelatorio == 5)
      { 
        this.nomeRelatorio = 'Custo'
        this.relatorioService.ExportarExcel_Custo(this.nomeRelatorio,this.relatorio, this.filtro, this.campo, this.condicao).subscribe((arquivosExcel: Tabela) => {
          this.tabela = JSON.parse(JSON.stringify(arquivosExcel));
  
         this.excelService.exportAsExcelFile(this.tabela,'Relatorio_Juridico',this.nomeRelatorio);
        })
      }
      else if (this.codigoRelatorio == 6)
      {
        this.nomeRelatorio = 'Carta'
        this.relatorioService.ExportarExcel_Carta(this.nomeRelatorio,this.relatorio, this.filtro, this.campo, this.condicao).subscribe((arquivosExcel: Tabela) => {
          this.tabela = JSON.parse(JSON.stringify(arquivosExcel));
  
         this.excelService.exportAsExcelFile(this.tabela,'Relatorio_Juridico',this.nomeRelatorio);
        })
      }
      else if (this.codigoRelatorio == 7)
      { 
        this.nomeRelatorio = 'Robo_CEF'
        this.relatorioService.ExportarExcel_Robo_CEF(this.nomeRelatorio,this.relatorio, this.filtro, this.campo, this.condicao).subscribe((arquivosExcel: Tabela) => {
          this.tabela = JSON.parse(JSON.stringify(arquivosExcel));
  
         this.excelService.exportAsExcelFile(this.tabela,'Relatorio_Juridico',this.nomeRelatorio);
        })
      }
      else if (this.codigoRelatorio == 8)
      { 
        this.nomeRelatorio = 'Processo_Sintetico'
        this.relatorioService.ExportarExcel_Processo_Sintetico(this.nomeRelatorio,this.relatorio, this.filtro, this.campo, this.condicao).subscribe((arquivosExcel: Tabela) => {
          this.tabela = JSON.parse(JSON.stringify(arquivosExcel));
  
         this.excelService.exportAsExcelFile(this.tabela,'Relatorio_Juridico',this.nomeRelatorio);
        })
      }
      else if (this.codigoRelatorio == 9)
      { 
        this.nomeRelatorio = 'Pedido_Analitico'
        this.relatorioService.ExportarExcel_Pedido_Analitico(this.nomeRelatorio,this.relatorio, this.filtro, this.campo, this.condicao).subscribe((arquivosExcel: Tabela) => {
          this.tabela = JSON.parse(JSON.stringify(arquivosExcel));
  
         this.excelService.exportAsExcelFile(this.tabela,'Relatorio_Juridico',this.nomeRelatorio);
        })
      }
    }

  
  }