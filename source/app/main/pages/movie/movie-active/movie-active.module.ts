import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieActiveComponent } from './movie-active.component';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { MovieDetailsTemplateModule } from 'src/app/components/movie-details-template/movie-details-template.module';
import { ImageModule } from 'src/app/components/image/image.module';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';
const movieActiveRouting = RouterModule.forChild([
  {
    path: '',
    component: MovieActiveComponent
  }
]);


@NgModule({
  declarations: [
    MovieActiveComponent
  ],
  imports: [
    CommonModule,
    movieActiveRouting,
    FormsModule,
    TableModule,
    ToggleButtonModule,
    InputSwitchModule,
    ButtonModule,
    MovieDetailsTemplateModule,
    ImageModule,
    RatingModule,
    InputTextModule,
    SelectButtonModule,
    ChipModule,
    TagModule
  ]
})
export class MovieActiveModule { }
