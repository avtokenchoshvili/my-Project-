import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatSliderModule} from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {LayoutModule} from '@angular/cdk/layout';

import {MatListModule} from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';

import {MatCheckboxModule} from '@angular/material/checkbox';





@NgModule({
  declarations: [],
  exports: [ CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule,
    MatSliderModule,
    MatMenuModule,
    MatSidenavModule,
    LayoutModule,
    MatListModule,
    MatDialogModule,
    MatCheckboxModule
    
  ],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    CommonModule,
 
    MatButtonModule,
    MatDividerModule,
    MatSliderModule,
    MatMenuModule,
    MatSidenavModule,
    LayoutModule,
    MatListModule,
    MatCheckboxModule,
    MatDialogModule
   
   
  
  ]
})
export class SharedModule { }
