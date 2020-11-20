import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { MenuItem } from '../Model/MenuItem';
import { ServerPlayerState } from '../Model/playerState';
import { PlayerStateEnum } from '../Model/PlayerStateEnum';
import { MusicService } from '../Services/abstractService';
import { MusicServicesFactoryService } from '../Services/music-services-factory.service';
import { TopMenuService } from '../Services/top-menu.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnDestroy, OnInit {

  menuSelection: MenuItem;
  menuItem = MenuItem;
  musicService: MusicService;
  playerState: ServerPlayerState;
  PlayerStateEnum = PlayerStateEnum;
  contentExplorerHasSelectedItem: BehaviorSubject<boolean>;

  topMenuServiceSubscription: Subscription;
  playerStateSubscription: Subscription;

  constructor(private topMenuService: TopMenuService, private musicServiceFactory: MusicServicesFactoryService) { }

  ngOnInit(): void {
    this.topMenuServiceSubscription = this.topMenuService.menuSelection.subscribe(menuSelection => {
      this.menuSelection = menuSelection;

      this.musicService = this.musicServiceFactory.getMusicService(menuSelection);
      this.contentExplorerHasSelectedItem = this.musicService.isItemSelected;
    })

    this.playerStateSubscription = this.musicService.serverPlayerState.subscribe(state => this.playerState = state);
  }

  ngOnDestroy(): void {
    this.topMenuServiceSubscription.unsubscribe();
    this.playerStateSubscription.unsubscribe();
  }

  play() {
    this.musicService.play();
  }

  stop() {
    this.musicService.stop();
  }

  next() {
    this.musicService.next();
  }

  previous() {
    this.musicService.previous();
  }
}
