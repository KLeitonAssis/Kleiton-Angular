import { Component, OnInit,ViewChild, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FuncionarioService } from '../services/funcionario.service';
import { ProcessoService} from '../services/processo.service'
import { DatePipe } from '@angular/common';
import { combo } from '../models/combo';
import { ThrowStmt } from '@angular/compiler';
import { Processo } from '../models/processo';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Testemunha } from '../models/testemunha';
import { Despesa } from '../models/despesa';
import { Audiencia } from '../models/audiencia';
import { Condenacao } from '../models/condenacao';
import { Custo } from '../models/custo';
import { Encargo } from '../models/encargo';
import { Pedido } from '../models/pedido';
import { Chefia } from '../models/chefia';
import { Disciplinar } from '../models/disciplinar';
import { Historico } from '../models/historico';
import { Status } from '../models/status';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {
  varSelectRevisadoSim: boolean = true;
  valorCausa!: number;
  setProcesso = {} as Processo;
  setAudiencia = {} as Audiencia;
  setTestemunha ={} as Testemunha;
  setPedido = {} as Pedido;
  setCusto = {} as Custo;
  setEncargo = {} as Encargo;
  setDespesa = {} as Despesa;
  setCondenacao = {} as Condenacao;
  setHistorico = {} as Historico;
  valorEstimativaP!: number;
  varSelectRevisadoNao: boolean = false;
  periodoAgenda: any;
  categorias: any;
  site: any;
  produto: any;
  advogadoEmpresa: any;
  advogadoExecutor: any;
  grauRisco: any;
  statusAudiencia: any;
  hashCod: any = localStorage.getItem('currentUser'); 
  instancia1: any;
  instancia2: any;
  instancia3: any;
  testemunha: any;
  audiencia: any;
  audienciaGrid: any;
  codigoAud:any;
  condenacaoGrid: any;
  custoGrid: any;
  despesaGrid: any;
  encargoGrid: any;
  pedidoGrid: any;
  testemunhaGrid: any;
  historicoGrid: any;
  disciplinarGrid: any;
  statusGrid: any;
  chefiaGrid: any;
  pedido: any;
  encargo: any;
  motivacaoPagamento: any;
  encerrado: any;
  despesa: any;
  status: any;
  instanciaCusto: any;
  instanciaDespesa: any;
  instanciaCondenacao: any;
  custo: any;
  eventoDocto: any;
  docto: any;
  testemunho: any;
  escritorio: any;
  recursoCusto: any;
  fase: any;
  tipoCompromisso: any;
  emD: any;
  comboAgenda: any;
  processo = {} as Processo;
  nroProcesso: string = '';
  pipe = new DatePipe('en-US');
  formAudiencia: FormGroup = new FormGroup({
    proCodigo: new FormControl(''),
    dataCompromisso: new FormControl(''),
    tpAgenda: new FormControl(''),
    status: new FormControl(''),
  });
  varteste: any;
  constructor(private processoService: ProcessoService,private funcionario: FuncionarioService,private router: Router, private formBuilder: FormBuilder) { 
    this.processo.Matricula = '';
    this.processo.Reclamante = '';
  }
  
  ngOnInit(): void {
    if (this.funcionario.islogged() == false) {
      this.router.navigate(['Login'])
    }; 
    
    this.populaCombo(1);
    this.populaCombo(2);
    this.populaCombo(3);
    this.populaCombo(4);
    this.populaCombo(5);
    this.populaCombo(6);
    this.populaCombo(7);
    this.populaCombo(8);
    this.populaCombo(9);
    this.populaCombo(10);
    this.populaCombo(11);
    this.populaCombo(12);
    this.populaCombo(13);
    this.populaCombo(14);
    this.populaCombo(15);
    this.populaCombo(16);
    this.populaCombo(17);
    this.populaCombo(18);
    this.populaCombo(19);
    this.populaCombo(20);
    this.populaCombo(21);
    this.populaCombo(22);
    this.populaCombo(23);
    this.populaCombo(24);

  }

  radioAgenda(periodoAgenda: any) {
    switch(periodoAgenda)
    {
      case '1':
        this.comboAgenda = [
          {
            ID: 1,
            Descricao: 'CADA 30 MIN' 
          },
          {
            ID: 2,
            Descricao: 'CADA 60 MIN' 
          },
          {
            ID: 3,
            Descricao: 'CADA 90 MIN' 
          },
          {
            ID: 4,
            Descricao: 'CADA 120 MIN' 
          }
        ]
      break;
      case '2':
        this.comboAgenda = [
          {
            ID: 1,
            Descricao: '30 MIN. ANTES' 
          },
          {
            ID: 2,
            Descricao: '60 MIN. ANTES' 
          },
          {
            ID: 3,
            Descricao: '90 MIN. ANTES' 
          },
          {
            ID: 4,
            Descricao: '120 MIN. ANTES' 
          }
      ]
      break;

    }
    
  }
  populaCombo(comboCodigo: number){
    this.processoService.getCombo(comboCodigo).subscribe((combos: combo[]) => {
        switch(comboCodigo)
        {
        case 1:
          this.categorias= combos;
        break;
        case 2:
          this.fase= combos;
        break;
        case 3:
          this.site = combos;
        break;
        case 4:
          this.produto = combos;
        break;
        case 5:
          this.advogadoEmpresa = combos;
          this.advogadoExecutor = combos;
        break;
        case 6:
          this.grauRisco = combos;
        break;
        case 7:
          this.statusAudiencia = combos;
        break;
        case 8:
          this.instancia1 = combos;
          this.instancia2 = combos;
          this.instancia3 = combos;
        break;
        case 9:
          this.testemunha = combos;
        break;
        case 10:
          this.audiencia = combos;
          this.tipoCompromisso = combos;
        break;
        case 11:
          this.pedido = combos;
        break;
        case 12:
          this.encargo = combos;
        break;
        case 13:
          this.motivacaoPagamento = combos;
        break;
        case 14:
          this.encerrado = combos;
        break;
        case 15:
          this.despesa = combos;
        break;
        case 16:
          this.status = combos;
        break;
        case 17:
          this.instanciaCusto = combos;
          this.instanciaDespesa = combos;
          this.instanciaCondenacao = combos;
        break;
        case 18:
          this.custo = combos;
        break;
        case 19:
          this.eventoDocto = combos;
        break;
        case 20:
          this.docto = combos;
        break;
        case 21:
          this.testemunho = combos;
        break;
        case 22:
          this.escritorio = combos;
        break;
        case 23:
          this.recursoCusto = combos;
        break;
        case 24:
          this.emD = combos;
        break;
      }
        
    });
  };

  getProcesso(param:string, campo:string){
    this.processoService.getProcesso(param,campo).subscribe((processo: Processo) => {
        
        if (processo.NroProcesso != null)
        {
          this.processo = processo;
          this.selectRevisado();
          this.getProcessoGrids();
          this.valorCausa = this.processo.VlrCausa;
          this.valorEstimativaP = this.processo.VlrEstimativaProcesso;
          this.varteste = this.setAudiencia.preposto;
        }
        else
        {
          alert("Processo inexistente, encaminhando para tela de cadastro.")
          this.processo = processo ;
          this.selectRevisado();
          this.getProcessoGrids();
          this.valorCausa = this.processo.VlrCausa;
          this.valorEstimativaP = this.processo.VlrEstimativaProcesso;
          this.varteste = this.setAudiencia.preposto;
        }
    });
  }
  getProcessoGrids(){
    this.processoService.getProcessoAudiencia(this.processo.ID).subscribe((audiencia: Audiencia) => {
      this.audienciaGrid = audiencia;
    });
    this.processoService.getProcessoTestemunha(this.processo.ID).subscribe((testemunha: Testemunha) => {
      this.testemunhaGrid = testemunha;
    });
    this.processoService.getProcessoPedido(this.processo.ID).subscribe((pedido: Pedido) => {
      this.pedidoGrid = pedido;
    });
    this.processoService.getProcessoCusto(this.processo.ID).subscribe((custo: Custo) => {
      this.custoGrid = custo;
    });
    this.processoService.getProcessoEncargo(this.processo.ID).subscribe((encargo: Encargo) => {
      this.encargoGrid = encargo;
    });
    this.processoService.getProcessoDespesa(this.processo.ID).subscribe((despesa: Despesa) => {
      this.despesaGrid = despesa;
    });
    this.processoService.getProcessoCondenacao(this.processo.ID).subscribe((condenacao: Condenacao) => {
      this.condenacaoGrid = condenacao;
    });
    this.processoService.getProcessoHistorico(this.processo.ID).subscribe((historico: Historico) => {
      this.historicoGrid = historico;
    });
    this.processoService.getProcessoStatus(this.processo.ID).subscribe((status: Status) => {
      this.statusGrid = status;
    });
    this.processoService.getProcessoDisciplinar(this.processo.ID).subscribe((disciplinar: Disciplinar) => {
      this.disciplinarGrid = disciplinar;
    });
    this.processoService.getProcessoChefia(this.processo.ID).subscribe((chefia: Chefia) => {
      this.chefiaGrid = chefia;
    });
  }

  insereProcesso(ReclamantePro: any, NroProcessoPro: any, VaraPro: any, ComarcaPro: any,
    DtDistribuicaoPro: any,TpProcessoPro: any,CategoriaPro: any,SitePro: any,DtStatusPro: any,
    StatusPro: any,VlrCausaPro: any,VlrEstimativaProcessoPro: any,AdvogadoTMKTPro: any,
    AdvogadoExecutorPro: any,RiscoPro: any,ProdutoPro: any,ObservacaoPro: any,ModPagamentoPro: any,
    CodEncerradoPro: any,DtEncerradoPro: any,PrimeiroReuPro: any,SegundoReuPro: any,RevisadoPro: any,
    CompetanciaPro: any,CPFAdvogadoEmpresaPro: any,OABAdvogadoEmpresaPro: any,CPFAdvogadoExecutorPro: any,
    OABAdvogadoExecutorPro: any, EscritorioAdvocaciaPro: any, Advogado_ReclamantePro: any, OABAdvogadoReclamantePro: any): void
    //EmbargosPro: any,VlrTotalProcessoPro: any,NomeUsuarioPro: any,DtAtualizacaoPro: any,UsuCodigoPro: any,ChaveImpPro: any,DataHoraPro: any,FlagAtivoPro: any,ReclamadoPro: any
  {
    this.setProcesso.ID = this.processo.ID
    this.setProcesso.Matricula = this.hashCod
    this.setProcesso.Reclamante = ReclamantePro
    this.setProcesso.Advogado_Reclamante = Advogado_ReclamantePro
    this.setProcesso.OABAdvogadoReclamante = OABAdvogadoReclamantePro
    this.setProcesso.NroProcesso = NroProcessoPro
    this.setProcesso.Vara = VaraPro
    this.setProcesso.Comarca = ComarcaPro
    this.setProcesso.DtDistribuicao = DtDistribuicaoPro
    //this.setProcesso.Embargos = EmbargosPro
    this.setProcesso.TpProcesso = TpProcessoPro
    this.setProcesso.Categoria = CategoriaPro
    this.setProcesso.Site = SitePro
    this.setProcesso.DtStatus = DtStatusPro
    this.setProcesso.Status = StatusPro
    this.setProcesso.VlrCausa = VlrCausaPro
    this.setProcesso.VlrEstimativaProcesso = VlrEstimativaProcessoPro
    //this.setProcesso.VlrTotalProcesso = VlrTotalProcessoPro
    this.setProcesso.AdvogadoTMKT = AdvogadoTMKTPro
    this.setProcesso.AdvogadoExecutor = AdvogadoExecutorPro
    this.setProcesso.Risco = RiscoPro
    this.setProcesso.Produto = ProdutoPro
    this.setProcesso.Observacao = ObservacaoPro
    //this.setProcesso.DtAtualizacao = DtAtualizacaoPro
    //this.setProcesso.UsuCodigo = UsuCodigoPro
    //this.setProcesso.DataHora = DataHoraPro
    //this.setProcesso.FlagAtivo = FlagAtivoPro
    this.setProcesso.ModPagamento = ModPagamentoPro
    //this.setProcesso.ChaveImp = ChaveImpPro
    this.setProcesso.CodEncerrado = CodEncerradoPro
    this.setProcesso.DtEncerrado = DtEncerradoPro
    //this.setProcesso.Reclamado = ReclamadoPro
    this.setProcesso.PrimeiroReu = PrimeiroReuPro
    this.setProcesso.SegundoReu = SegundoReuPro
    this.setProcesso.Revisado = RevisadoPro
    //this.setProcesso.NomeUsuario = NomeUsuarioPro
    this.setProcesso.Competancia = CompetanciaPro
    this.setProcesso.CPFAdvogadoEmpresa = CPFAdvogadoEmpresaPro
    this.setProcesso.OABAdvogadoEmpresa = OABAdvogadoEmpresaPro
    this.setProcesso.CPFAdvogadoExecutor = CPFAdvogadoExecutorPro
    this.setProcesso.OABAdvogadoExecutor = OABAdvogadoExecutorPro
    this.setProcesso.EscritorioAdvocacia = EscritorioAdvocaciaPro

    this.processoService.SetProcesso(this.setProcesso,this.processo.ID
      ).subscribe(()=> {})
  }

  insereAudiencia(dataHora: any,statusAgenda:any,cbTipoCompromisso: any,rdPeriodo:any,lembreteMail: any,TempoAgenda: any,cbEmD:any): void
  {
    this.setAudiencia.codigo = 0
    this.setAudiencia.proCodigo = this.processo.ID
    this.setAudiencia.dataCompromisso = dataHora
    this.setAudiencia.tpAgenda = cbTipoCompromisso
    this.setAudiencia.status = statusAgenda
    rdPeriodo = 0;

    this.processoService.SetProcessoAudiencia(this.setAudiencia,this.hashCod,lembreteMail,rdPeriodo,TempoAgenda,cbEmD
      ).subscribe(()=> {})
  }

  insereTestemunha(tpTestemunha: any,nomeTestemunha: any,cpf: any,rg: any, ddd:any, fone: any, Testemunho: any, matriculaTestemunha: any): void
  {
    this.setTestemunha.codigo = 0
    this.setTestemunha.tpTestemunha = tpTestemunha
    this.setTestemunha.nomeTestemunha = nomeTestemunha
    this.setTestemunha.cpf = cpf
    this.setTestemunha.rg = rg
    this.setTestemunha.ddd = ddd
    this.setTestemunha.fone = fone

    this.processoService.SetProcessoTestemunha(this.setTestemunha,this.processo.ID,this.hashCod,matriculaTestemunha,Testemunho
      ).subscribe(()=> {})
  }

  inserePedido(Pedido: any,ValorPedido: any,PrimeiraIns: any,PrimeiraPrev: any, PrimeiraDecisao:any, SegundaIns: any, SegundaPrev: any, SegundaDecisao: any, TerceiraIns: any, TerceiraPrev: any, TerceiraDecisao: any, PrimeiraInsDT: any, SegundaInsDT: any, TerceiraInsDT: any): void
  {
    this.setPedido.codigo = 0
    this.setPedido.pedido = Pedido
    this.setPedido.vlrPedido = ValorPedido
    this.setPedido.primeiraInst = PrimeiraIns
    this.setPedido.primeiraPrev = PrimeiraPrev
    this.setPedido.primeiraDecisao = PrimeiraDecisao
    this.setPedido.segundaInst = SegundaIns
    this.setPedido.segundaPrev = SegundaPrev
    this.setPedido.segundaDecisao = SegundaDecisao
    this.setPedido.terceiraInst = TerceiraIns
    this.setPedido.terceiraPrev  = TerceiraPrev
    this.setPedido.terceiraDecisao = TerceiraDecisao

    this.processoService.SetProcessoPedido(this.setPedido,this.hashCod,this.processo.ID,PrimeiraInsDT,SegundaInsDT,TerceiraInsDT
      ).subscribe(()=> {})
  }

  insereCusto(tpCusto: any,valor: any,descricaoCusto: any,idDepositoPagamento: any, dtPagamento:any, instancia: any): void
  {
    this.setCusto.codigo = 0
    this.setCusto.tpCusto = tpCusto
    this.setCusto.valor = descricaoCusto
    this.setCusto.descricaoCusto = descricaoCusto
    this.setCusto.idDepositoPagamento = idDepositoPagamento
    this.setCusto.dtPagamento = dtPagamento
    // this.setCusto.carta = carta
    this.setCusto.instancia = instancia
    // this.setCusto.recurso = recurso
    // this.setCusto.valorRecurso = valorRecurso

    this.processoService.SetProcessoCusto(this.setCusto,this.hashCod,this.processo.ID
      ).subscribe(()=> {})
  }

  insereEncargo(Encargo: any,valorEnc: any,observacao: any): void
  {
    this.setEncargo.codigo = 0
    this.setEncargo.encargo = Encargo
    this.setEncargo.valor = valorEnc
    this.setEncargo.observacao = observacao

    this.processoService.SetProcessoEncargo(this.setEncargo,this.hashCod,this.processo.ID
      ).subscribe(()=> {})
  }

  insereDespesas(Despesa: any,valorDes: any,idPagtoDes: any,dataDes: any, instanciaDes: any): void
  {
    this.setDespesa.codigo = 0
    this.setDespesa.despesa = Despesa
    this.setDespesa.valor = valorDes
    this.setDespesa.idPagto = idPagtoDes
    this.setDespesa.data = dataDes
    //this.setDespesa.observacao = observacaoDes
    this.setDespesa.instancia = instanciaDes

    this.processoService.SetProcessoDespesa(this.setDespesa,this.processo.ID,this.hashCod
      ).subscribe(()=> {})
  }


  insereCondenacao(instanciaCon: any,dataCon: any,valorCon: any,obsCon: any): void
  {
    this.setCondenacao.codigo = 0
    this.setCondenacao.instancia = instanciaCon
    this.setCondenacao.data = dataCon
    this.setCondenacao.valor = valorCon
    this.setCondenacao.observacao = obsCon

    this.processoService.SetProcessoCondenacao(this.setCondenacao,this.processo.ID,this.hashCod
      ).subscribe(()=> {})
  }


  selectRevisado()
  {
    this.varSelectRevisadoSim = this.processo.Revisado == 1 ? true : false;
    this.varSelectRevisadoNao = this.processo.Revisado == 1 ? false : true;

    /*
    if(this.processo.Revisado == 1)
    {
      this.varSelectRevisadoSim = true;
      this.varSelectRevisadoNao = false;
    }
    else
    {
      this.varSelectRevisadoSim = false;
      this.varSelectRevisadoNao = true;
    }
    */
    
  }  

}
