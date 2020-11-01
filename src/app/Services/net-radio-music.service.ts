import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ContentMusic } from '../Model/ContentMusic';
import { NetRadioContentMusic } from '../Model/NetRadioMusic';
import { MusicService } from './abstractService';

@Injectable({
  providedIn: 'root'
})
export class NetRadioMusicService implements MusicService {

  constructor(private httpClient: HttpClient) { }

  setSelectedItem(item: ContentMusic) {
    throw new Error('Method not implemented.');
  }

  getData(): Promise<NetRadioContentMusic[]>  {
    return this.httpClient.get<NetRadioContentMusic[]>(`${environment.serverAddress}/netRadioStations`)
    .toPromise();
  }

  play() {
    throw new Error('Method not implemented.');
  }
}
