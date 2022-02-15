import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../services/funcionario.service';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { Funcionario } from '../models/funcionario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username:string = '';
  senha:string = '';

  funcionario = {} as Funcionario;
  funcionarios: Funcionario[] = [];
  constructor(private funcionarioService: FuncionarioService,private router: Router)
   {
  }

  ngOnInit() {
   
  }

  loginUser() {
    this.funcionarioService.login(this.username,this.senha).subscribe((funcionarios: Funcionario) => {
      localStorage.setItem('currentUser',funcionarios.TokenFunc);
      if (this.funcionarioService.islogged() == true) {
        this.router.navigate(["Mensal"])
      }
    })
    this.username = "";
    this.senha = "";
  }
}
