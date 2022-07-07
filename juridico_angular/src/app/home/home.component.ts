import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from '../models/funcionario';
import { Menu } from '../models/menu';
import { FuncionarioService } from '../services/funcionario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  funcionarios = {} as Funcionario;
  nome: any = '';
  
  constructor(private funcionario: FuncionarioService,private router: Router) { 
  }

  ngOnInit() {
    if (this.funcionario.islogged() == false) {
        this.router.navigate(['Login'])
    };
    this.nome = localStorage.getItem('nomeUser');
  } 

  Loggout() {
    this.router.navigate(['Login']);
    localStorage.clear();
  }
  
}
