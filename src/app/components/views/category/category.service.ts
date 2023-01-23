import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl: String = enviroment.baseUrl;

  constructor(private http: HttpClient) { }

  findAll():Observable<Category[]> {
    const url = `${this.baseUrl}/category/categories`;
    return this.http.get<Category[]>(url);
  }
}
