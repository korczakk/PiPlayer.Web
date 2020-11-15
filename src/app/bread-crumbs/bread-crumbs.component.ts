import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.scss']
})
export class BreadCrumbsComponent implements OnInit {

  @Input() breadCrumbs: string[] = [];

  ngOnInit() {

  }

  onClick(index: number) {
    const newArray = this.breadCrumbs.slice(0, index + 1);
  }
}
