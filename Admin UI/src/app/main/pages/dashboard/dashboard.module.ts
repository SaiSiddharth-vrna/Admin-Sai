import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { TileWidgetModule } from '../../widgets/tile-widget/tile-widget.module';
import { ApproveMoviesWidgetModule } from '../../widgets/approve-movies-widget/approve-movies-widget.module';
import { RevenueChartWidgetModule } from '../../widgets/revenue-chart-widget/revenue-chart-widget.module';
import {ToastModule} from 'primeng/toast';


const dashboardRouting = RouterModule.forChild([
  {
    path: '',
    component: DashboardComponent
  }
]);

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    dashboardRouting,
    TileWidgetModule,
    ApproveMoviesWidgetModule,
    RevenueChartWidgetModule,ToastModule
  ]
})
export class DashboardModule { }
