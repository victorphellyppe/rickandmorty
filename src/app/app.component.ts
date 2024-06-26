import { API } from './interfaces/api';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Rick and Morty';
  constructor(private apiSvc: ApiService) { }

  ngOnInit() {
    // this.apiSvc.getDataApi().subscribe((res: API) => {
    //   console.log({res});
    // });
  }
}
