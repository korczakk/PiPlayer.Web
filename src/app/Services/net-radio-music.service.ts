import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NetRadioContentMusic } from '../Model/NetRadioMusic';
import { ServerPlayerState } from '../Model/playerState';
import { MusicService } from './abstractService';
import { WebSocketConnectionService } from './web-socket-connection.service';

@Injectable({
  providedIn: 'root'
})
export class NetRadioMusicService extends MusicService {

  serverPlayerState: BehaviorSubject<ServerPlayerState>;

  private selectedRadio: NetRadioContentMusic;

  constructor(private httpClient: HttpClient, private webSocket: WebSocketConnectionService) {
    super();
    this.serverPlayerState = webSocket.serverMessages
  }

  setItemSelected(item: NetRadioContentMusic) {
    this.selectedRadio = item;
  }

  getData(): Promise<NetRadioContentMusic[]>  {
    return this.httpClient.get<NetRadioContentMusic[]>(`${environment.serverAddress}/netRadioStations`)
    .toPromise();
  }

  play() {
    this.webSocket.sendCommand({
      command: 'openFile',
      parameter: this.selectedRadio.radioUrl
    });
  }
}
