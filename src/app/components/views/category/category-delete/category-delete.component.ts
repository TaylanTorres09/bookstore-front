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
      console.log(resp)
      this.category.name = resp.name;
      this.category.description = resp.description;
    })
  }

  delete(): void {
    this.service.delete(this.category.id!).subscribe(resp => {
      console.log(this.category.id);
      this.router.navigate(['category']);
      this.service.mesage('Categoria removida com sucesso!');
    },err => {
      this.service.mesage(err.error.error);
    });
  }

  cancel(): void {
    this.router.navigate(['category']);
  }

}
