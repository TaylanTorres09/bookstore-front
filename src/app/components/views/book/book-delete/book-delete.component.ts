import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent {

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

  delete(): void {
    this.service.delete(this.book.id!).subscribe({
      next: () => {
        this.router.navigate([`category/${this.categoryId}/book`]);
        this.service.mesage('Livro deletado com sucesso!');
      },
      error: () => {
        this.router.navigate([`category/${this.categoryId}/book`]);
        this.service.mesage('Falha ao deletar!');
      }
    });
  }

  cancel(): void {
    this.router.navigate([`category/${this.categoryId}/book`]);
  }

}
