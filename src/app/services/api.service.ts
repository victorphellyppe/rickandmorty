import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from '../interfaces/api';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private BASE_API = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  getDataApi() {
    return this.http.get<API>(this.BASE_API);
  }
}
