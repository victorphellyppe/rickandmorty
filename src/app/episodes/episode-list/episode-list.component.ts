import { Component, OnInit } from '@angular/core';
import { EpisodeService } from '../../services/episode.service';
import { Episodes } from '../../interfaces/episodes';
import { Router } from '@angular/router';
import { Episode } from '../../interfaces/episode';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css'],
})
export class EpisodeListComponent implements OnInit {
  episodes: any[] = [];
  episode: Episode | undefined;
  isDetail: boolean = false;

  constructor(private episodeSvc: EpisodeService, private router: Router) {}

  ngOnInit(): void {
    this.episodeSvc.getAllEpisodes().subscribe((ep) => {
      console.log('EP:', ep.results);
      this.episodes = ep.results;
      console.log(typeof this.episodes);
    });
  }

  openEpisode(id: number): void {
    console.log(id, 'Enviado');
    this.router.navigate(['/episodes', id]);
  }
}
