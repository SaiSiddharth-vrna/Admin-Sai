import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-revenue-chart-widget',
  templateUrl: './revenue-chart-widget.component.html',
  styleUrls: ['./revenue-chart-widget.component.scss']
})
export class RevenueChartWidgetComponent implements OnInit {
  data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Revenue',
        backgroundColor: [
          '#FF69B4',
          '#581845 ',
          '#E0B0FF',
          '#8b008b ',
          '#483d8b',
          '#191970',
          '#002147'
      ],
        data: [65, 59, 80, 81, 56, 55, 40, 80, 81, 56, 55, 40]
      }
    ]
  }
  constructor() { }

  ngOnInit(): void {
  }

}
