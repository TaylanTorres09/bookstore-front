import { Component } from '@angular/core';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent {
  book: Book = {
    title: '',
    author: '',
    text: '',
    categoryId: ''
  }

  constructor () { }

  ngOnInit() {
  }

}
