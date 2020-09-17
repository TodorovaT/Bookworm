import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-books-alert',
  templateUrl: './books-alert.component.html',
  styleUrls: ['./books-alert.component.css']
})
export class BooksAlertComponent implements OnInit {

  @Input() book;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
