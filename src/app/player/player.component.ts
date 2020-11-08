import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
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
export class PlayerComponent implements OnDestroy {

  menuSelection: MenuItem;
  menuItem = MenuItem;
  musicService: MusicService;
  playerState: ServerPlayerState;
  PlayerStateEnum = PlayerStateEnum;

  topMenuServiceSubscription: Subscription;
  serverPlayerStateSubsription: Subscription;

  constructor(private topMenuService: TopMenuService, private musicServiceFactory: MusicServicesFactoryService) {
    this.topMenuServiceSubscription = topMenuService.menuSevection.subscribe(menuSelection => {
      this.menuSelection = menuSelection;

      this.musicService = musicServiceFactory.getMusicService(menuSelection);
      this.serverPlayerStateSubsription = this.musicService.serverPlayerState.subscribe(state => this.playerState = state);
    })
  }

  ngOnDestroy(): void {
    this.topMenuServiceSubscription.unsubscribe();
    this.serverPlayerStateSubsription.unsubscribe();
  }

  play() {
    this.musicService.play();
  }
}
