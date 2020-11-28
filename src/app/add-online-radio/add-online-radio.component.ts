import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-online-radio',
  templateUrl: './add-online-radio.component.html',
  styleUrls: ['./add-online-radio.component.scss']
})
export class AddOnlineRadioComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddOnlineRadioComponent>) { }

  ngOnInit() {
  }

  // tu wołam serwis do zapisywania nowej pozycji na liście (call HTTP). API zwóci całą listę
  // z nową pozycją którą zapisuję w net-radio-music-service. Tam musi być observable do któreo
  // subskrybuje się content-explorer

}
