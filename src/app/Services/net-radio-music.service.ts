import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NetRadioContentMusic } from '../Model/NetRadioMusic';
import { MusicService } from './abstractService';

@Injectable({
  providedIn: 'root'
})
export class NetRadioMusicService implements MusicService {

  private selectedRadio: NetRadioContentMusic;

  constructor(private httpClient: HttpClient) { }

  setItemSelected(item: NetRadioContentMusic) {
    this.selectedRadio = item;
    console.log(item);
  }

  getData(): Promise<NetRadioContentMusic[]>  {
    return this.httpClient.get<NetRadioContentMusic[]>(`${environment.serverAddress}/netRadioStations`)
    .toPromise();
  }

  play() {
    throw new Error('Method not implemented.');
  }
}
