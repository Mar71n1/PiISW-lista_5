import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Review} from "../model/review";
import {ReviewsRestService} from "../shared/services/reviews-rest.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookReviewsResolver implements Resolve<Review[] | null> {

  constructor(private readonly reviewsService: ReviewsRestService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Review[] | null> | Promise<Review[] | null> | Review[] | null {
    return this.reviewsService.findReviewsForBook(route.params['bookId']);
  }

}
