import {Component, OnInit} from '@angular/core';

import {isNullOrUndefined} from 'util';

import { StatsService } from '../../../@service/stats.service';

@Component({
  selector: 'ngx-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {

  term: string;
  popularGenre: any[];
  mostAlbum: any[];
  


  constructor(private statsService: StatsService) {

  }

  ngOnInit() {
    this.statsService.getMostPopularGenre().subscribe(data => {
      this.popularGenre = data;
      if (data.length === 0)  {
        this.popularGenre = [];
      }
      });

      this.statsService.getArtistWithMostAlbum().subscribe(data => {
        this.mostAlbum = data;
        if (data.length === 0)  {
          this.mostAlbum = [];
        }
        });
  }

  public goToArtist(artist) {
    window.location.href='pages/home/detail/' + artist;
  }


}
