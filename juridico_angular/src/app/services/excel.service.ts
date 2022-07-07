import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';

const EXCEL_EXTENSION = '.xlsx';

@Injectable()
export class ExcelService {
  
constructor() { }

public exportAsExcelFile(json: any[], excelFileName: string, nomeRelatorio: string): void {

  const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);

  const workbook: XLSX.WorkBook = { Sheets: { nomeRelatorio: worksheet }, SheetNames: [nomeRelatorio] };

  const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

  this.saveAsExcelFile(excelBuffer, excelFileName, nomeRelatorio);
}
private saveAsExcelFile(buffer: any, fileName: string, Re: string): void {
   const data: Blob = new Blob([buffer], {type: EXCEL_TYPE});
   FileSaver.saveAs(data, fileName + '_'+ Re +'_' + new  Date().getDate()+ '_'+new Date().getMonth() +'_'+ new Date().getFullYear() + EXCEL_EXTENSION);
}
}