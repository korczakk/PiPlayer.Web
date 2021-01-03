import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatChipsModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule } from '@angular/material/'

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
import { HttpClientModule } from '@angular/common/http';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';
import { AddOnlineRadioComponent } from './add-online-radio/add-online-radio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrentlyPlayingComponent } from './currently-playing/currently-playing.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentExplorerComponent,
    PlayerComponent,
    HomeComponent,
    TopMenuComponent,
    FileSystemItemComponent,
    PlaylistItemComponent,
    NetRadioItemComponent,
    BreadCrumbsComponent,
    AddOnlineRadioComponent,
    CurrentlyPlayingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatChipsModule,
    MatMenuModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddOnlineRadioComponent]
})
export class AppModule { }
