import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './header/main/main.component';
import { PorfolioComponent } from './header/porfolio/porfolio.component';
import { FooterComponent } from './footer/footer.component';
import { SignUpComponent } from './header/sign-up/sign-up.component';
import { BlogComponent } from './header/blog/blog.component';
import { BlogListComponent } from './header/blog-list/blog-list.component';
import { SignInComponent } from './header/sign-in/sign-in.component';

import { AdminModule} from 'src/app/admin/admin/admin.module';





const routes:Routes = [
  {path:'home',component: MainComponent ,title: 'Home'},
  {path:'porfolio',component:PorfolioComponent ,title: 'Porfolio'},
  {path:'footer',component:FooterComponent  ,title: 'Footer'},
  {path:'sign-up',component:SignUpComponent , title: 'Sign Up'},
  {path:'blog' ,component:BlogListComponent ,title: 'Blog'},
  {path:'blog-detail/:id',component:BlogComponent, title: 'Blog'},
  {path:'sign-in',component:SignInComponent , title: 'Sign'},

  {path: 'admin' , loadChildren:()=> import('./admin/admin/admin.module').then(m=>m.AdminModule)},
  
]

@NgModule({
  
 
  imports: [
    CommonModule,
    AdminModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
  ],
  exports:[RouterModule],
})
export class AppRoutingModule { }


// {scrollPositionRestoration: 'enabled'}