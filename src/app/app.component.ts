import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myProject';
  @ViewChild("mainContent")
  private mainContentDiv!: ElementRef<HTMLElement>;

  constructor(private readonly router: Router,) { {
    this.router = router;
  }}
 
ngOnInit() {
  this.router.events.subscribe(x => {
    if(x instanceof NavigationEnd)
    {
      window.scrollTo(0, 0);
    }
  });
}

onActive(){
  window.scroll(0,0)
}
}


