import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-currently-playing',
  templateUrl: './currently-playing.component.html',
  styleUrls: ['./currently-playing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentlyPlayingComponent implements OnChanges {

  @Input() currentlyPlaying;

  showMore = false;

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.currentlyPlaying.currentValue) {
      if(changes.currentlyPlaying && changes.currentlyPlaying.currentValue.length >= 90) {
        this.showMore = true;
       } else {
        this.showMore = false;
       }
    }
  }

  get displayCurrentlyPlaying() {
    if(this.currentlyPlaying && this.currentlyPlaying.length >= 90) {
      const toDisplay = this.currentlyPlaying.slice(0, 77);

      return toDisplay;
    }
    return this.currentlyPlaying;
  }
}
