import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TileWidgetComponent } from './tile-widget.component';

@NgModule({
  declarations: [
    TileWidgetComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TileWidgetComponent
  ]
})
export class TileWidgetModule { }
