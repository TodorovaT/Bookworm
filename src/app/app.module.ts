import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksAlertComponent } from './books-alert/books-alert.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { FavouriteService } from './favourite.service';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path:'',component: BooksListComponent },
      {path:'books/:bookId',component: BookDetailsComponent},
      {path:'cart', component: CartComponent},
      { path: 'favourite', component: FavouriteComponent}
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    BooksListComponent,
    BooksAlertComponent,
    BookDetailsComponent,
    CartComponent,
    FavouriteComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    CartService, 
    FavouriteService]
})
export class AppModule { }
