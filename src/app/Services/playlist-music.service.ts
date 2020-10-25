import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContentMusic } from '../Model/ContentMusic';
import { MusicService } from './abstractService';

@Injectable({
  providedIn: 'root'
})
export class PlaylistMusicService extends MusicService {

  constructor(private httpClient: HttpClient) {
    super();
  }

  getData(): Observable<ContentMusic[]>  {
    return of([]);
  }
  play() {
    throw new Error('Method not implemented.');
  }
}
