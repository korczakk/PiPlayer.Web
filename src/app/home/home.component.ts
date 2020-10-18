import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../Model/MenuItem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  menuSlectionItem: MenuItem;

  constructor() { }

  ngOnInit() {
  }

  topMenuSelection(menuSelection: MenuItem) {
    this.menuSlectionItem = menuSelection;
  }

}
