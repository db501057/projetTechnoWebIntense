import {Component, OnInit} from '@angular/core';

import {DetailsService} from '../../../@service/details.service';

@Component({
  selector: 'ngx-detail',
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.scss'],
})
export class DetailComponent implements OnInit {

  term: string;
  data: any[];
  artist: string

  constructor(private detailsService: DetailsService) {

  }

  ngOnInit() {
    console.log(window.location.pathname.split("/")[4]);
    //this.artist = window.location.pathname.split("/")[window.location.pathname.split("/").length];
    this.artist = window.location.pathname.split("/")[4];
    this.getArtist();
  }

  private getArtist() {
    this.detailsService.getArtist(this.artist).subscribe(data => {
      this.data = data;
      if (data.length == 0){
        this.data = [];
      }
      });
      console.log(this.data)
    } 

}
