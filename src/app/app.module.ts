import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentExplorerComponent } from './content-explorer/content-explorer.component';
import { PlayerComponent } from './player/player.component';
import { HomeComponent } from './home/home.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FileSystemItemComponent } from './contentComponents/file-system-item/file-system-item.component';
import { PlaylistItemComponent } from './contentComponents/playlist-item/playlist-item.component';
import { NetRadioItemComponent } from './contentComponents/net-radio-item/net-radio-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentExplorerComponent,
    PlayerComponent,
    HomeComponent,
    TopMenuComponent,
    FileSystemItemComponent,
    PlaylistItemComponent,
    NetRadioItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
