import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';

import {environment} from '../../environments/environment';

import {Search} from './search';

@Injectable({
  providedIn: 'root',
})
export class SearchService {

  constructor(private http: HttpClient) {
  }

  getArtistSongByTerm(term: string): Observable<Search[]> {
    return this.http.get<Search[]>(environment.baseUrl + '/search/fulltext/' + term);
  }
}
