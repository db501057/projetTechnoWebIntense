import {Component, OnInit} from '@angular/core';

import {isNullOrUndefined} from 'util';

import { DetailsService } from '../../../@service/details.service';
import { SearchService } from '../../../@service/search.service';


@Component({
  selector: 'ngx-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss'],
})
export class CompareComponent implements OnInit {

  term: string;
  popularGenre: any[];
  mostAlbum: any[];
  artist1: string;
  artist2: string;
  artist1Found: string;
  artist2Found: string;
  artist1Object: any;
  artist2Object: any;


  constructor(private detailsService: DetailsService, private searchService: SearchService) {

  }

  ngOnInit() {

    //this.searchComponent.artist.subscribe(res => console.log(res))
  }

  searchArtist() {
    this.searchService.getArtistSongByTerm(this.artist1).subscribe(res => {
      this.artist1Found = res[0].name;
      this.detailsService.getArtist(this.artist1Found).subscribe(res => this.artist1Object = res);

    });

    this.searchService.getArtistSongByTerm(this.artist2).subscribe(res => {
      this.artist2Found = res[0].name
      this.detailsService.getArtist(this.artist2Found).subscribe(res => this.artist2Object = res);
    });
    
  }

  getNumbersOfSong(album){
    let nbSongs = 0
    for (let i = 0; i < album.length; i++){
      nbSongs += album[i].songs.length;
    }
    return nbSongs;
  }


}
