import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContentMusic } from '../Model/ContentMusic';
import { PlaylistsMusic } from '../Model/PlaylistsMusic';
import { MusicService } from './abstractService';

@Injectable({
  providedIn: 'root'
})
export class PlaylistMusicService extends MusicService {

  private selectedPlaylist: PlaylistsMusic;

  setItemSelected(item: PlaylistsMusic) {
    this.selectedPlaylist = item;
  }

  constructor(private httpClient: HttpClient) {
    super();
  }

  getData(): Promise<ContentMusic[]>  {
    return null;
  }
  play() {
    throw new Error('Method not implemented.');
  }
}
