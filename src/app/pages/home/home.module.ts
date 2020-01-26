import {NgModule} from '@angular/core';
import {FormsModule as ngFormsModule, FormsModule, ReactiveFormsModule} from '@angular/forms';

import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbListModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbTabsetModule,
  NbUserModule,
} from '@nebular/theme';

import {SearchService} from '../../@service/search.service';
import {ThemeModule} from '../../@theme/theme.module';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';

import { CompareComponent } from './compare/compare.component';
import {DetailComponent} from './detail/detail.component';
import {SearchComponent} from './search/search.component';
import { StatsComponent } from './stats/stats.component';


const providers = [
  SearchService,
];

const declarations = [
  HomeComponent,
  DetailComponent,
  SearchComponent,
  StatsComponent,
  CompareComponent
];

const imports = [
  FormsModule,
  ReactiveFormsModule,
  ThemeModule,
  NbTabsetModule,
  NbRouteTabsetModule,
  NbStepperModule,
  NbCardModule,
  NbButtonModule,
  NbListModule,
  NbAccordionModule,
  NbUserModule,
  HomeRoutingModule,
  NbInputModule,
  NbIconModule,
  ngFormsModule,
];

@NgModule({
  imports: imports,
  declarations: declarations,
  providers: providers,
})
export class HomeModule {
}
