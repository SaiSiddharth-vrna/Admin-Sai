import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  subMenu: any[] = [
    {
      label: 'Approve Movie',
      icon: 'playlist_add_check',
      link: '/movies/approve',
      tab: 'tab1-tab'
    },
    {
      label: 'Active Movies',
      icon: 'video_library',
      link: '/movies/active',
      tab: 'tab2-tab'
    },
    {
      label: 'Rejected Movies',
      icon: 'not_interested',
      link: '/movies/rejected',
      tab: 'tab3-tab'
    },
    {
      label: 'Add Movie',
      icon: 'playlist_add',
      link: '/movies/add',
      tab: 'tab4-tab'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
