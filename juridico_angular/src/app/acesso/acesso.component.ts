import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FuncionarioService } from '../services/funcionario.service';
import { Funcionario } from '../models/funcionario';
import {Campo} from '../models/campo';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.css']
})
export class AcessoComponent implements OnInit {
  camposArray: Campo[] = []
  

  matricula: string = ''
  constructor(private funcionarioService: FuncionarioService,private router: Router) { }

  ngOnInit() {
    if (this.funcionarioService.islogged() == false) {
      this.router.navigate(['Login'])
    };
  }
    

  getAcessoFuncionario() {
    this.funcionarioService.getAcessoFuncionario(this.matricula).subscribe((campo) => {
      this.camposArray = campo
      
      // if(campo != null)
      // {

      // }
      // else
      // {
      //   alert("Matricula não cadastrada, confime e insira novamente")
      // }
    })
  }

}
