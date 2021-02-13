import { Component, OnInit } from '@angular/core';
import {AuthorService} from '../../services/author.service';

@Component({
  selector: 'app-favourite-authors',
  templateUrl: './favourite-authors.component.html',
  styleUrls: ['./favourite-authors.component.css']
})
export class FavouriteAuthorsComponent implements OnInit {
  authors = [];

  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    this.authors = this.authorService.getFavouriteAuthors();
  }

  removeFromFavourites(event: any): void {
    const index = this.authorService.favouriteAuthors.findIndex(x => x.id === event.id);
    this.authorService.favouriteAuthors.splice(index, 1);
    this.authors.splice(index, 1);

  }
}
