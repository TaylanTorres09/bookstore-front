import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-read',
  templateUrl: './category-read.component.html',
  styleUrls: ['./category-read.component.css']
})
export class CategoryReadComponent {
  categories: Category[] = [];
  
  displayedColumns: string[] = ['id', 'name', 'description', 'books', 'action'];

  constructor(private service: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(resp => {
      this.categories = resp;
    })
  }

  navigateForCategoryCreate() {
    this.router.navigate(['/category/create']);
  }

}
