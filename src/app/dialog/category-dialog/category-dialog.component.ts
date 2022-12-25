import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Categories } from 'src/app/interface/categories.interface';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrls: ['./category-dialog.component.css']
})
export class CategoryDialogComponent implements OnInit {
catControl:FormControl = new FormControl('',[Validators.required]);;

constructor( private _categoriesService:CategoriesService,
  public matDialogRef:MatDialogRef<CategoryDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public catData: Categories
  ){}



  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if(this.catData)this.catControl.setValue(this.catData.title);
  }

  submit(){
    if(!this.catData){
      this._categoriesService.addCategory({
        title: this.catControl.value,
        _id: "",
        __v: 0,
        descr: '',
        metaKeyword: '',
        metaDescr: '',
        metaAuthor: '',
        img: '',
        isFavorite: false
      }).subscribe(()=>{
        this.matDialogRef.close(true);
      },
      err =>{
  this.matDialogRef.close()
      })
      return;
    }
    this._categoriesService.editCategory({
      title: this.catControl.value,
      _id: '',
      descr: '',
      metaKeyword: '',
      metaDescr: '',
      metaAuthor: '',
      img: '',
      isFavorite: false,
      __v: 0
    }).subscribe(()=>{
      this.matDialogRef.close(true)
    }
    ,err =>{
      this.matDialogRef.close()
    })
  }
   



}
