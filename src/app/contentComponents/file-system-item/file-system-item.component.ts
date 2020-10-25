import { Component, Input } from '@angular/core';
import { ContentMusic } from 'src/app/Model/ContentMusic';

@Component({
  selector: 'app-file-system-item',
  templateUrl: './file-system-item.component.html',
  styleUrls: ['./file-system-item.component.scss', '../commonStyles.scss']
})
export class FileSystemItemComponent {

  @Input() content: ContentMusic;

  constructor() { }

}
