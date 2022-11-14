import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { TabMenuModule } from 'primeng/tabmenu';
import { TrialComponent } from './trial.component';
import { TrialRoutingModule } from './trial.routing.module';
import { RouterModule } from '@angular/router';
const TrialRouting = RouterModule.forChild([
    {
      path: '',
      component: TrialComponent
    }
  ]);
@NgModule({
  declarations: [
    TrialComponent
  ],
  imports: [
    CommonModule,
    TrialRoutingModule,
    TabViewModule,
    TabMenuModule,
    RouterModule
  ]
})
export class TrialModule { }
