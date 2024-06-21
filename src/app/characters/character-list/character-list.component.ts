import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit{
characteres: any[] = [];

  constructor(private characterSvc: CharacterService) { }

  ngOnInit(): void {
    this.characterSvc.getAllCharacter().subscribe((res) => {
      // this.characteres = res.results;
      console.log(res);

    })
  }

}
