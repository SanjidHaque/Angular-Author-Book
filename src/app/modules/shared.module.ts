import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {ListItemComponent} from '../components/shared/list-item/list-item.component';


@NgModule({
  declarations: [
ListItemComponent
  ],
  imports: [
    CommonModule],
  exports: [
    ListItemComponent
  ]
})
export class SharedModule {}
