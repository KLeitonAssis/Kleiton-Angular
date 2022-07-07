import { Injectable } from '@angular/core';
import {combo} from '../models/combo';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry } from 'rxjs/operators';
import { Processo } from '../models/processo';
import { Audiencia } from '../models/audiencia';
import { Testemunha } from '../models/testemunha';
import { Condenacao } from '../models/condenacao';
import { Custo } from '../models/custo';
import { Despesa } from '../models/despesa';
import { Encargo } from '../models/encargo';
import { Pedido } from '../models/pedido';
import { Historico } from '../models/historico';
import { Disciplinar } from '../models/disciplinar';
import { Status } from '../models/status';
import { Chefia } from '../models/chefia';
@Injectable({
  providedIn: 'root'
})
export class ProcessoService {
  
  //url = 'http://10.206.106.96/API_Juridico';
  url = 'http://localhost:56720'


  constructor(private http: HttpClient) { }
  
  

  getCombo(codigo: number):  Observable<combo[]> {
    return this.http.get<combo[]>(this.url+'/api/Processos/GetListaCombos?codCombo='+codigo)
      .pipe(
        retry(2),
      )
  }

  getProcesso(param: string, campo: string):  Observable<Processo> {
    return this.http.get<Processo>(this.url+'/api/Processos/GetProcesso?param='+param+'&campo='+campo)
      .pipe(
        retry(2),
      )
  }

  getProcessoAudiencia(id: number):  Observable<Audiencia> {
    return this.http.get<Audiencia>(this.url+'/api/Processos/GetProcessoAudiencia?id='+id)
      .pipe(
        retry(2),
      )
  }
  
  getProcessoTestemunha(id: number):  Observable<Testemunha> {
    return this.http.get<Testemunha>(this.url+'/api/Processos/getProcessoTestemunha?id='+id)
      .pipe(
        retry(2),
      )
  }
  getProcessoPedido(id: number):  Observable<Pedido> {
    return this.http.get<Pedido>(this.url+'/api/Processos/getProcessoPedido?id='+id)
      .pipe(
        retry(2),
      )
  }
  getProcessoCusto(id: number):  Observable<Custo> {
    return this.http.get<Custo>(this.url+'/api/Processos/getProcessoCusto?id='+id)
      .pipe(
        retry(2),
      )
  }

  getProcessoEncargo(id: number):  Observable<Encargo> {
    return this.http.get<Encargo>(this.url+'/api/Processos/getProcessoEncargo?id='+id)
      .pipe(
        retry(2),
      )
  }
  getProcessoDespesa(id: number):  Observable<Despesa> {
    return this.http.get<Despesa>(this.url+'/api/Processos/getProcessoDespesa?id='+id)
      .pipe(
        retry(2),
      )
  }
  getProcessoCondenacao(id: number):  Observable<Condenacao> {
    return this.http.get<Condenacao>(this.url+'/api/Processos/getProcessoCondenacao?id='+id)
      .pipe(
        retry(2),
      )
  }
  getProcessoHistorico(id: number):  Observable<Historico> {
    return this.http.get<Historico>(this.url+'/api/Processos/getProcessoHistorico?id='+id)
      .pipe(
        retry(2),
      )
  }
  getProcessoStatus(id: number):  Observable<Status> {
    return this.http.get<Status>(this.url+'/api/Processos/getProcessoStatus?id='+id)
      .pipe(
        retry(2),
      )
  }
  getProcessoDisciplinar(id: number):  Observable<Disciplinar> {
    return this.http.get<Disciplinar>(this.url+'/api/Processos/getProcessoDisciplinar?id='+id)
      .pipe(
        retry(2),
      )
  }
  getProcessoChefia(id: number):  Observable<Chefia> {
    return this.http.get<Chefia>(this.url+'/api/Processos/getProcessoChefia?id='+id)
      .pipe(
        retry(2),
      )
  }

      SetProcesso(processo: Processo, codigo: number) 
      {
        const body=JSON.stringify(processo);
        var headers = new HttpHeaders({
          "Content-Type": "application/json",
          "Accept": "application/json",
        });
        return this.http.post<Processo>(this.url+'/api/Processos/SetProcesso?CODIGO='+codigo
        ,body
        ,{headers: headers})
      }


