import { Component, OnInit } from '@angular/core';
import {Book} from '../model/book';
import {ActivatedRoute, Router} from '@angular/router';
import {Review} from '../model/review';
import {ReviewsRestService} from '../shared/services/reviews-rest.service';
import {MatDialog} from '@angular/material/dialog';
import {DeleteBookDialogComponent} from './delete-book-dialog/delete-book-dialog.component';
import {BooksRestService} from '../shared/services/books-rest.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book: Book;
  reviews: Review[];
  reviewsLoaded = false;
  deleteEnabled = false;

  constructor(private readonly route: ActivatedRoute,
              private readonly booksService: BooksRestService,
              private readonly reviewsService: ReviewsRestService,
              private dialog: MatDialog,
              private router: Router) { }

  ngOnInit(): void {
    this.book = this.route.snapshot.data.book;
    this.loadReviews();
    console.log('--- book detail ---');
    console.log(this.book);
  }

  newReviewSubmitted(review: Review) {
    this.loadReviews();
  }

  openDeleteDialog() {
    const dialogRef = this.dialog.open(DeleteBookDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.booksService.delete(this.book.id).subscribe(book => {
            this.router.navigateByUrl('/books').then();
        });
      }
    });
  }

  private loadReviews() {
    this.reviewsLoaded = false;
    this.deleteEnabled = false;

    this.reviewsService.findReviewsForBook(this.book.id).subscribe(reviews => {
      this.reviews = reviews;
      this.reviewsLoaded = true;
      this.deleteEnabled = this.reviews.length === 0;
      console.log(this.reviews);
    });
  }
}
