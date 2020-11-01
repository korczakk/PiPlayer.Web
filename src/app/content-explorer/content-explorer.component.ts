import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContentMusic } from '../Model/ContentMusic';
import { MenuItem } from '../Model/MenuItem';
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

  constructor(private serviceFactory: MusicServicesFactoryService,
    private topMenuService: TopMenuService) { }

  ngOnDestroy(): void {
    this.menuSelectionSubscription.unsubscribe();
  }

  ngOnInit() {
    this.menuSelectionSubscription = this.topMenuService.menuSevection.subscribe(async menuItem => {
      this.menuSelection = menuItem;
      this.musicService = this.serviceFactory.getMusicService(menuItem);

      this.contentToDisplay = await this.musicService.getData();
    });
  }

  itemSelected(item: ContentMusic) {
    this.musicService.setSelectedItem(item);
  }

}
