import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {AuthorRoutingModule} from './author-routing.module';
import {AuthorsComponent} from '../../components/authors/authors.component';
import {SharedModule} from '../shared.module';


@NgModule({
  declarations: [
    AuthorsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthorRoutingModule
  ]
})
export class AuthorModule {}
