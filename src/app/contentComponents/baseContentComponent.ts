import { EventEmitter, Input, Output } from '@angular/core';
import { ContentMusic } from '../Model/ContentMusic';

export class BaseContentComponent {

  @Input() content: ContentMusic;
  @Output() itemSelected = new EventEmitter<ContentMusic>();

  selectItem() {
    this.itemSelected.emit(this.content);
    this.content.isSelected = true;
  }
}
