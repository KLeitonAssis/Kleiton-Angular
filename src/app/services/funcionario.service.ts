import { Injectable } from '@angular/core';
import { Funcionario } from '../models/funcionario';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError,BehaviorSubject } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  url = 'http://localhost:50916';


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