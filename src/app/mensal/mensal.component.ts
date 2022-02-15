import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { mensal } from '../models/mensal';
import { sgi } from '../models/sgi';
import { SgiService } from '../services/sgi.service';
import { DxDataGridComponent} from 'devextreme-angular';
import { DxDataGridModule } from 'devextreme-angular';
import { Workbook } from 'exceljs';
import { ExcelDataGridCell, exportDataGrid } from 'devextreme/excel_exporter';
import { saveAs } from 'file-saver';
import { FuncionarioService } from '../services/funcionario.service';

@Component({
  selector: 'app-Mensal',
  templateUrl: 'mensal.component.html',
  styleUrls: ['mensal.component.css']
})
export class MensalComponent{

  @ViewChild('mensal', { static: false }) mensalDG: DxDataGridComponent | undefined;

  
  mensal = {} as mensal;
  mensais: mensal[] = [];


  constructor(private router: Router,private sgiService: SgiService,private funcionarioService: FuncionarioService){}

  ngOnInit(){
    if (this.funcionarioService.islogged() == true) {
      this.getMensal();
    }
    else {
      this.router.navigate(["Login"])
    }
  }

  getMensal() {
    this.sgiService.getMensal().subscribe((mensais: mensal[]) => {
      this.mensais = mensais; 
    });
    }

    exportGrids(e: any) {
    const context = this;
    const workbook = new Workbook();
    const mensalSheet = workbook.addWorksheet('Mensal');

    mensalSheet.getRow(2).getCell(2).value = 'Mensal';
    mensalSheet.getRow(2).getCell(2).font = { bold: true, size: 16, underline: 'double' };

    function setAlternatingRowsBackground(gridCell: any, excelCell: any) {
      if (gridCell.rowType === 'header' || gridCell.rowType === 'data') {
        if (excelCell.fullAddress.row % 2 === 0) {
          excelCell.fill = {
            type: 'pattern', pattern: 'solid', fgColor: { argb: 'D3D3D3' }, bgColor: { argb: 'D3D3D3' },
          };
        }
      }
    }

    exportDataGrid({
      worksheet: mensalSheet,
      component: context.mensalDG?.instance,
      topLeftCell: { row: 4, column: 2 },
      customizeCell: ({ gridCell, excelCell}) => {
        setAlternatingRowsBackground(gridCell, excelCell);
      },
    }).then(() => {
      workbook.xlsx.writeBuffer().then((buffer) => {
        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'MultipleGrids.xlsx');
      });
    });
  }
}
