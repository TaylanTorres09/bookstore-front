import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent {

  category: Category = {
    id: '',
    name: '',
    description: ''
  }

  constructor(private service: CategoryService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.category.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.category.id!).subscribe(resp => {
      this.category.name = resp.name;
      this.category.description = resp.description;
    });
  }

  update(): void {
    this.service.update(this.category).subscribe({
      next: () => {
        this.router.navigate(['category']);
        this.service.mesage(`Categoria ${this.category.id} atualizada com sucesso`);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  cancel(): void {
    this.router.navigate(['category']);
  }

}
