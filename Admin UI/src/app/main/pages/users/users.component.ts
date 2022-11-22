import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  subMenu: any[] = [
    {
      label: 'Approve Users',
      icon: 'assignment',
      link: '/users/approve',
      tab: 'tab1-tab'
    },
    {
      label: 'Active Users',
      icon: 'post_add',
      link: '/users/active',
      tab: 'tab2-tab'
    },
    {
      label: 'Rejected Users',
      icon: 'post_add',
      link: '/users/rejected',
      tab: 'tab3-tab'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
