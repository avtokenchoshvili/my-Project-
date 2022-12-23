import { Component ,Inject} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tags } from 'src/app/interface/tags.interface';
import { TagsService } from 'src/app/services/tags.service';

@Component({
  selector: 'app-tangs-dialog',
  templateUrl: './tangs-dialog.component.html',
  styleUrls: ['./tangs-dialog.component.css']
})
export class TangsDialogComponent {
  tagControl: FormControl = new FormControl('', [Validators.required]);

  constructor(
    private _tagsService: TagsService,
    public matDialogRef: MatDialogRef<TangsDialogComponent>,
	@Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  submit() {
		console.log(this.data);
		/*
    this._tagsService.addTag({ title: this.tagControl.value }).subscribe(
      () => {
        this.matDialogRef.close(true);
      },
      err => {
        this.matDialogRef.close();
      }
    );*/
  }
}
