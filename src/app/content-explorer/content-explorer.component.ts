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

  private menuSelectionSubscription: Subscription;

  constructor(private serviceFactory: MusicServicesFactoryService,
    private topMenuService: TopMenuService) { }

  ngOnDestroy(): void {
    this.menuSelectionSubscription.unsubscribe();
  }

  ngOnInit() {
    this.menuSelectionSubscription = this.topMenuService.menuSevection.subscribe(menuItem => {
      this.menuSelection = menuItem;
      const musicService: MusicService = this.serviceFactory.getMusicService(menuItem);

      musicService.getData().subscribe((data: ContentMusic[]) => {
        this.contentToDisplay = data;
      },
      error => {
        console.log(error);
      })
    });
  }

}
