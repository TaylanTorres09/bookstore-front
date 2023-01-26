import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent {

  category: Category = {
    id: '',
    name: '',
    description: '',
  }

  constructor(private service: CategoryService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void{
    this.category.id = this.route.snapshot.paramMap.get('id')!;
    this.findById()
  }

  findById(): void {
    this.service.findById(this.category.id!).subscribe(resp => {
      this.category.name = resp.name;
      this.category.description = resp.description;
    })
  }

  delete(): void {
    this.service.delete(this.category.id!).subscribe({
      next: (resp) => {
        this.router.navigate(['category']);
        this.service.mesage(`Categoria ${this.category.name} removida com sucesso!`);
      },
      error: (error) => {
        console.log(error)
        this.service.mesage(error.error.error);
      }
    });
  }

  cancel(): void {
    this.router.navigate(['category']);
  }

}
