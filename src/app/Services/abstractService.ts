import { BehaviorSubject } from 'rxjs';
import { ContentMusic } from '../Model/ContentMusic';
import { ServerPlayerState } from '../Model/playerState';
import { WebSocketConnectionService } from './web-socket-connection.service';

export abstract class MusicService {

  constructor(protected webSocket: WebSocketConnectionService) { }

  abstract serverPlayerState: BehaviorSubject<ServerPlayerState>;
  abstract getData(pathToData?: string): Promise<ContentMusic[]>;
  abstract play();
  abstract setItemSelected(item: ContentMusic);
  abstract currenltyPlayingItemPredicate(currentPlayerState: ServerPlayerState);
  abstract getItemSelected(): ContentMusic;
  abstract getBreadCrumbs(): string[];

  isItemSelected = new BehaviorSubject<boolean>(false);

  stop() {
    this.webSocket.sendCommand({
      command: 'stop',
      parameter: ''
    });
  }

  checkPlayerServerState() {
    this.webSocket.sendCommand({
      command: 'checkState',
      parameter: ''
    });
  }
}
