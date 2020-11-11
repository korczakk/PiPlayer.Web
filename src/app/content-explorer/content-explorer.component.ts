import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContentMusic } from '../Model/ContentMusic';
import { MenuItem } from '../Model/MenuItem';
import { ServerPlayerState } from '../Model/playerState';
import { PlayerStateEnum } from '../Model/PlayerStateEnum';
import { MusicService } from '../Services/abstractService';
import { MusicServicesFactoryService } from '../Services/music-services-factory.service';
import { TopMenuService } from '../Services/top-menu.service';

@Component({
  selector: 'app-file-explorer',
  templateUrl: './content-explorer.component.html',
  styleUrls: ['./content-explorer.component.scss']
})
export class ContentExplorerComponent implements OnInit, OnDestroy {

  contentToDisplay: ContentMusic[];
  menuSelection: MenuItem;
  menuItem = MenuItem;
  musicService: MusicService;

  private menuSelectionSubscription: Subscription;
  private playerStateSubscription: Subscription;

  constructor(private serviceFactory: MusicServicesFactoryService,
    private topMenuService: TopMenuService) { }

  ngOnDestroy(): void {
    this.menuSelectionSubscription.unsubscribe();
    this.playerStateSubscription.unsubscribe();
  }

  ngOnInit() {
    this.menuSelectionSubscription = this.topMenuService.menuSevection.subscribe(async menuItem => {
      this.menuSelection = menuItem;
      this.musicService = this.serviceFactory.getMusicService(menuItem);

      this.contentToDisplay = await this.musicService.getData();
      this.musicService.checkPlayerServerState();
    });

    this.playerStateSubscription = this.musicService.serverPlayerState.subscribe(state => {
      this.selectCurrentlyPlayingItem(state);
    });
  }

  itemSelected(item: ContentMusic) {
    this.deselectItem();

    this.musicService.setItemSelected(item);
  }

  deselectItem() {
    let currentlySelectedItem = this.contentToDisplay.find(x => x.isSelected);
    if(currentlySelectedItem) {
      currentlySelectedItem.isSelected = false;
    }
  }

  selectCurrentlyPlayingItem(currentState: ServerPlayerState) {
    if (this.contentToDisplay && (currentState.state === PlayerStateEnum.Playing || currentState.state === PlayerStateEnum.Started)) {
      this.deselectItem();

      let foundContent = this.contentToDisplay.find(this.musicService.currenltyPlayingItemPredicate(currentState));
      if (foundContent) {
        foundContent.isSelected = true;
        this.musicService.setItemSelected(foundContent);
      }
    }
  }
}
