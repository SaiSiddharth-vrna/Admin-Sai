import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { TopbarComponent } from './topbar/topbar.component';
import { RouterModule } from '@angular/router';
import { DividerModule } from 'primeng/divider';


@NgModule({
  declarations: [
    TopbarComponent,
    SidemenuComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    DividerModule
  ],
  exports: [
    TopbarComponent,
    SidemenuComponent,
    DividerModule
  ]
})
export class LayoutModule { }
