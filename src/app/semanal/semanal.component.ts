import { Component, OnInit, ViewChild } from '@angular/core';
import { SgiService } from '../services/sgi.service';
import { sgi } from '../models/sgi';
import { saveAs } from 'file-saver';
import { Workbook } from 'exceljs';
import {DxButtonModule,DxTreeViewModule,DxMenuModule, DxTabPanelModule, DxDataGridModule, DxDataGridComponent} from 'devextreme-angular';
import { ExcelDataGridCell, exportDataGrid } from 'devextreme/excel_exporter';
import 'devextreme/data/odata/store';
import { FuncionarioService } from '../services/funcionario.service';
import { Funcionario } from '../models/funcionario';

@Component({
  selector: 'app-semanal',
  templateUrl: 'semanal.component.html',
  styleUrls: ['semanal.component.css'],
  
})
export class SemanalComponent{
  @ViewChild('sgi', { static: false }) sgiDG: DxDataGridComponent | undefined;
  
  sgi = {} as sgi;
  funcionarios: Funcionario[] = [];

  funcionario = {} as Funcionario;
  sgis: sgi[] = [];
  constructor(private sgiService: SgiService,private funcionarioService: FuncionarioService) {
    
  }
  

  ngOnInit() {
   this.getSgis();
  }

  /*getFuncionario() {
      this.funcionarioService.getFuncionarios().subscribe((funcionarios: Funcionario[]) => {
        this.funcionarios = funcionarios;
      });
  }*/
  getSgis() {
    this.sgiService.getSgi().subscribe((sgis: sgi[]) => {
      this.sgis = sgis; 
    });
    }
  exportGrids(e: any) {
    const context = this;
    const workbook = new Workbook();
    const semanalSheet = workbook.addWorksheet('Semanal');

    semanalSheet.getRow(2).getCell(2).value = 'Semanal';
    semanalSheet.getRow(2).getCell(2).font = { bold: true, size: 16, underline: 'double' };

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
      worksheet: semanalSheet,
      component: context.sgiDG?.instance,
      topLeftCell: { row: 4, column: 2 },
      customizeCell: ({ gridCell, excelCell }) => {
        setAlternatingRowsBackground(gridCell, excelCell);
      },
    }).then(() => {
      workbook.xlsx.writeBuffer().then((buffer) => {
        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'MultipleGrids.xlsx');
      });
    });
  }
}