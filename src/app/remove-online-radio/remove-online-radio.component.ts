import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RemoveOnlineRadioInputData } from '../Model/RemoveOnlineRadioInputData';

@Component({
  selector: 'app-dialog-window',
  templateUrl: './remove-online-radio.component.html',
  styleUrls: ['./remove-online-radio.component.scss']
})
export class RemoveOnlineRadioComponent {

  constructor(private matDialog: MatDialogRef<RemoveOnlineRadioComponent, boolean>,
    @Inject(MAT_DIALOG_DATA) public data: RemoveOnlineRadioInputData) { }

  onCancel() {
    this.matDialog.close(true);
  }

  onConfirm() {
    this.matDialog.close(false)
  }

}
