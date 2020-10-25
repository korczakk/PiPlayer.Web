import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentMusic } from '../Model/ContentMusic';
import { MusicService } from './abstractService';

@Injectable({
  providedIn: 'root'
})
export class NetRadioMusicService implements MusicService {

  constructor() { }
  getData(): Observable<ContentMusic[]>  {
    throw new Error('Method not implemented.');
  }
  play() {
    throw new Error('Method not implemented.');
  }
}
