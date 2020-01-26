import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  @Input() activateClick: boolean

  @Output() artist: EventEmitter<string> = new EventEmitter();



  constructor(private searchService: SearchService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.activateClick = this.getIsActivatedClick();
  }

  private getIsActivatedClick(): boolean{
    let v;
    this.route
      .data
      .subscribe((v => v.activateClick));
    return v
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

  public getArtist(artist: string){
    this.artist.emit(artist);
  }

}
