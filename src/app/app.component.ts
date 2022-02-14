import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuService } from './services/menu.service';
import { Menu } from './models/menu';
import { Router, RouterLink } from '@angular/router';
import { DxTreeViewComponent } from 'devextreme-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private router: Router) {
    
  }

  
  

  ngOnInit() {
    this.navigateanotherPage("Login")
  }

  public navigateanotherPage(e: any){
    /**window.location.href = <string>this.menus[(e.itemIndex)].caminho; */   
     this.router.navigate([e])
  }
}