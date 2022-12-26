import { Component, Inject, OnInit } from "@angular/core";
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder,
} from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { async, switchMap, tap } from "rxjs";
import { Categories } from "src/app/interface/categories.interface";
import { CategoriesService } from "src/app/services/categories.service";

@Component({
  selector: "app-category-dialog",
  templateUrl: "./category-dialog.component.html",
  styleUrls: ["./category-dialog.component.css"],
})
export class CategoryDialogComponent implements OnInit {
  public catForm!: FormGroup;
  public catImg: any;

  constructor(
    private _categoriesService: CategoriesService,
    public matDialogRef: MatDialogRef<CategoryDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public catData: Categories
  ) {}

  ngOnInit(): void {
    console.log(this.catData + " rame");
    this.initForm();

    // if(this.catData)this.catControl.setValue(this.catData.title);
  }

  initForm() {
    this.catForm = new FormGroup({
      _id: new FormControl("", [Validators.required]),
      title: new FormControl("", [Validators.required]),
      descr: new FormControl("", [Validators.required]),
      metaKeyword: new FormControl("", [Validators.required]),
      metaDescr: new FormControl("", [Validators.required]),
      metaAuthor: new FormControl("", [Validators.required]),
      img: new FormControl(""),
      isFavorite: new FormControl(''),
      __v: new FormControl(Number),
    });
  }
  sub() {
    // this._categoriesService.addCategory(this.catForm.value).subscribe(
    //   res =>{
    //     console.log(res)
    //   }
    // )
    console.log(this.catForm.value);
  }

  //   bla( ){

  // this._categoriesService.uploadCat(this.catImg).pipe(
  //   switchMap((res:any)=>{
  //     this.catForm.controls['img'].setValue(res['img'])
  //     return this._categoriesService.addCategory(this.catForm.value)
  //   })
  // ).subscribe(
  //   (res:any) =>{
  //     console.log(res)
  //   }
  // )

  //   }

  send() {
    this._categoriesService.addCategory(this.catForm.value).pipe(
      tap((res)=>{
        
      })
    ).subscribe(
      
    )
  }

  // submit(){
  //   if(this.catData){
  //     this._categoriesService.addCategory({
  //       title: this.FormControl.value,
  //       _id: this.FormControl._id.value,
  //       __v: this.FormControl.__v.value,
  //       descr: this.FormControl.descr.value,
  //       metaKeyword: this.FormControl.metaKeyword.value,
  //       metaDescr: this.FormControl.metaDescr.value,
  //       metaAuthor:this.FormControl.metaAuthor.value,
  //       img: this.FormControl.img.value,
  //       isFavorite: this.FormControl.isFavorite.value
  //     }).subscribe((res)=>{
  //       console.log(res + 'data  a')
  //       this.matDialogRef.close(true);
  //     },
  //     err =>{
  // this.matDialogRef.close()
  //     })
  //     return;
  //   }
  //   this._categoriesService.editCategory({

  //     title:'',
  //     _id: "",
  //     __v: 0,
  //     descr: '',
  //     metaKeyword: '',
  //     metaDescr: '',
  //     metaAuthor: '',
  //     img: '',
  //     isFavorite: false

  //   }).subscribe(()=>{
  //     this.matDialogRef.close(true)
  //   }
  //   ,err =>{
  //     this.matDialogRef.close()
  //   })
  // }
}

// submit(){
//   if(!this.catData){
//     this._categoriesService.addCategory({
//       title: this.catForm.value,
//       _id: "",
//       __v: 0,
//       descr: '',
//       metaKeyword: '',
//       metaDescr: '',
//       metaAuthor: '',
//       img: '',
//       isFavorite: false
//     }).subscribe(()=>{
//       this.matDialogRef.close(true);
//     },
//     err =>{
// this.matDialogRef.close()
//     })
//     return;
//   }
// }
//   this._categoriesService.editCategory({
//     title: this.catControl.value,
//     _id: '',
//     descr: '',
//     metaKeyword: '',
//     metaDescr: '',
//     metaAuthor: '',
//     img: '',
//     isFavorite: false,
//     __v: 0
//   }).subscribe(()=>{
//     this.matDialogRef.close(true)
//   }
//   ,err =>{
//     this.matDialogRef.close()
//   })
// }
