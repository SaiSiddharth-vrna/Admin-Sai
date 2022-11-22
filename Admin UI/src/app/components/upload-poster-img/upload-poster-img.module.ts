import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadPosterImgComponent } from './upload-poster-img.component';

import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
@NgModule({
  declarations: [
    UploadPosterImgComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FileUploadModule,
    DialogModule,
    SliderModule,
    ToastModule
  ],
  exports: [
    UploadPosterImgComponent,
  ]
})
export class UploadPosterImgModule { }
