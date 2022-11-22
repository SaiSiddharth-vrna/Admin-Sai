import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevenueChartWidgetComponent } from './revenue-chart-widget.component';
import { ChartModule } from 'primeng/chart';
@NgModule({
  declarations: [
    RevenueChartWidgetComponent
  ],
  imports: [
    CommonModule,
    ChartModule
  ],
  exports: [
    RevenueChartWidgetComponent,
    ChartModule
  ]
})
export class RevenueChartWidgetModule { }
