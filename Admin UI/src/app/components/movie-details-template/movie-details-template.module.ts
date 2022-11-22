import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailsTemplateComponent } from './movie-details-template.component';
import { ImageModule } from '../image/image.module';

@NgModule({
  declarations: [
    MovieDetailsTemplateComponent
  ],
  imports: [
    CommonModule,
    ImageModule
  ],
  exports: [
    MovieDetailsTemplateComponent,
    ImageModule
  ]
})
export class MovieDetailsTemplateModule { }
