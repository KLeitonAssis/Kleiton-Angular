import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from '../models/funcionario';
import { Menu } from '../models/menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  funcionarios = {} as Funcionario;
  nome: any = '';
  
  constructor(private router: Router) { 
    console.log(this.router.getCurrentNavigation()?.extras.state);
  }

  ngOnInit() {
    this.nome = localStorage.getItem('nomeUser');
  }

}
