import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CharacterListComponent } from './characters/character-list/character-list.component';
// import { EpisodeListComponent } from './episodes/episode-list/episode-list.component';
// import { LocationListComponent } from './locations/location-list/location-list.component';
// import { EpisodesComponent } from './components/episodes/episodes.component';
// import { EpisodeComponent } from './components/episode/episode.component';

@NgModule({
  declarations: [
    AppComponent,
    // CharacterListComponent,
    // EpisodeListComponent,
    // LocationListComponent,
    // EpisodesComponent,
    // EpisodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
