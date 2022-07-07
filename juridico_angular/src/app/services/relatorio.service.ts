import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry } from 'rxjs/operators';
import { CampoRelatorio } from '../models/campoRelatorio';
import { Relatorio } from '../models/Relatorio';
import { appendFile } from 'fs';
import { Tabela } from '../models/tabela';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {


  url = 'http://localhost:56720'
  
  constructor(private http: HttpClient) { }

  getCampo(codigo: number): Observable<CampoRelatorio[]> {
    return this.http.get<CampoRelatorio[]>(this.url+'/api/Relatorio/GetCampoRelatorio?codigo='+codigo)
      .pipe(
        retry(2),
      )
  }

  getCondicao(codigoRe: number,condicao: string): Observable<CampoRelatorio>{
    return this.http.get<CampoRelatorio>(this.url+'/api/Relatorio/GetCondicaoRelatorio?codigo='+codigoRe+'&condicao='+condicao)
      .pipe(
        retry(2),
      )
  }

  ExportarExcel_Processo_Analitico(nomeRe: string, relatorio: number, filtro: string, campo: string, condicao: string): Observable<Tabela>
  {
    return this.http.get<Tabela>(this.url+'/api/Relatorio/ExportarTabela_Processo_Analitico?nomeRe='+nomeRe+'&relatorio='+relatorio+
    '&filtro='+filtro+'&campo='+campo+'&condicao='+condicao)
    .pipe(
      retry(2),
    )
  }
  ExportarExcel_Testemunha(nomeRe: string, relatorio: number, filtro: string, campo: string, condicao: string): Observable<Tabela>
  {
    return this.http.get<Tabela>(this.url+'/api/Relatorio/ExportarTabela_Testemunha?nomeRe='+nomeRe+'&relatorio='+relatorio+
    '&filtro='+filtro+'&campo='+campo+'&condicao='+condicao)
    .pipe(
      retry(2),
    )
  }
  ExportarExcel_Pedido(nomeRe: string, relatorio: number, filtro: string, campo: string, condicao: string): Observable<Tabela>
  {
    return this.http.get<Tabela>(this.url+'/api/Relatorio/ExportarTabela_Pedido?nomeRe='+nomeRe+'&relatorio='+relatorio+
    '&filtro='+filtro+'&campo='+campo+'&condicao='+condicao)
    .pipe(
      retry(2),
    )
  }
  ExportarExcel_Custo(nomeRe: string, relatorio: number, filtro: string, campo: string, condicao: string): Observable<Tabela>
  {
    return this.http.get<Tabela>(this.url+'/api/Relatorio/ExportarTabela_Custo?nomeRe='+nomeRe+'&relatorio='+relatorio+
    '&filtro='+filtro+'&campo='+campo+'&condicao='+condicao)
    .pipe(
      retry(2),
    )
  }
  ExportarExcel_Carta(nomeRe: string, relatorio: number, filtro: string, campo: string, condicao: string): Observable<Tabela>
  {
    return this.http.get<Tabela>(this.url+'/api/Relatorio/ExportarTabela_Carta?nomeRe='+nomeRe+'&relatorio='+relatorio+
    '&filtro='+filtro+'&campo='+campo+'&condicao='+condicao)
    .pipe(
      retry(2),
    )
  }
  ExportarExcel_Robo_CEF(nomeRe: string, relatorio: number, filtro: string, campo: string, condicao: string): Observable<Tabela>
  {
    return this.http.get<Tabela>(this.url+'/api/Relatorio/ExportarTabela_RoboCEF?nomeRe='+nomeRe+'&relatorio='+relatorio+
    '&filtro='+filtro+'&campo='+campo+'&condicao='+condicao)
    .pipe(
      retry(2),
    )
  }
  ExportarExcel_Processo_Sintetico(nomeRe: string, relatorio: number, filtro: string, campo: string, condicao: string): Observable<Tabela>
  {
    return this.http.get<Tabela>(this.url+'/api/Relatorio/ExportarTabela_Processo_Sintetico?nomeRe='+nomeRe+'&relatorio='+relatorio+
    '&filtro='+filtro+'&campo='+campo+'&condicao='+condicao)
    .pipe(
      retry(2),
    )
  }
  ExportarExcel_Pedido_Analitico(nomeRe: string, relatorio: number, filtro: string, campo: string, condicao: string): Observable<Tabela>
  {
    return this.http.get<Tabela>(this.url+'/api/Relatorio/ExportarTabela_Pedido_Analitico?nomeRe='+nomeRe+'&relatorio='+relatorio+
    '&filtro='+filtro+'&campo='+campo+'&condicao='+condicao)
    .pipe(
      retry(2),
    )
  }
  
 
  
}
