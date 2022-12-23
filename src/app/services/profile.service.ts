import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
		private _http: HttpClient,
		private _router:Router
	) { }

	getUserData(){
   return this._http.get(`${environment.baseUrl}/api/user`).pipe(
      tap((userData:any)=>{
        localStorage.setItem('isAdmin', JSON.stringify(userData.user.isAdmin));
        console.log(userData)
        if(userData.user.isAdmin){
          this._router.navigateByUrl('admin/dashboard')
          return
        }
        this._router.navigateByUrl('home')
      })
    )
  }
}
