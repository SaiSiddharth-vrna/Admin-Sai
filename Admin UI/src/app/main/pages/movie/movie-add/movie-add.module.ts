import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieAddComponent } from './movie-add.component';
import { RouterModule } from '@angular/router';

import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { ChipsModule } from 'primeng/chips';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { StepsModule } from 'primeng/steps';
import { InputNumberModule } from 'primeng/inputnumber';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';

import { MovieAddFormComponent } from './movie-add-form/movie-add-form.component';
import { MovieAddBannerComponent } from './movie-add-banner/movie-add-banner.component';
import { ImageUploadCropModule } from 'src/app/components/image-upload-crop/image-upload-crop.module';
import { UploadPosterImgModule } from 'src/app/components/upload-poster-img/upload-poster-img.module';
import { UploadBannerImgModule } from 'src/app/components/upload-banner-img/upload-banner-img.module';
import { PlayVideosModule } from 'src/app/components/play-videos/play-videos.module';
import { PlayVideosComponent } from 'src/app/components/play-videos/play-videos.component';




const movieAddRouting = RouterModule.forChild([
  {
    path: '',
    component: MovieAddComponent
  }
]);

@NgModule({
  declarations: [
    MovieAddComponent,
    MovieAddFormComponent,
    MovieAddBannerComponent,
     PlayVideosComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    movieAddRouting,
    InputTextModule,
    DropdownModule,
    MultiSelectModule,
    ChipsModule,
    InputTextareaModule,
    CalendarModule,
    DialogModule,
    ButtonModule,
    FileUploadModule,
    StepsModule,
    InputNumberModule,
    ToastModule,
    ImageUploadCropModule,
    UploadPosterImgModule,
    UploadBannerImgModule,
   PlayVideosModule
   
    
  ]
})
export class MovieAddModule { }
