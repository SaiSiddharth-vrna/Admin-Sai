import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUploadCropComponent } from './image-upload-crop.component';
import { RangeSliderComponent } from '../range-slider/range-slider.component';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
  declarations: [
    ImageUploadCropComponent,
    RangeSliderComponent
  ],
  imports: [
    CommonModule,
    FileUploadModule
  ],
  exports: [
    ImageUploadCropComponent,
    RangeSliderComponent,
    FileUploadModule
  ]
})
export class ImageUploadCropModule { }
