import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-read-all',
  templateUrl: './book-read-all.component.html',
  styleUrls: ['./book-read-all.component.css']
})
export class BookReadAllComponent {
  displayedColumns: string[] = ['id', 'title', 'books', 'action'];

  catId: string = "";

  books: Book[] = [];

  constructor (private service: BookService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.catId = this.route.snapshot.paramMap.get('catId')!;
    this.findAllByCategory();
  }

  findAllByCategory(): void {
    this.service.findAllByCategory(this.catId).subscribe(resp => {
      this.books = resp;
    })
  }

}
