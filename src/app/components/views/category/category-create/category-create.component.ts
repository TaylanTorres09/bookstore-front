import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent {

  category: Category = {
    name: '',
    description: ''
  }

  constructor(private service: CategoryService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.category).subscribe(resp => {
      this.router.navigate(['category']);
      this.service.mesage('Categoria criada com sucesso!');
    }, err => {
      for(let i = 0; i < err.error.errors.length; i++) {
        this.service.mesage(err.error.errors[i].message);
      }
    });
  }

}
