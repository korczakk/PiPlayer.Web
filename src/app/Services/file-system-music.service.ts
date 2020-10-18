import { Injectable } from '@angular/core';
import { MusicService } from './abstractService';

@Injectable({
  providedIn: 'root'
})
export class FileSystemMusicService implements MusicService {

  constructor() { }

  getData() {
    throw new Error('Method not implemented.');
  }
  play() {
    throw new Error('Method not implemented.');
  }
}
