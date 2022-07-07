import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FuncionarioService } from '../services/funcionario.service';

interface AddCombo {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.css']
})
export class ConfiguracoesComponent implements OnInit {

  matricula: string = ''
  constructor(private funcionarioService: FuncionarioService,private router: Router) { }
  
  ngOnInit() {
    if (this.funcionarioService.islogged() == false) {
      this.router.navigate(['Login'])
    };
  }

  selectedValue: string;

  opcoesCombo: AddCombo[] = [
    {value: 'Categoria', viewValue: 'Categoria'},
    {value: 'Fase', viewValue: 'Fase'},
    {value: 'Motivo Processo', viewValue: 'Motivo Processo'},
    {value: 'Site', viewValue: 'Site'},
    {value: 'Produto', viewValue: 'Produto'},
    {value: 'Escritório', viewValue: 'Escritório'},
    {value: 'Advogado Empresa', viewValue: 'Advogado Empresa'},
    {value: 'Advogado Executor', viewValue: 'Advogado Executor'},
    {value: 'Grau de Risco', viewValue: 'Grau de Risco'},
    {value: 'Encerrado', viewValue: 'Encerrado'},
    {value: 'Tipo Compromisso', viewValue: 'Tipo Compromisso'},
    {value: 'Status', viewValue: 'Status'},
    {value: 'Tipo de Testemunha', viewValue: 'Tipo de Testemunha'},
    {value: 'Testemunho', viewValue: 'Testemunho'},
    {value: 'Docto', viewValue: 'Docto'},
    {value: 'Pedido', viewValue: 'Pedido'},
    {value: '1ª. Instância', viewValue: '1ª. Instância'},
    {value: '2ª. Instância', viewValue: '2ª. Instância'},
    {value: '3ª. Inst/Homol', viewValue: '3ª. Inst/Homol'},
    {value: 'Custo', viewValue: 'Custo'},
    {value: 'Encargo', viewValue: 'Encargo'},
    {value: 'Despesas', viewValue: 'Despesas'},
  ];

}
