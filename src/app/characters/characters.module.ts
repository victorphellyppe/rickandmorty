import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterComponent } from './character/character.component';
import { CharacterListComponent } from './character-list/character-list.component';


@NgModule({
  declarations: [
    CharacterComponent,
    CharacterListComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }
