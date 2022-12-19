import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './header/main/main.component';
import { BlogComponent } from './header/blog/blog.component';
import { MyWorksComponent } from './header/my-works/my-works.component';
import { ContactComponent } from './header/contact/contact.component';

import { BlogListComponent } from './header/blog-list/blog-list.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PorfolioComponent } from './header/porfolio/porfolio.component';
import { AppRoutingModule } from './app-routing.module';
import{ SharedModule} from 'src/app/shared/shared.module'
import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';
import { SignInComponent } from './header/sign-in/sign-in.component';    
import { SignUpComponent } from './header/sign-up/sign-up.component';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './header/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './adminPanel/dashboard/dashboard.component';
import { AddBlogComponent } from './adminPanel/add-blog/add-blog.component';
import { CategoriesComponent } from './adminPanel/categories/categories.component';
import { TagsComponent } from './adminPanel/tags/tags.component';




@NgModule({
  declarations: [
    AppComponent,
  
    SignInComponent,
    SignUpComponent,
    FooterComponent,
    MainComponent,
    NavComponent,
    BlogComponent,
    MyWorksComponent,
    ContactComponent,
    PorfolioComponent,
    BlogListComponent,
    DashboardComponent,
    AddBlogComponent,
    CategoriesComponent,
    TagsComponent
    
  ],

  imports: [
 
   
    BrowserModule,
    NgxHideOnScrollModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
