import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from 'src/app/interface/categories.interface';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent {
@Input()categoryesList$!: Observable<Categories[]>  ;



ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnIconit' to the class.
  console.log(this.categoryesList$  + 'saaaaaaaaaaa')
}

   

}
