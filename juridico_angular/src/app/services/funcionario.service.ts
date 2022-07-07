import { Injectable } from '@angular/core';
import { Funcionario } from '../models/funcionario';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError,BehaviorSubject } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Campo } from '../models/campo';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  //url = 'http://10.206.106.96/API_Juridico';
    url = 'http://localhost:56720'


  constructor(private httpClient: HttpClient) { 
    
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  login(matricula: string, senha: string) {
    return this.httpClient.get<Funcionario>(this.url + '/api/Funcionarios/GetDadosFuncionario?matricula='+matricula+'&senha='+senha)
        .pipe(
          retry(2),
          catchError(this.handleError)
        )
  }

  getAcessoFuncionario(matricula: string) {
    return this.httpClient.get<Campo[]>(this.url + '/api/Funcionarios/GetAcessoFuncionario?matricula='+matricula)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  islogged() {
    if (localStorage.getItem('currentUser') != null && localStorage.getItem('currentUser') != '' ) {
      return true;
    } else {
      return false;
    }
  }
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