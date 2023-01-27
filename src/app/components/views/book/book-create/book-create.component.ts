import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor (private service: BookService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.book.categoryId = this.route.snapshot.paramMap.get('catId')!;
  }

  create(): void {
    this.service.create(this.book).subscribe({
      next: () => {
        this.router.navigate([`category/${this.book.categoryId}/book`]);
        this.service.mesage(`Livro ${this.book.text} criado com sucesso!`);
      },
      error: err => {
        this.service.mesage(err.error.errors[0].message);
      }
    });
  }

}
