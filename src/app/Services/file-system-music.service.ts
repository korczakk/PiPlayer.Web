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

  constructor(private httpClient: HttpClient, private webSocket: WebSocketConnectionService) {
    super();
    this.serverPlayerState = webSocket.serverMessages
  }

  setItemSelected(item: FileSystemMusic) {
    this.selectedFile = item;
    console.log(item);
  }

  getData(pathToData?: string): Promise<FileSystemMusic[]> {
    return this.httpClient.get<FileSystemMusic[]>(`${environment.serverAddress}/getFolderContent${pathToData ? pathToData : ""}`)
    .toPromise();
  }

  play() {
    throw new Error('Method not implemented.');
  }
}
