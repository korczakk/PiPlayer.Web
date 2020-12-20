import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatInput } from '@angular/material';
import { of } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
import { AddOnlineRadioDialogResult } from '../Model/AddOnlineRadioDialogResult';
import { NetRadioMusicService } from '../Services/net-radio-music.service';

@Component({
  selector: 'app-add-online-radio',
  templateUrl: './add-online-radio.component.html',
  styleUrls: ['./add-online-radio.component.scss']
})
export class AddOnlineRadioComponent implements AfterViewInit {

  form: FormGroup;
  requestError: HttpErrorResponse = undefined;

  @ViewChild('inputName', { static: false }) inputName: MatInput;

  constructor(public dialogRef: MatDialogRef<AddOnlineRadioComponent, AddOnlineRadioDialogResult>,
    private fb: FormBuilder,
    private netRadioService: NetRadioMusicService) {
    this.form = fb.group({
      name: ['', Validators.required],
      radioUrl: ['', Validators.required],
      isFolder: false
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.inputName.focus(), 0);
  }

  onCancel() {
    this.dialogRef.close({ confirmed: false, radioStations: []  });
  }

  onSave() {
    this.netRadioService.addNewRadioStation(this.form.value)
      .pipe(
        map((stations) => {
          this.dialogRef.close({ confirmed: true, radioStations: stations });
        }),
        catchError(err => {
          console.log(err);
          this.requestError = err;
          return of({ confirmed: false, radioStations: [] });
        }),
        take(1)
      ).subscribe();
  }
}
