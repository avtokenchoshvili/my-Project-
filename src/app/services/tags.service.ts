import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Tags } from '../interface/tags.interface';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(private _http: HttpClient) {}

  getAllTag(): Observable<Tags[]> {
    return this._http.get<Tags[]>(`${environment.baseUrl}/api/tags`).pipe(tap(
      res =>{
        console.log(res)
      }
    ));
    
	}

  deleteTag(tagId: string) {
    return this._http.delete(`${environment.baseUrl}/api/tags/${tagId}`);
  }

	addTag(data: Tags) {
		return this._http.post(`${environment.baseUrl}/api/tags`, data)
	}

  editTag( data : {  id:string,  title:string  } ){
return this._http.put(`${environment.baseUrl}/api/tags`, data) 
  }
}
