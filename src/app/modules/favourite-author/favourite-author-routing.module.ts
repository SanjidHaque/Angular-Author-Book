import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FavouriteAuthorsComponent} from '../../components/favourite-authors/favourite-authors.component';



const routes: Routes = [
  {
    path: '',
    component: FavouriteAuthorsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class FavouriteAuthorRoutingModule {}

