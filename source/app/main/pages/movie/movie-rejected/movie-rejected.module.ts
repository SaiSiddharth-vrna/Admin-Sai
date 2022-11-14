import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieRejectedComponent } from './movie-rejected.component';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { MovieDetailsTemplateModule } from 'src/app/components/movie-details-template/movie-details-template.module';
import { ButtonModule } from 'primeng/button';

import { ConfirmDialogModule } from 'primeng/confirmdialog';

const movieRejectedRouting = RouterModule.forChild([
  {
    path: '',
    component: MovieRejectedComponent
  }
]);

@NgModule({
  declarations: [
    MovieRejectedComponent
  ],
  imports: [
    CommonModule,
    movieRejectedRouting,
    TableModule,
    MovieDetailsTemplateModule,
    ButtonModule,ConfirmDialogModule
  ]
})
export class MovieRejectedModule { }
