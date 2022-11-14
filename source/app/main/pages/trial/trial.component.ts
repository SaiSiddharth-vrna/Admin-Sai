import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.scss']
})
export class TrialComponent implements OnInit {
  subMenu:any[]=[
    {
      label: 'trial active',
      icon: 'playlist_add_check',
      link: '/trial/trial-active',
      tab: 'tab1-tab'
    },
    {
      label: 'trial add',
      icon: 'video_library',
      link: '/trial/trial-add',
      tab: 'tab2-tab'
    },
    {
      label: 'trial approve',
      icon: 'not_interested',
      link: '/trial/trial-approve',
      tab: 'tab3-tab'
    },
    {
      label: 'trial rejected',
      icon: 'playlist_add',
      link: '/trial/trial-rejected',
      tab: 'tab4-tab'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
