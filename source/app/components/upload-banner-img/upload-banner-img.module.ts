import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import { UploadBannerImgComponent } from './upload-banner-img.component';
import { UploadService } from 'src/app/shared/services/upload.service';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    UploadBannerImgComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FileUploadModule,
    DialogModule,
    SliderModule,
    ToastModule
  ],
  providers: [
    UploadService
  ],
  exports: [
    UploadBannerImgComponent,
    FormsModule,
    FileUploadModule,
    DialogModule,
    SliderModule
  ]
})
export class UploadBannerImgModule { }
