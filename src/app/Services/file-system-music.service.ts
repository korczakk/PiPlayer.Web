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

  private selectedFile: FileSystemMusic;
  private relativePath = ['/'];

  constructor(private httpClient: HttpClient, protected webSocket: WebSocketConnectionService) {
    super(webSocket);
    this.serverPlayerState = webSocket.serverMessages
  }

  setItemSelected(item: FileSystemMusic) {
    this.selectedFile = item;
    this.isItemSelected.next(true);
  }

  getItemSelected(): ContentMusic {
    return this.selectedFile;
  }

  getData(pathToData?: string): Promise<FileSystemMusic[]> {
    if(pathToData) {
      this.relativePath.push(pathToData);
    }
    const path = this.relativePath.join('/');
    const query = `?foldername=${path}`;
    return this.httpClient.get<FileSystemMusic[]>(`${environment.serverAddress}/getFolderContent${query}`)
      .toPromise();
  }

  play() {
    this.webSocket.sendCommand({
      command: 'openFile',
      parameter: `${this.selectedFile.path}${this.selectedFile.name}`
    });
  }

  currenltyPlayingItemPredicate(currentPlayerState: ServerPlayerState) {
    return (value: FileSystemMusic, index: number, obj: ContentMusic[]) => {
      if((value.path + value.name) === currentPlayerState.fileName) {
        return value;
      }
    }
  }

  getBreadCrumbs(): string[] {
    return this.relativePath;
  }
}
