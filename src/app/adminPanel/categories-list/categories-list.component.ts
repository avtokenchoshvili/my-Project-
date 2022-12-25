import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CategoryDialogComponent } from 'src/app/dialog/category-dialog/category-dialog.component';
import { ConfirmDialogComponent } from 'src/app/dialog/confirm-dialog/confirm-dialog.component';
import { Categories } from 'src/app/interface/categories.interface';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent {
@Input()categoryesList$!: Observable<Categories[]>  ;


constructor(   private _matDialog: MatDialog,
   private _categoriesService: CategoriesService){
  
}


ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnIconit' to the class.
  console.log(this.categoryesList$  + 'saaaaaaaaaaa')
}

addCat(data?: Categories) {
  const dialog = this._matDialog.open(CategoryDialogComponent, {
    width: '440px',
    data: data
  });

  dialog.afterClosed().subscribe(
    res => {
      console.log(res)
      if (res) {
        this.categoryesList$;
        console.log(res)
      }
    }
  )
}

deleteCat(categoryId: string) {
  const dialog = this._matDialog.open(ConfirmDialogComponent, {
    width: '440px'
  });

  dialog.afterClosed().subscribe(res => {
    if (res) {
      this._categoriesService.deleteCategory(categoryId).subscribe(
        () => {
          this.categoryesList$;
        },
        err => {
          console.log(err);
        }
      );
    }
    console.log(res);
  });
}

}
