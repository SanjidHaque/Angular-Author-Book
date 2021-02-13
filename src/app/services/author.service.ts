import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  favouriteAuthors = [];
  constructor(private http: HttpClient) { }

  getAuthors(): any {
    return this.http.get('https://api.quotable.io/authors?limit=10&skip=20');
  }

  getFavouriteAuthors(): any {
    return this.favouriteAuthors.slice();
  }
}
