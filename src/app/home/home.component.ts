import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../Model/MenuItem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectedMenuItem: MenuItem;

  constructor() { }

  ngOnInit() {
  }

  topMenuSelection(menuSelected: MenuItem) {
    this.selectedMenuItem = menuSelected;
  }

}
