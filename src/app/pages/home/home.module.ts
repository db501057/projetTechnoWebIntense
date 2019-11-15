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

import {ThemeModule} from '../../@theme/theme.module';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {DetailComponent} from './detail/detail.component';
import {SearchComponent} from './search/search.component';
import {SearchService} from '../../@service/search.service';


const providers = [
  SearchService,
];

const declarations = [
  HomeComponent,
  DetailComponent,
  SearchComponent,
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
