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
  abstract getRelativePath(): string[];
  abstract setRelativePath(newRelativePath: string[]);

  isItemSelected = new BehaviorSubject<boolean>(false);

  stop() {
    this.webSocket.sendCommand({
      command: 'stop',
      parameter: ''
    });
  }

  next() {
    this.webSocket.sendCommand({
      command: 'next',
      parameter: ''
    });
  }

  previous() {
    this.webSocket.sendCommand({
      command: 'previous',
      parameter: ''
    });
  }

  checkPlayerServerState() {
    this.webSocket.sendCommand({
      command: 'checkState',
      parameter: ''
    });
  }

  setVolume(volumePercent: number) {
    this.webSocket.sendCommand({
      command: 'volume',
      parameter: volumePercent.toString()
    });
  }
}
