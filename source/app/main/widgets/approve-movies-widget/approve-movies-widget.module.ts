import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { ApproveMoviesWidgetComponent } from './approve-movies-widget.component';
import { TooltipModule } from 'primeng/tooltip';
import {ButtonModule} from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TagModule } from 'primeng/tag';
import {FormsModule} from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import { ReactiveFormsModule } from "@angular/forms";


import { MessagesModule } from 'primeng/messages';

import {ConfirmDialogModule} from 'primeng/confirmdialog';





@NgModule({
  declarations: [ ApproveMoviesWidgetComponent ],
  bootstrap:    [ ApproveMoviesWidgetComponent ],

  imports: [
    
    CommonModule,
    TooltipModule,
    ButtonModule, 
    RippleModule,
    TagModule,
    ToastModule,
    FormsModule,
    ConfirmDialogModule,
    MessagesModule,
    ReactiveFormsModule
    

  ],
  exports: [
    ApproveMoviesWidgetComponent
  ]
})
export class ApproveMoviesWidgetModule { }
