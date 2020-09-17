import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {
  items = [];
  addToFavourite(book) {
    this.items.push(book);
  }

  getItems() {
    return this.items;
  }

  clearFavourite() {
    this.items = [];
    return this.items;
  }

  constructor() { }
}
