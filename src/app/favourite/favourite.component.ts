import { Component, OnInit } from '@angular/core';
import { FavouriteService } from '../favourite.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {
  items;

  constructor(
    private favouriteService: FavouriteService
    ) { }
  
    ngOnInit() {
      this.items = this.favouriteService.getItems();
    }

}
