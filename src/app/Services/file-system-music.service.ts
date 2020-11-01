import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ContentMusic } from '../Model/ContentMusic';
import { FileSystemMusic } from '../Model/FileSystemMusic';
import { MusicService } from './abstractService';

@Injectable({
  providedIn: 'root'
})
export class FileSystemMusicService implements MusicService {

  private selectedFile: FileSystemMusic;

  constructor(private httpClient: HttpClient) { }

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
