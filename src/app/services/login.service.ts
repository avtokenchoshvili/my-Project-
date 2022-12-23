import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { User } from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isAdmin$: BehaviorSubject<boolean> = new BehaviorSubject(false);


  constructor( 
		private _http: HttpClient, private _router: Router) {
		this._checkLogin();
	}
  private _checkLogin(): void {
		localStorage.getItem('user') ? this.isLoggedIn$.next(true) : this.isLoggedIn$.next(false);
    if (localStorage.getItem('isAdmin')) {
			this.isAdmin$.next(JSON.parse(localStorage.getItem('isAdmin')!));
		} 
}

public login(data: User): Observable<User> {
  return this._http.post<User>('http://localhost:8000/api/login', data).pipe(
    tap((res) => {
      localStorage.setItem('user' ,JSON.stringify(res));
      this.isLoggedIn$.next(true);
    })
  );
}

public logout(): void {
  localStorage.removeItem('user');
  localStorage.removeItem('isAdmin');
  this.isLoggedIn$.next(false);
  this.isAdmin$.next(false);
  this._router.navigateByUrl('#');
}


}
