import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from 'src/app/adminPanel/add-blog/add-blog.component';
import { CategoriesListComponent } from 'src/app/adminPanel/categories-list/categories-list.component';
import { CategoriesComponent } from 'src/app/adminPanel/categories/categories.component';
import { TagsComponent } from 'src/app/adminPanel/tags/tags.component';

const routes: Routes = [
  {path:'add-blog',component:AddBlogComponent,title: ' Add Blog'},
  {path:'categories-list',component:CategoriesListComponent,title: 'Admin Categories-list'},
  {path:'tags',component:TagsComponent,title: 'Tags'},
  {path:'categories',component:CategoriesComponent,title: 'Categories'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
