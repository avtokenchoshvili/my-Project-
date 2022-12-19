import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/interface/blog.interface';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
 
blog$!: Observable<Blog>

  constructor(
		private _blogService: BlogService,
		private _route: ActivatedRoute
	) { }

  ngOnInit(): void {
		this.blog$ = this._blogService.getBlog(this._route.snapshot.params['id']);
  }

}
