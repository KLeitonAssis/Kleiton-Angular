import { Injectable } from '@angular/core';
import { Funcionario } from '../models/funcionario';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  url = 'https://localhost:44375/';
  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getFuncionarios():  Observable<Funcionario[]> {
    return this.httpClient.get<Funcionario[]>(this.url+'/api/Funcionarios/GetDadosFuncionario?matricula=883914&senha=TMKT1258')
      .pipe(
        retry(2),
        catchError(this.handleError))
  }handleError(error: HttpErrorResponse) {
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
