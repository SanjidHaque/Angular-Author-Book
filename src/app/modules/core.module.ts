import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {AppRoutingModule} from '../app-routing.module';
import {SidenavComponent} from '../components/sidenav/sidenav.component';
import {SharedModule} from './shared.module';
import {ListItemComponent} from '../components/shared/list-item/list-item.component';
import {AuthorService} from '../services/author.service';


@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule, AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    SidenavComponent
  ],
  providers: [AuthorService]
})
export class CoreModule {}
