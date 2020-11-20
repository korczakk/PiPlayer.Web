import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.scss']
})
export class BreadCrumbsComponent {

  @Input() breadCrumbs: string[] = [];
  @Output() breadCrumbClicked = new EventEmitter<string[]>();

  onClick(index: number) {
    const newArray = this.breadCrumbs.slice(0, index + 1);
    this.breadCrumbClicked.emit(newArray);
  }
}
