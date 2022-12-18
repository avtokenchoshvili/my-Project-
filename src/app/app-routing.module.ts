import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './header/main/main.component';
import { PorfolioComponent } from './header/porfolio/porfolio.component';
import { FooterComponent } from './footer/footer.component';
import { SignUpComponent } from './header/sign-up/sign-up.component';






const routes:Routes = [
  {path:'home',component: MainComponent ,title: 'Home'},
  {path:'porfolio',component:PorfolioComponent ,title: 'Porfolio'},
  {path:'footer',component:FooterComponent  ,title: 'Footer'},
  {path:'sign-up',component:SignUpComponent , title: 'Sign Up'},
]

@NgModule({
  
 
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
  ],
  exports:[RouterModule],
})
export class AppRoutingModule { }


// {scrollPositionRestoration: 'enabled'}