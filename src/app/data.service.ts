import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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


  constructor(private _http: HttpClient) { }


  getAlbums(): Observable<any> {
    return this._http.get(this.baseUrl + 'song_all/300');
  }

  getAstists(name: string){
    return this._http.get('https://wasabi.i3s.unice.fr/search/fulltext/' + name); 
  }

}
