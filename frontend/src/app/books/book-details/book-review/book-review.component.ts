import {Component, Input, OnInit} from '@angular/core';
import {Review} from "../../model/review";

@Component({
  selector: 'app-book-review',
  templateUrl: './book-review.component.html',
  styleUrls: ['./book-review.component.scss']
})
export class BookReviewComponent implements OnInit {

  @Input()
  review: Review;

  constructor() { }

  ngOnInit(): void {
  }

}
