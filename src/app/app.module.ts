import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PlayerComponent } from './player/player.component';
import { ControlsComponent } from './controls/controls.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { AddNewVideoComponent } from './add-new-video/add-new-video.component';
import { VideoPlayerComponent } from './video-player/video-player.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, PlayerComponent, ControlsComponent, PlaylistComponent, AddNewVideoComponent, VideoPlayerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
