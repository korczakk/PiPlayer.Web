import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ContentMusic } from '../Model/ContentMusic';
import { MusicService } from './abstractService';

@Injectable({
  providedIn: 'root'
})
export class FileSystemMusicService implements MusicService {

  constructor(private httpClient: HttpClient) { }

  getData(pathToData?: string): Observable<ContentMusic[]> {
    return this.httpClient.get<ContentMusic[]>(`${environment.serverAddress}/getFolderContent${pathToData ? pathToData : ""}`);
  }
  play() {
    throw new Error('Method not implemented.');
  }
}
