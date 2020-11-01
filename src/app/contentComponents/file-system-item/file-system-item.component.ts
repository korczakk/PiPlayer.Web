import { Component } from '@angular/core';
import { BaseContentComponent } from '../baseContentComponent';

@Component({
  selector: 'app-file-system-item',
  templateUrl: './file-system-item.component.html',
  styleUrls: ['./file-system-item.component.scss', '../commonStyles.scss']
})
export class FileSystemItemComponent extends BaseContentComponent {
}
