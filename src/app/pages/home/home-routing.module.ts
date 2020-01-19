import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home.component';

import {DetailComponent} from './detail/detail.component';
import {SearchComponent} from './search/search.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [
    {
      path: 'search',
      component: SearchComponent,
    },
    {
      path: 'detail/:artist',
      component: DetailComponent,
    },

    {
      path: '',
      redirectTo: 'search',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {
}
