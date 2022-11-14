import { Component, OnInit } from '@angular/core';
import { OrchService } from '../shared/services/orch.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private orchService: OrchService,
  ) {
    this.orchService.getAllConfiguration();
  }

  ngOnInit(): void {
  }

}
