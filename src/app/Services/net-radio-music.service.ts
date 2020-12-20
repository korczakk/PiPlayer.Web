import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ContentMusic } from '../Model/ContentMusic';
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

  constructor(private httpClient: HttpClient, protected webSocket: WebSocketConnectionService) {
    super(webSocket);
    this.serverPlayerState = webSocket.serverMessages
  }

  setItemSelected(item: NetRadioContentMusic) {
    this.selectedRadio = item;
    this.isItemSelected.next(true);
  }

  getItemSelected(): ContentMusic {
    return this.selectedRadio;
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

  currenltyPlayingItemPredicate(currentPlayerState: ServerPlayerState) {
    return (value: NetRadioContentMusic, index: number, obj: ContentMusic[]) => {
      if(value.radioUrl === currentPlayerState.fileName) {
        return value;
      }
    }
  }

  getRelativePath(): string[] {
    return [];
  }

  setRelativePath(newRelativePath: string[]) {
  }

  addNewRadioStation(newStation: NetRadioContentMusic): Observable<NetRadioContentMusic[]> {
    const json = JSON.stringify(newStation);
    return this.httpClient.post<NetRadioContentMusic[]>(`${environment.serverAddress}/netRadioStations`, newStation);
  }
}
