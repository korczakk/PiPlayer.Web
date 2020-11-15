import { Component, EventEmitter, Output } from '@angular/core';
import { ContentMusic } from 'src/app/Model/ContentMusic';
import { BaseContentComponent } from '../baseContentComponent';

@Component({
  selector: 'app-file-system-item',
  templateUrl: './file-system-item.component.html',
  styleUrls: ['./file-system-item.component.scss', '../commonStyles.scss']
})
export class FileSystemItemComponent extends BaseContentComponent {

  @Output() openFolder = new EventEmitter<ContentMusic>();

  onOpenFolder() {
    this.openFolder.emit(this.content);
  }

}
