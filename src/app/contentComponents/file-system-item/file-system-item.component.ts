import { EventEmitter } from '@angular/core';
import { Component, Input, Output } from '@angular/core';
import { ContentMusic } from 'src/app/Model/ContentMusic';

@Component({
  selector: 'app-file-system-item',
  templateUrl: './file-system-item.component.html',
  styleUrls: ['./file-system-item.component.scss', '../commonStyles.scss']
})
export class FileSystemItemComponent {

  @Input() content: ContentMusic;
  @Output() itemSelected = new EventEmitter<ContentMusic>();

  selectItem() {
    if(!this.content.isFolder) {
      this.itemSelected.emit(this.content);
    }
  }
}
