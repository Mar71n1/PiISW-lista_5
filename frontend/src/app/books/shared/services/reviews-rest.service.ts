import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Review} from '../../model/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewsRestService {

  constructor(private readonly http: HttpClient) {
  }

  findReviewsForBook(bookId: string): Observable<Review[]> {
    return this.http.get<Review[]>(`/api/books/${bookId}/reviews`);
  }

  save(review: Review): Observable<Review> {
    return this.http.post<Review>('/api/reviews', review);
  }
}
