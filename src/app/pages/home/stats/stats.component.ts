import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {isNullOrUndefined} from 'util';

import {Search} from '../../../@service/search';
import {SearchService} from '../../../@service/search.service';
import { StatsService } from '../../../@service/stats.service';

@Component({
  selector: 'ngx-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class StatsComponent implements OnInit {

  term: string;
  data: Search[];


  constructor(private searchService: StatsService) {

  }

  ngOnInit() {

  }


}
