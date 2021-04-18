import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookListComponent} from './book-list/book-list.component';
import {BookPanelComponent} from './book-list/book-panel/book-panel.component';
import {BookDetailsComponent} from './book-details/book-details.component';
import {AppRoutingModule} from '../app-routing.module';
import {BookReviewComponent} from './book-details/book-review/book-review.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ReviewFormComponent } from './review-form/review-form.component';
import {FormsModule} from '@angular/forms';
import { DeleteBookDialogComponent } from './book-details/delete-book-dialog/delete-book-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    BookListComponent,
    BookPanelComponent,
    BookDetailsComponent,
    BookReviewComponent,
    ReviewFormComponent,
    DeleteBookDialogComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class BooksModule {
}
