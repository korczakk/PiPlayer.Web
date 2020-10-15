import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MenuItem } from '../Model/MenuItem';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {

  @Output() selectedMenu = new EventEmitter<MenuItem>();

  MenuItem = MenuItem;

  ngOnInit(): void {
    this.selectedMenu.emit(MenuItem.Files);
  }

  menuSelected(item: MenuItem) {
    this.selectedMenu.emit(item);
  }
}
