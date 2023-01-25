import { Component } from '@angular/core';
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

  constructor(private service: CategoryService) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.category).subscribe(resp => {
      console.log(resp);
    });
  }

}
