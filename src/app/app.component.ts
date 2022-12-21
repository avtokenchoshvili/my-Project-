import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { __param } from 'tslib';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myProject';
  @ViewChild("mainContent")
  private mainContentDiv!: ElementRef<HTMLElement>;

  constructor(private readonly router: Router, public loginServise:LoginService) { {
    this.router = router;
  }}
 
ngOnInit() {
this.loginServise.isAdmin$
console.log(this.loginServise.isAdmin$ );
}


}


