import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmDialogComponent } from 'src/app/dialog/confirm-dialog/confirm-dialog.component';
import { Tags } from 'src/app/interface/tags.interface';
import { TagsService } from 'src/app/services/tags.service';
import { TangsDialogComponent } from 'src/app/dialog/tangs-dialog/tangs-dialog.component';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {


  tags$!: Observable<any[]>;
  constructor(
    private _tagsService: TagsService,
    private _matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this._getTags();
    
  }
  private _getTags() {
    this.tags$ = this._tagsService.getAllTag();
    console.log(this.tags$ + 'sda');
  }

  addTag(tag?: any) {
    const dialog = this._matDialog.open(TangsDialogComponent, {
      width: '440px',
			data: tag
    });

		dialog.afterClosed().subscribe(
			res => {
				if (res) {
					this._getTags();
				}
			}
		)
  }

  delete(tagId: string) {
    const dialog = this._matDialog.open(ConfirmDialogComponent, {
      width: '440px'
    });

    dialog.afterClosed().subscribe(res => {
      if (res) {
        this._tagsService.deleteTag(tagId).subscribe(
          () => {
            this._getTags();
          },
          err => {
            console.log(err);
          }
        );
      }
      console.log(res);
    });
  }
}
