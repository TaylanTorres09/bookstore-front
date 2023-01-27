import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent {

  book: Book = {
    title: '',
    author: '',
    text: '',
    categoryId: ''
  }

  constructor (private service: BookService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.book.categoryId = this.route.snapshot.paramMap.get('catId')!;
  }

  cancel(): void {
    this.router.navigate([`category/${this.book.categoryId}/book`]);
  }

}
