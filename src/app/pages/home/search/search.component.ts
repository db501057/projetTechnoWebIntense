import {Component, OnInit} from '@angular/core';
import {SearchService} from '../../../@service/search.service';
import {Search} from '../../../@service/search';
import {isNullOrUndefined} from 'util';

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

}
