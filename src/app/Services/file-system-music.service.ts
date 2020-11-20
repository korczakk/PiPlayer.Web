import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ContentMusic } from '../Model/ContentMusic';
import { FileSystemMusic } from '../Model/FileSystemMusic';
import { ServerPlayerState } from '../Model/playerState';
import { MusicService } from './abstractService';
import { WebSocketConnectionService } from './web-socket-connection.service';

@Injectable({
  providedIn: 'root'
})
export class FileSystemMusicService extends MusicService {

  serverPlayerState: BehaviorSubject<ServerPlayerState>;

  private selectedItem: FileSystemMusic;

  constructor(private httpClient: HttpClient, protected webSocket: WebSocketConnectionService) {
    super(webSocket);
    this.serverPlayerState = webSocket.serverMessages
  }

  setItemSelected(item: FileSystemMusic) {
    this.selectedItem = item;
    this.isItemSelected.next(true);
  }

  getItemSelected(): ContentMusic {
    return this.selectedItem;
  }

  getData(pathToData?: string): Promise<FileSystemMusic[]> {
    if(pathToData) {
      this.relativePath.push(pathToData);
    }
    const path = this.relativePath.join('/').replace('//', '/');
    const query = path ? `?foldername=${path}` : '';
    return this.httpClient.get<FileSystemMusic[]>(`${environment.serverAddress}/getFolderContent${query}`)
      .toPromise();
  }

  play() {
    if(this.selectedItem.isFolder) {
      this.webSocket.sendCommand({
        command: 'openFolder',
        parameter: `${this.selectedItem.path}${this.selectedItem.name}`
      });
    } else {
      this.webSocket.sendCommand({
        command: 'openFile',
        parameter: `${this.selectedItem.path}/${this.selectedItem.name}`
      });
    }
  }

  currenltyPlayingItemPredicate(currentPlayerState: ServerPlayerState) {
    return (value: FileSystemMusic, index: number, obj: ContentMusic[]) => {
      if((value.path + value.name) === currentPlayerState.fileName) {
        return value;
      }
    }
  }
}
