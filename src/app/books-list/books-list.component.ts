import { Component, OnInit } from '@angular/core';
import {books} from '../books'

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  books=books;
  constructor() { }

  ngOnInit() {
  }
  share() {
    window.alert('Thank you for sharing the book!');
  }
  onNotify() {
    window.alert("The book is on sale!");
  }
}
