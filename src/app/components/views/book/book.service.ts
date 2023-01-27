import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl: String = enviroment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAllByCategory(catId: String): Observable<Book[]> {
    const url = `${this.baseUrl}/book?category=${catId}`;
    return this.http.get<Book[]>(url);
  }

  create(book: Book): Observable<Book> {
    const url = `${this.baseUrl}/book/create`;
    return this.http.post<Book>(url, book);
  }

  mesage(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}
