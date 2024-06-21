import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Episode } from '../../interfaces/episode';
import { EpisodeService } from '../../services/episode.service';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.css'],
})
export class EpisodeDetailComponent implements OnInit {
  episodeId!: number;
  episode!: Episode;
  characteres: string[] = [];
  constructor(private activatedRoute: ActivatedRoute, private episodesSvc: EpisodeService, private router: Router) {}

  ngOnInit() {
    let data = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(data);

    if(data !== null) {
      this.episodeId = +data;
    }
    console.log('episodeId ======>', this.episodeId);
    this.episodesSvc.getEpisode(this.episodeId).subscribe((res: Episode) => {
      this.episode = res;
      this.characteres = res.characters;
      console.log('->', this.characteres);
    });

  }


  goBack(): void {
    this.router.navigate(['/episodes']);
  }

  openCharacter(url: any) {
    console.log(url, 'Opa');
    this.router.navigate(['/character', url]);
  }

}
