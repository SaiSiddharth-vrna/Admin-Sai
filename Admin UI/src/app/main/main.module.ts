import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { LayoutModule } from './layout/layout.module';
import { OrchService } from '../shared/services/orch.service';

import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { SettingsComponent } from './pages/settings/settings.component';


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
