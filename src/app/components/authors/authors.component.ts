import { Component, OnInit } from '@angular/core';
import {AuthorService} from '../../services/author.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors = [];

  constructor(private authorService: AuthorService) { }

  ngOnInit(): void {
    this.authorService.getAuthors().subscribe((data: any) => {
      this.authors = data.results
        .map(x => ({ id: x._id, name: x.name, bio: x.bio, isFavourite: false }));
    });
  }

  addToFavourites(event: any): void {
    const author = this.authors.find(x => x.id === event.id);
    author.isFavourite = true;
    this.authorService.favouriteAuthors.push(author);
  }

  removeFromFavourites(event: any): void {
    const author = this.authors.find(x => x.id === event.id);
    author.isFavourite = false;
    const index = this.authorService.favouriteAuthors.findIndex(x => x.id === author.id);
    this.authorService.favouriteAuthors.splice(index, 1);
  }

}
