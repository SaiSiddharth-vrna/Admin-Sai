import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieApproveComponent } from './movie-approve.component';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { MovieDetailsTemplateModule } from 'src/app/components/movie-details-template/movie-details-template.module';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { ImageModule } from 'src/app/components/image/image.module';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {GalleriaModule} from 'primeng/galleria';




const movieAllRouting = RouterModule.forChild([
  {
    path: '',
    component: MovieApproveComponent
  }
]);

@NgModule({
  declarations: [
    MovieApproveComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    movieAllRouting,
    MovieDetailsTemplateModule,
    TableModule,
    ButtonModule,
    SplitButtonModule,
    InputTextModule,
    ImageModule,
    ConfirmPopupModule,
    ConfirmDialogModule,
    DialogModule,
    TooltipModule,
    GalleriaModule
   
  ],
  providers: []
})
export class MovieApproveModule { }
