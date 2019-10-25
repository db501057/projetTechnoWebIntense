import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = 'https://wasabi.i3s.unice.fr/api/v1/';

  private headers: Headers = new Headers({
    'Access-Control-Allow-Origin': '*',
    'Allow': 'GET,POST,OPTIONS'
  });


  constructor(private _http: Http) { }


  getAlbums(): Observable<any[]> {
    return this._http.get(this.baseUrl + 'song_all/300')
    .pipe(map(res => res.json()));
  }





}
