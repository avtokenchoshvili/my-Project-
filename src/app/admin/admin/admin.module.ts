import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




import { AdminRoutingModule } from './admin-routing.module';


import { DashboardComponent } from 'src/app/adminPanel/dashboard/dashboard.component';
import {AddBlogComponent}  from 'src/app/adminPanel/add-blog/add-blog.component';
import { CategoriesComponent} from  'src/app/adminPanel/categories/categories.component';
import { TagsComponent}  from 'src/app/adminPanel/tags/tags.component';
import { CategoriesListComponent}  from  'src/app/adminPanel/categories-list/categories-list.component'
import{ SharedModule} from 'src/app/shared/shared.module';



@NgModule({
  declarations: [DashboardComponent ,AddBlogComponent,CategoriesComponent,TagsComponent,CategoriesListComponent],
  exports: [DashboardComponent,AddBlogComponent,CategoriesComponent,TagsComponent,CategoriesListComponent] ,
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    
  ]
})
export class AdminModule { }
