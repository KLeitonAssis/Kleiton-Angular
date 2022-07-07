import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from '../services/funcionario.service';
import { FormGroup,Validators,FormBuilder,FormControl } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { Funcionario } from '../models/funcionario';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
    form: FormGroup = new FormGroup({
    matricula: new FormControl(''),
    senha: new FormControl(''),
  });

  constructor(private funcionarioService: FuncionarioService,private router: Router)
   {
   }

  ngOnInit() {
   
  }


  loginUser() {
    if (this.form.valid) {

    this.funcionarioService.login(this.form.controls['matricula'].value,this.form.controls['senha'].value).subscribe((funcionario: Funcionario) => {
      localStorage.setItem('currentUser',funcionario.TokenFunc);
      localStorage.setItem('nomeUser',funcionario.Nome);
      if (this.funcionarioService.islogged() == true) {
        this.router.navigateByUrl('/Home');
      }
    })
  }
}
}
