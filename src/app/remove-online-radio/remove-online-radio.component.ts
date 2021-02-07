import { Component, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NetRadioContentMusic } from '../Model/NetRadioMusic';
import { RemoveOnlineRadioInputData } from '../Model/RemoveOnlineRadioInputData';
import { NetRadioMusicService } from '../Services/net-radio-music.service';

@Component({
  selector: 'app-dialog-window',
  templateUrl: './remove-online-radio.component.html',
  styleUrls: ['./remove-online-radio.component.scss']
})
export class RemoveOnlineRadioComponent implements OnDestroy {

  private unsubscribe$ = new Subject();

  constructor(private matDialog: MatDialogRef<RemoveOnlineRadioComponent, NetRadioContentMusic[]>,
    @Inject(MAT_DIALOG_DATA) public data: RemoveOnlineRadioInputData,
    private netRadioService: NetRadioMusicService) { }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onCancel() {
    this.matDialog.close([]);
  }

  onConfirm() {
    this.netRadioService.removeRadioStation((this.netRadioService.getItemSelected() as NetRadioContentMusic).radioUrl)
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe(netRadios => {
        this.matDialog.close(netRadios)
      });
  }
}
