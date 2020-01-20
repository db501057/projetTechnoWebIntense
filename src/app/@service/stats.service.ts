import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';

import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class StatsService {

  constructor(private http: HttpClient) {
  }

  getArtistWithMostAlbum(): Observable<any[]> {
    return this.http.get<any[]>(environment.baseUrl + '/api/v1/artist/count/album');
  }

  getMostPopularGenre(): Observable<any[]> {
    return this.http.get<any[]>(environment.baseUrl + '/api/v1/artist/genres/popularity');
  }

  getArtistWithMostBand(): Observable<any[]> {
    return this.http.get<any[]>(environment.baseUrl + '/v1/artist/member/count/band');
  }

  

  
}
