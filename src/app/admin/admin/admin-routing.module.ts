import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddBlogComponent } from 'src/app/adminPanel/add-blog/add-blog.component';

import { CategoriesComponent } from 'src/app/adminPanel/categories/categories.component';
import { DashboardComponent } from 'src/app/adminPanel/dashboard/dashboard.component';

import { TagsComponent } from 'src/app/adminPanel/tags/tags.component';

const routes: Routes = [
 {path:'dashboard' , component:DashboardComponent ,title: 'Dashboard',
children:[
  {path:'categories/list' ,component:CategoriesComponent , title: 'Categories'},
  {path:'add-blog',component:AddBlogComponent,title: ' Add Blog'},
  {path:'tags',component:TagsComponent,title: 'Tags'},
],
},
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
