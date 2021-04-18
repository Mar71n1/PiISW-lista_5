import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../../model/book';

@Injectable({
  providedIn: 'root'
})
export class BooksRestService {

  constructor(private readonly http: HttpClient) {
  }

  findAll(): Observable<Book[]> {
    return this.http.get<Book[]>('/api/books');
  }

  findBookById(id: string): Observable<Book> {
    return this.http.get<Book>(`/api/books/${id}`);
  }

  delete(id: string): Observable<Book> {
    return this.http.delete<Book>(`/api/books/${id}`);
  }
}
