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

  constructor(private funcionarioService: FuncionarioService,private router: Router)
   {
   }

  ngOnInit() {
   
  }

  loginUser() {
    this.funcionarioService.login(this.username,this.senha).subscribe((funcionario: Funcionario) => {
      localStorage.setItem('currentUser',funcionario.TokenFunc);
      localStorage.setItem('nomeUser',funcionario.Nome_Abreviado);
      if (this.funcionarioService.islogged() == true) {
        this.router.navigateByUrl('/Home', { state: funcionario });
      }
    })
    this.username = "";
    this.senha = "";
  }
}
