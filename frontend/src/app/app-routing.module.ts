import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookListComponent} from './books/book-list/book-list.component';
import {BookListResolver} from './books/book-list/book-list.resolver';
import {BookDetailsComponent} from './books/book-details/book-details.component';
import {BookDetailsResolver} from './books/book-details/book-details.resolver';


const routes: Routes = [
  {
    path: 'books',
    component: BookListComponent,
    resolve: {
      books: BookListResolver
    }
  },
  {
    path: 'books/:bookId',
    component: BookDetailsComponent,
    resolve: {
      book: BookDetailsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
