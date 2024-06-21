import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { CharacterComponent } from '../characters/character/character.component';


@NgModule({
  declarations: [
    EpisodeListComponent,
    EpisodeDetailComponent,
    // CharacterComponent
  ],
  imports: [
    CommonModule,
    EpisodesRoutingModule
  ]
})
export class EpisodesModule { }
