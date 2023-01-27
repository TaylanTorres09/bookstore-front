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

  categoryId: String = '';

  book: Book = {
    id: '',
    title: '',
    author: '',
    text: '',
  }

  constructor (private service: BookService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.categoryId = this.route.snapshot.paramMap.get('catId')!;
    this.book.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void {
    this.service.findByIdBook(this.book.id!).subscribe({
      next: resp => {
        this.book = resp;
      },
      error: err => {
        this.router.navigate([`category/${this.categoryId}/book`]);
        console.log(err);
        this.service.mesage('Erro na identificação do livro');
      }
    });
  }

  update(): void {
    this.service.update(this.book).subscribe({
      next: () => {
        this.router.navigate([`category/${this.categoryId}/book`]);
        this.service.mesage(`Livro ${this.book.id} atualizado com sucesso!`);
      },
      error: err => {
        this.service.mesage(err.error.errors[0].message);
      }
    });
  }

  cancel(): void {
    this.router.navigate([`category/${this.categoryId}/book`]);
  }

}
