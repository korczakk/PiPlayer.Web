import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-currently-playing',
  templateUrl: './currently-playing.component.html',
  styleUrls: ['./currently-playing.component.scss']
})
export class CurrentlyPlayingComponent {

  @Input() currentlyPlaying: '';

  showMore = false;

  get displayCurrentlyPlaying() {
    if(this.currentlyPlaying.length >= 96) {
      const toDisplay = this.currentlyPlaying.slice(0, 77);
      this.showMore = true;

      return toDisplay;
    }
    return this.currentlyPlaying;
  }
}
