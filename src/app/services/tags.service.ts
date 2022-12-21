import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tags } from '../interface/tags.interface';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(private _http: HttpClient) {}

  getAllTag(): Observable<Tags[]> {
    return this._http.get<Tags[]>(`${environment.baseUrl}/api/tags`);
	}

  deleteTag(tagId: string) {
    return this._http.delete(`${environment.baseUrl}/baseUrl/tags/${tagId}`);
  }

	addTag(data: any) {
		return this._http.post(`${environment.baseUrl}/baseUrl/tags`, data)
	}
}
