import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { sgi } from '../models/sgi';
import { mensal } from '../models/mensal';

@Injectable({
  providedIn: 'root'
})
export class SgiService {
  url = 'http://10.206.106.96:3000'; // api rest fake
  constructor(private httpClient: HttpClient) { }


  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  // Obtem todos os dados
  getSgi(): Observable<sgi[]> {
    return this.httpClient.get<sgi[]>(this.url+"/semanal")
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getMensal(): Observable<mensal[]> {
    return this.httpClient.get<mensal[]>(this.url+"/mensal")
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}

