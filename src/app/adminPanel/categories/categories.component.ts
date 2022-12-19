import { Component, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from 'src/app/interface/categories.interface';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
	categories$!: Observable<Categories[]>;

  constructor(
		private _categoriesService: CategoriesService) { }

    ngOnInit(): void {
      this._getData();
    }
    private _getData() {
      this.categories$ = this._categoriesService.getAllCategory();
    }
    delete(categoryId: string) {
      this._categoriesService.deleteCategory(categoryId).subscribe(
        () => {
          this._getData();
        },
        err => {
          console.log(err);
        }
      )
    }

}
