import { Component } from '@angular/core';
import { MenuItem } from '../Model/MenuItem';
import { TopMenuService } from '../Services/top-menu.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent {

  MenuItem = MenuItem;

  constructor(private menuService: TopMenuService) {  }

  menuSelected(item: MenuItem) {
    this.menuService.menuSevection.next(item);
  }
}
