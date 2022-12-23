import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { NavigationEnd, Router } from "@angular/router";
import { filter, first, switchMap } from "rxjs";
import { LoginService } from "src/app/services/login.service";
import { ProfileService } from "src/app/services/profile.service";


@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"],
})
export class SignInComponent {
  LoginForm!: FormGroup;


  constructor(
    private _fb: FormBuilder,
    private _loginService: LoginService,
    private _router: Router,
    private _profileService: ProfileService
  ) {}
  ngOnInit(): void {
    this.LoginForm = this._fb.group({
      email: [`valeri.kharitonashvili1@gmail.com`],
      password: [`123123123`]
    })

    
      // this._router.events
      //   .pipe(
      //     filter((e) => e instanceof NavigationEnd && !e.url.startsWith('sing-in')),
      //     first()
      //   )
      //   .subscribe(() => {
      //     localStorage.removeItem('user');
      //   });

  }

 


login(){
  this._loginService.login(this.LoginForm.value).pipe(
    switchMap(() => {
return this._profileService.getUserData();
    })
  ).subscribe(
    (res) =>{
      localStorage.setItem('user' ,JSON.stringify(res));
    },
    (err)=>{
    console.log(err)
  }
  )
}





}
