import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { LayoutModule } from './layout/layout.module';
import { OrchService } from '../shared/services/orch.service';





@NgModule({
  declarations: [
    MainComponent,
    
    
    
    
    
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    LayoutModule
  ],
  providers:[
    OrchService
  ]
})
export class MainModule { }
