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
  @ViewChild("tree")
  Menu = {} as Menu;
  menus: Menu[] = []; 

  public treeview = {} as DxTreeViewComponent;

  constructor(private menuService: MenuService, private router: Router) {
    
  }

  
  

  ngOnInit() {
    this.getMenus();
    this.router.navigate(['']);
  }

  public navigateanotherPage(e: any){
    /**window.location.href = <string>this.menus[(e.itemIndex)].caminho; */   
    let routerLink: string = this.menus[e.itemIndex].caminho;
     this.router.navigate([routerLink])
}
    getMenus() {
      this.menuService.getMenu().subscribe((menus: Menu[]) => {
        this.menus = menus; 
      });
      }
}