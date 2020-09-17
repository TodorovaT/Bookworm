import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BooksListComponent } from './books-list/books-list.component';

const routes: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'',component: BooksListComponent},
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    BooksListComponent
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})

export class AppRoutingModule { }
