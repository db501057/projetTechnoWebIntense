import {Component, OnInit} from '@angular/core';

import {isNullOrUndefined} from 'util';

import {Search} from '../../../@service/search';
import {SearchService} from '../../../@service/search.service';

@Component({
  selector: 'ngx-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  term: string;
  data: Search[];


  constructor(private searchService: SearchService) {

  }

  ngOnInit() {

  }

  private onSearch($event) {
    if (!isNullOrUndefined(this.term) && this.term !== '') {
      this.searchService.getArtistSongByTerm(this.term).subscribe(data => {
        this.data = data;
        console.log('>>>>>>', data);
      });
    } else {
      this.data = [];
    }
    console.log('>>>>>>', this.term, event);
  }

  public viewDetails(artist: string) {
    console.log('work');
    window.location.href = "pages/home/detail/" + artist;
  }

}
