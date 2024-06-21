import { Episodes } from './../interfaces/episodes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Episode } from '../interfaces/episode';
import { Observable, map } from 'rxjs';
import { Character } from '../interfaces/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private CHARACTER_API = 'https://rickandmortyapi.com/api/character/';

  constructor(public http: HttpClient) {}


  getAllCharacter(): Observable<Character[]> {
    return this.http.get<{ results: Character[] }>(this.CHARACTER_API).pipe(
      map(response => response.results)
    );
  }

  getCharacter(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.CHARACTER_API}/${id}`);
  }



}
