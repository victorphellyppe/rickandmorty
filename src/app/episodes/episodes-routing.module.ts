import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { EpisodeDetailComponent } from './episode-detail/episode-detail.component';
import { CharacterComponent } from '../characters/character/character.component';

const routes: Routes = [
  {
    path: '',
    component: EpisodeListComponent
  },
  { path: ':id', component: EpisodeDetailComponent },
  // { path: ':character', component: CharacterComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodesRoutingModule { }
