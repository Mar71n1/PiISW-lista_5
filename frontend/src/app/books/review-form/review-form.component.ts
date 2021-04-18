import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Review} from '../model/review';
import {NgForm} from '@angular/forms';
import {ReviewsRestService} from '../shared/services/reviews-rest.service';
import {Book} from '../model/book';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnInit {

  @Input() book: Book;
  @Output() newReviewSubmitted = new EventEmitter<Review>();

  numbers = [1, 2, 3, 4, 5];
  model = new Review();

  constructor(private readonly reviewsService: ReviewsRestService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const newReview = new Review();
    newReview.author = this.model.author;
    newReview.title = this.model.title;
    newReview.content = this.model.content;
    newReview.rate = this.model.rate;
    newReview.book = this.book.id;
    console.log(newReview);

    this.reviewsService.save(newReview).subscribe(submittedReview => {
      // Reset form
      form.resetForm();
      this.model = new Review();

      // Emit event
      this.newReviewSubmitted.emit(submittedReview);
    });
  }
}
