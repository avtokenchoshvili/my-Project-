import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categories } from '../interface/categories.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor(
		private _http: HttpClient) { }


    getAllCategory(): Observable<Categories[]> {
     
      return this._http.get<Categories[]>(`${environment.baseUrl}/api/categories`).pipe(
        tap((res)=>{
          // console.log(res)
        })
      );
    

    }

  
    deleteCategory(categoryId: string) {
      return this._http.delete(`${environment.baseUrl}/api/categories/${categoryId}`)
    }

     addCategory(data: Categories){
      // console.log(data)
      return this._http.post(`${environment.baseUrl}/api/categories`, data)
      
    }

editCategory( data : Categories){
  return this._http.put(`${environment.baseUrl}/api/categories`, data)
}


}
