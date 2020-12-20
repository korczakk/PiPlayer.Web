import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Subscription } from 'rxjs';
import { AddOnlineRadioComponent } from '../add-online-radio/add-online-radio.component';
import { AddOnlineRadioDialogResult } from '../Model/AddOnlineRadioDialogResult';
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
  breadCrumbs: string[];

  private menuSelectionSubscription: Subscription;
  private playerStateSubscription: Subscription;
  private dialogSubscription: Subscription;

  constructor(private serviceFactory: MusicServicesFactoryService,
    private topMenuService: TopMenuService,
    private matDialog: MatDialog) { }

  ngOnDestroy(): void {
    this.menuSelectionSubscription.unsubscribe();
    this.playerStateSubscription.unsubscribe();
    this.dialogSubscription.unsubscribe();
  }

  ngOnInit() {
    this.menuSelectionSubscription = this.topMenuService.menuSelection
      .subscribe(async menuItem => this.onMenuSelectionChange(menuItem));

    this.musicService.checkPlayerServerState();

    this.playerStateSubscription = this.musicService.serverPlayerState.subscribe(state => {
      this.selectCurrentlyPlayingItem(state);
    });
  }

  async onMenuSelectionChange(menuItem: MenuItem) {
    this.contentToDisplay = [];
    this.menuSelection = menuItem;
    this.musicService = this.serviceFactory.getMusicService(menuItem);

    this.contentToDisplay = await this.musicService.getData();
    this.breadCrumbs = this.musicService.getRelativePath();
    this.selectCurrentlyPlayingItem(this.musicService.serverPlayerState.getValue());
  }

  itemSelected(item: ContentMusic) {
    this.deselectItem();

    this.musicService.setItemSelected(item);
  }

  async openFolder(item: ContentMusic) {
    if (this.musicService.serverPlayerState.getValue().state === PlayerStateEnum.NotConnected) {
      return;
    }
    this.contentToDisplay = await this.musicService.getData(item.name);
    this.breadCrumbs = this.musicService.getRelativePath();
    this.selectCurrentlyPlayingItem(this.musicService.serverPlayerState.getValue());
  }

  private deselectItem() {
    let currentlySelectedItem = this.contentToDisplay.find(x => x.isSelected);
    if (currentlySelectedItem) {
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

  async breadCrumbCliekce(newRelativePath: string[]) {
    this.musicService.setRelativePath(newRelativePath);
    this.contentToDisplay = await this.musicService.getData();
    this.breadCrumbs = newRelativePath;
  }

  openAddNewOnlineRadio() {
    this.dialogSubscription = this.matDialog
      .open(AddOnlineRadioComponent, {
        width: '30em'
      })
      .afterClosed()
      .subscribe((result: AddOnlineRadioDialogResult) => {
        if(result.confirmed) {
          this.contentToDisplay = result.radioStations;
        }
      });
  }
}
