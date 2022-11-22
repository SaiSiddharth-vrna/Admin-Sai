import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-details-template',
  templateUrl: './movie-details-template.component.html',
  styleUrls: ['./movie-details-template.component.scss']
})
export class MovieDetailsTemplateComponent implements OnInit {
  @Input() movie: any;

  constructor() { }

  ngOnInit(): void {
  }

}
