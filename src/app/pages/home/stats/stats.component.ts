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
  data: any[];


  constructor(private searchService: StatsService) {

  }

  ngOnInit() {

  }


}
