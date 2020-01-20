import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';

import {environment} from '../../environments/environment';

import {Search} from './search';

@Injectable({
  providedIn: 'root',
})
export class StatsService {

  constructor(private http: HttpClient) {
  }

  getArtistWithMostAlbum(): Observable<Search[]> {
    return this.http.get<Search[]>(environment.baseUrl + '/api/v1/artist/count/album');
  }

  getMostPopularGenre(): Observable<Search[]> {
    return this.http.get<Search[]>(environment.baseUrl + '/api/v1/artist/genres/popularity');
  }

  getArtistWithMostBand(): Observable<Search[]> {
    return this.http.get<Search[]>(environment.baseUrl + '/v1/artist/member/count/band');
  }

  

  
}
