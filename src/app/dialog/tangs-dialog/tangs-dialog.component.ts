import { Component, Inject } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Title } from "@angular/platform-browser";
import { Tags } from "src/app/interface/tags.interface";
import { TagsService } from "src/app/services/tags.service";

@Component({
  selector: "app-tangs-dialog",
  templateUrl: "./tangs-dialog.component.html",
  styleUrls: ["./tangs-dialog.component.css"],
})
export class TangsDialogComponent {
  tagControl: FormControl = new FormControl("", [Validators.required]);

  constructor(
    private _tagsService: TagsService,
    public matDialogRef: MatDialogRef<TangsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Tags
  ) {}

  ngOnInit(): void {
console.log(this.data  + 'sdddddddd')
    if(this.data)this.tagControl.setValue(this.data.title);
  }

submit(){
  if(!this.data){
    this._tagsService.addTag({
      title: this.tagControl.value,
      _id: "",
      __v: 0
    }).subscribe(()=>{
      this.matDialogRef.close(true);
    },
    err =>{
this.matDialogRef.close()
    })
    return;
  }
  this._tagsService.editTag({
 
    id: this.data._id,
    title: this.tagControl.value
    
    
  }).subscribe(()=>{
    this.matDialogRef.close(true)
  }
  ,err =>{
    this.matDialogRef.close()
  })
}
 
}
