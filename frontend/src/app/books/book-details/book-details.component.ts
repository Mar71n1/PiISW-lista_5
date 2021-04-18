import { Component, OnInit } from '@angular/core';
import {Book} from '../model/book';
import {ActivatedRoute} from '@angular/router';
import {Review} from '../model/review';
import {ReviewsRestService} from '../shared/services/reviews-rest.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book: Book;
  reviews: Review[];
  reviewsLoaded = false;

  constructor(private readonly route: ActivatedRoute, private readonly reviewsService: ReviewsRestService) { }

  ngOnInit(): void {
    this.book = this.route.snapshot.data.book;
    this.loadReviews();
    console.log('--- book detail ---');
    console.log(this.book);
  }

  newReviewSubmitted(review: Review) {
    this.loadReviews();
  }

  private loadReviews() {
    this.reviewsLoaded = false;

    this.reviewsService.findReviewsForBook(this.book.id).subscribe(reviews => {
      this.reviews = reviews;
      this.reviewsLoaded = true;
      console.log(this.reviews);
    });
  }
}
