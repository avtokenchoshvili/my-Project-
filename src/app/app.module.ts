import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './header/nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './header/main/main.component';
import { BlogComponent } from './header/blog/blog.component';
import { MyWorksComponent } from './header/my-works/my-works.component';
import { ContactComponent } from './header/contact/contact.component';
import { SignInComponent } from './header/sign-in/sign-in.component';
import { SignUpComponent } from './header/sign-up/sign-up.component';
import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    MainComponent,
   
    BlogComponent,
    MyWorksComponent,
    ContactComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxHideOnScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
