import { Component, Input } from '@angular/core';
import { ContentMusic } from 'src/app/Model/ContentMusic';

@Component({
  selector: 'app-playlist-item',
  templateUrl: './playlist-item.component.html',
  styleUrls: ['./playlist-item.component.scss', '../commonStyles.scss']
})
export class PlaylistItemComponent {

  @Input() content: ContentMusic;

}
