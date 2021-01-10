import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule } from '@angular/material/'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentExplorerComponent } from './content-explorer/content-explorer.component';
import { PlayerComponent } from './player/player.component';
import { HomeComponent } from './home/home.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FileSystemItemComponent } from './contentComponents/file-system-item/file-system-item.component';
import { PlaylistItemComponent } from './contentComponents/playlist-item/playlist-item.component';
import { NetRadioItemComponent } from './contentComponents/net-radio-item/net-radio-item.component';
import { HttpClientModule } from '@angular/common/http';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';
import { AddOnlineRadioComponent } from './add-online-radio/add-online-radio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrentlyPlayingComponent } from './currently-playing/currently-playing.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { A11yModule } from '@angular/cdk/a11y';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

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
    MatInputModule,
    MatTooltipModule,
    MatSliderModule,
    OverlayModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddOnlineRadioComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
