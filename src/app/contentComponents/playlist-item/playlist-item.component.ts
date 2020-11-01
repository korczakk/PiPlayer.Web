import { Component, Input } from '@angular/core';
import { ContentMusic } from 'src/app/Model/ContentMusic';
import { BaseContentComponent } from '../baseContentComponent';

@Component({
  selector: 'app-playlist-item',
  templateUrl: './playlist-item.component.html',
  styleUrls: ['./playlist-item.component.scss', '../commonStyles.scss']
})
export class PlaylistItemComponent extends BaseContentComponent {


}
