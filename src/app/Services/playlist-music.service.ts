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
  getRelativePath(): string[] {
    return [];
  }
  setRelativePath(newRelativePath: string[]) {

  }
  getItemSelected(): ContentMusic {
    return null;
  }

  serverPlayerState: BehaviorSubject<ServerPlayerState>;

  private selectedPlaylist: PlaylistsMusic;

  constructor(private httpClient: HttpClient, protected webSocket: WebSocketConnectionService) {
    super(webSocket);
    this.serverPlayerState = webSocket.serverMessages
  }

  setItemSelected(item: PlaylistsMusic) {
    this.selectedPlaylist = item;
    this.isItemSelected.next(true);
  }

  getData(): Promise<ContentMusic[]>  {
    return null;
  }

  play() {

  }

  currenltyPlayingItemPredicate(currentPlayerState: ServerPlayerState) {
    return (value: ContentMusic, index: number, obj: ContentMusic[]) => {

    }
  }
}
