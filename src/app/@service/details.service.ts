import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';

import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class DetailsService {

  constructor(private http: HttpClient) {
  }

  getArtist(name: string): Observable<any[]> {
    return this.http.get<any[]>(environment.baseUrl + '/api/v1/artist_all/name/' + name);
  }
}
