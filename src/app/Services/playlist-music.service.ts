import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ContentMusic } from '../Model/ContentMusic';
import { ServerPlayerState } from '../Model/playerState';
import { PlaylistsMusic } from '../Model/PlaylistsMusic';
import { MusicService } from './abstractService';
import { WebSocketConnectionService } from './web-socket-connection.service';

@Injectable({
  providedIn: 'root'
})
export class PlaylistMusicService extends MusicService {
  serverPlayerState: BehaviorSubject<ServerPlayerState>;

  private selectedPlaylist: PlaylistsMusic;

  constructor(private httpClient: HttpClient, private webSocket: WebSocketConnectionService) {
    super();
    this.serverPlayerState = webSocket.serverMessages
  }

  setItemSelected(item: PlaylistsMusic) {
    this.selectedPlaylist = item;
  }

  getData(): Promise<ContentMusic[]>  {
    return null;
  }
  play() {
    throw new Error('Method not implemented.');
  }
}
