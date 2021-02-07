import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AddOnlineRadioComponent } from 'src/app/add-online-radio/add-online-radio.component';
import { AddOnlineRadioDialogResult } from 'src/app/Model/AddOnlineRadioDialogResult';
import { ContentMusic } from 'src/app/Model/ContentMusic';
import { MenuItem } from 'src/app/Model/MenuItem';
import { NetRadioContentMusic } from 'src/app/Model/NetRadioMusic';
import { RemoveOnlineRadioInputData } from 'src/app/Model/RemoveOnlineRadioInputData';
import { RemoveOnlineRadioComponent } from 'src/app/remove-online-radio/remove-online-radio.component';
import { NetRadioMusicService } from 'src/app/Services/net-radio-music.service';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss']
})
export class ContextMenuComponent implements OnDestroy {

  @Input() menuSelection: MenuItem;
  @Output() contentToDisplayChanged = new EventEmitter<ContentMusic[]>();

  constructor(private matDialog: MatDialog, public netRadioMusicService: NetRadioMusicService) { }

  menuItem = MenuItem;
  private unsubscribe$ = new Subject();

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  openAddNewOnlineRadio() {
    this.matDialog
      .open(AddOnlineRadioComponent, {
        width: '30em'
      })
      .afterClosed()
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe((result: AddOnlineRadioDialogResult) => {
        if (result.confirmed) {
          this.contentToDisplayChanged.emit(result.radioStations);
        }
      });
  }

  removeOnlineRadio() {
    this.matDialog
      .open(RemoveOnlineRadioComponent, {
        width: '30%',
        data: {
          radioName: this.netRadioMusicService.getItemSelected().name,
          radioUrl: (this.netRadioMusicService.getItemSelected() as NetRadioContentMusic).radioUrl
        } as RemoveOnlineRadioInputData
      })
      .afterClosed()
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe((netRadios: NetRadioContentMusic[]) => {
        if (netRadios.length > 0) {
          this.contentToDisplayChanged.emit(netRadios);
        }
      });
  }
}
