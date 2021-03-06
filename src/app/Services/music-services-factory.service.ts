import { Injectable } from '@angular/core';
import { MenuItem } from '../Model/MenuItem';
import { MusicService } from './abstractService';
import { FileSystemMusicService } from './file-system-music.service';
import { NetRadioMusicService } from './net-radio-music.service';
import { PlaylistMusicService } from './playlist-music.service';

@Injectable({
  providedIn: 'root'
})
export class MusicServicesFactoryService {

  constructor(private fileSystemMusicService: FileSystemMusicService,
    private playlistMusicService: PlaylistMusicService,
    private netRadioMusicService: NetRadioMusicService) { }

  getMusicService(menuSelection: MenuItem): MusicService {
    switch (menuSelection) {
      case MenuItem.Files:
        return this.fileSystemMusicService;
        break;
      case MenuItem.NetRadios:
        return this.netRadioMusicService;
        break;
      case MenuItem.Playlists:
        return this.playlistMusicService;
        break;
    }
  }
}
