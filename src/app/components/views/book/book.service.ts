import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl: String = enviroment.baseUrl;

  constructor(private http: HttpClient) { }

  findAllByCategory(catId: String): Observable<Book[]> {
    const url = `${this.baseUrl}/book?category=${catId}`;
    return this.http.get<Book[]>(url);
  }

}
