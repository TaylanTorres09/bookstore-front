import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl: String = enviroment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  findAll():Observable<Category[]> {
    const url = `${this.baseUrl}/category`;
    return this.http.get<Category[]>(url);
  }
  
  create(category: Category):Observable<Category> {
    const url = `${this.baseUrl}/category/create`;
    return this.http.post<Category>(url, category);
  }

  mesage(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}
