import { Component } from '@angular/core';

@Component({
  selector: 'app-book-read-all',
  templateUrl: './book-read-all.component.html',
  styleUrls: ['./book-read-all.component.css']
})
export class BookReadAllComponent {
  displayedColumns: string[] = ['id', 'title', 'books', 'action'];

}
