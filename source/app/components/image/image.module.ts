import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image.component';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
  declarations: [
    ImageComponent
  ],
  imports: [
    CommonModule,
    SkeletonModule
  ],
  exports: [
    ImageComponent,
    SkeletonModule
  ]
})
export class ImageModule { }
