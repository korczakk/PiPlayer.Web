import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs';
import { AddOnlineRadioComponent } from 'src/app/add-online-radio/add-online-radio.component';
import { AddOnlineRadioDialogResult } from 'src/app/Model/AddOnlineRadioDialogResult';
import { ContentMusic } from 'src/app/Model/ContentMusic';
import { MenuItem } from 'src/app/Model/MenuItem';
import { NetRadioContentMusic } from 'src/app/Model/NetRadioMusic';
import { RemoveOnlineRadioInputData } from 'src/app/Model/RemoveOnlineRadioInputData';
import { RemoveOnlineRadioComponent } from 'src/app/remove-online-radio/remove-online-radio.component';
import { MusicService } from 'src/app/Services/abstractService';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss']
})
export class ContextMenuComponent implements OnDestroy {

  @Input() musicService: MusicService;
  @Input() menuSelection: MenuItem;

  @Output() contentToDisplayChanged = new EventEmitter<ContentMusic[]>();

  constructor(private matDialog: MatDialog) { }

  menuItem = MenuItem;
  private dialogSubscription: Subscription;

  ngOnDestroy(): void {
    this.dialogSubscription.unsubscribe();
  }

  openAddNewOnlineRadio() {
    this.dialogSubscription = this.matDialog
      .open(AddOnlineRadioComponent, {
        width: '30em'
      })
      .afterClosed()
      .subscribe((result: AddOnlineRadioDialogResult) => {
        if(result.confirmed) {
          this.contentToDisplayChanged.emit(result.radioStations);
        }
      });
  }

  removeOnlineRadio() {
    this.matDialog.open(RemoveOnlineRadioComponent, {
      data: {
        radioName: this.musicService.getItemSelected().name,
        radioUrl: (this.musicService.getItemSelected() as NetRadioContentMusic).radioUrl
      } as RemoveOnlineRadioInputData
    })
  }
}
