import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { NavigationEnd, Router } from "@angular/router";
import { filter, first } from "rxjs";
import { LoginService } from "src/app/services/login.service";

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
    private _router: Router
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




  login() {
    this._loginService.login(this.LoginForm.value).subscribe(
      (res) => {
        console.log(res as unknown as HTMLElement);
        localStorage.setItem("user", JSON.stringify(res));
        this._router.navigateByUrl("/dashboard");
      },
      (err) => {
        console.log(err);
      }
    );
  }




}
