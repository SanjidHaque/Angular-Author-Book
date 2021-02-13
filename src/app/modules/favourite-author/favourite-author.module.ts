import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {FavouriteAuthorRoutingModule} from './favourite-author-routing.module';
import {FavouriteAuthorsComponent} from '../../components/favourite-authors/favourite-authors.component';
import {ListItemComponent} from '../../components/shared/list-item/list-item.component';
import {SharedModule} from '../shared.module';


@NgModule({
  declarations: [
    FavouriteAuthorsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FavouriteAuthorRoutingModule
  ]
})
export class FavouriteAuthorModule {}