      SetProcessoAudiencia(audiencia: Audiencia,matricula: string,lembreteMail:number,periodoAgenda:number,TempoAgenda:number,cbEmD:number) 
      {
        const body=JSON.stringify(audiencia);
        var headers = new HttpHeaders({
          "Content-Type": "application/json",
          "Accept": "application/json",
        });
        return this.http.post<Audiencia>(this.url+'/api/Processos/SetProcessoAudiencia?AUD_USUCODIGO='+matricula+'&lembreteMail='+lembreteMail+'&rdPeriodo='+periodoAgenda+'&TempoAgenda='+TempoAgenda+'&cbEmD='+cbEmD
        ,body
        ,{headers: headers})
      }

      SetProcessoTestemunha(testemunha: Testemunha,processo: number,matricula: string,matriculaTestemunha: string, Testemunho: number) 
      {
        const body=JSON.stringify(testemunha);
        var headers = new HttpHeaders({
          "Content-Type": "application/json",
          "Accept": "application/json",
        });
        return this.http.post<Testemunha>(this.url+'/api/Processos/SetProcessoTestemunha?TMA_PROCODIGO='+processo+'&TMA_USUCODIGO='+matricula+'&TMA_MATRICULA='+matriculaTestemunha+'&TESTEMUNHO='+Testemunho
        ,body
        ,{headers: headers})
      }

      SetProcessoPedido(pedido: Pedido,matricula: string,processo: number,PrimeiraInsDT: Date, SegundaInsDT: Date, TerceiraInsDT: Date) 
      {
        const body=JSON.stringify(pedido);
        var headers = new HttpHeaders({
          "Content-Type": "application/json",
          "Accept": "application/json",
        });
        return this.http.post<Pedido>(this.url+'/api/Processos/SetProcessoPedido?PED_PROCODIGO='+processo+'&PED_USUCODIGO='+matricula+'&PED_PRIMEIRA_INS_DT='+PrimeiraInsDT+'&PED_SEGUNDA_INS_DT='+SegundaInsDT+'&PED_TERCEIRA_INS_DT='+TerceiraInsDT
        ,body
        ,{headers: headers})
      }
   
      SetProcessoCusto(custo: Custo,matricula: string,processo: number) 
      {
        const body=JSON.stringify(custo);
        var headers = new HttpHeaders({
          "Content-Type": "application/json",
          "Accept": "application/json",
        });
        return this.http.post<Custo>(this.url+'/api/Processos/SetProcessoCusto?CST_PROCODIGO='+processo+'&CST_USUCODIGO='+matricula
        ,body
        ,{headers: headers})
      }

      SetProcessoEncargo(encargo: Encargo,matricula: string,processo: number) 
      {
        const body=JSON.stringify(encargo);
        var headers = new HttpHeaders({
          "Content-Type": "application/json",
          "Accept": "application/json",
        });
        return this.http.post<Encargo>(this.url+'/api/Processos/SetProcessoEncargo?ENC_PROCODIGO='+processo+'&ENC_USUCODIGO='+matricula
        ,body
        ,{headers: headers})
      }

      SetProcessoDespesa(despesa: Despesa,processo: number,matricula: string) 
      {
        const body=JSON.stringify(despesa);
        var headers = new HttpHeaders({
          "Content-Type": "application/json",
          "Accept": "application/json",
        });
        return this.http.post<Despesa>(this.url+'/api/Processos/SetProcessoDespesa?DES_PROCODIGO='+processo+'&DES_USUCODIGO='+matricula
        ,body
        ,{headers: headers})
      }

      SetProcessoCondenacao(condenacao: Condenacao,processo: number,matricula: string) 
      {
        const body=JSON.stringify(condenacao);
        var headers = new HttpHeaders({
          "Content-Type": "application/json",
          "Accept": "application/json",
        });
        return this.http.post<Condenacao>(this.url+'/api/Processos/SetProcessoCondenacao?CDN_PROCODIGO='+processo+'&CDN_USUCODIGO='+matricula
        ,body
        ,{headers: headers})
      }
  }