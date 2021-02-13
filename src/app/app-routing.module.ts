import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {AuthorsComponent} from './components/authors/authors.component';


const routes: Routes = [
  {
    path: 'authors',
   // component: AuthorsComponent
    loadChildren: () => import('./modules/author/author.module').then(m => m.AuthorModule)
  },
  {
    path: 'favourite-authors',
    loadChildren: () => import('./modules/favourite-author/favourite-author.module').then(m => m.FavouriteAuthorModule)
  },
  {
    path : '',
    redirectTo: '/authors',
    pathMatch : 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
