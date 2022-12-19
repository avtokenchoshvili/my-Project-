import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from 'src/app/interface/categories.interface';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent {
@Input()categoryesList$!: Observable<Categories[]> ;


}
