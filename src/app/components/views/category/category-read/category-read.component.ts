import { Component } from '@angular/core';

@Component({
  selector: 'app-category-read',
  templateUrl: './category-read.component.html',
  styleUrls: ['./category-read.component.css']
})
export class CategoryReadComponent {
  displayedColumns: string[] = ['id', 'name', 'description', 'action'];
}
