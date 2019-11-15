import {Component, OnInit} from '@angular/core';
import {Search} from '../../../@service/search';
import {SearchService} from '../../../@service/search.service';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'ngx-detail',
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.scss'],
})
export class DetailComponent implements OnInit {

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
