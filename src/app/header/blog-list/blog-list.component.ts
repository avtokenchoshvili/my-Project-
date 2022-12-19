import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/interface/blog.interface';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent {

  blogs$!: Observable<Blog[]>;
  constructor(private _blogService: BlogService) { }

  ngOnInit(): void {
		this.blogs$ = this._blogService.getBlogs();
  }
}
