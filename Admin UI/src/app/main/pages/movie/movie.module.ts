import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { MovieRoutingModule } from './movie-routing.module';
import { TabViewModule } from 'primeng/tabview';
import { TabMenuModule } from 'primeng/tabmenu';




@NgModule({
  declarations: [
    MovieComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    TabViewModule,
    TabMenuModule,
  ]
})
export class MovieModule { }
