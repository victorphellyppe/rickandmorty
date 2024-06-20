import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Episodes } from '../interfaces/episodes';
import { Episode } from '../interfaces/episode';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {
    private EPISODE_API = 'https://rickandmortyapi.com/api/episode/';

    constructor(public http: HttpClient) {}


    getAllEpisodes() {
      return this.http.get<Episodes>(this.EPISODE_API);
    }

    getEpisode(id: number) {
      return this.http.get<Episode>(this.EPISODE_API + `${id}`);
    }
  }
