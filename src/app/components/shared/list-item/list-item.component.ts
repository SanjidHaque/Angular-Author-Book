import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() author: any;
  @Output() addFavouriteEvent = new EventEmitter<any>();
  @Output() removeFavouriteEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  removeFromFavourites(): any {
    this.removeFavouriteEvent.emit(this.author);
  }

  addToFavourites(): any {
    this.addFavouriteEvent.emit(this.author);
  }

}
