import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  subMenu:any[]=[
  {
    label:'add ticket',
    icon: 'add_box',
    link:'/support/add-ticket',
    tab:'tab1-tab'
  },
  {
    label:'edit ticket',
    icon:'edit_note',
    link:'/support/edit-ticket',
    tab:'tab2-tab'
  },
  {
    label:'view ticket',
    icon:'local_activity',
    link:'/support/view-ticket',
    tab:'tab3-tab'
  },
  {
    label:'close ticket',
    icon:'disabled_by_default',
    link:'/support/delete-ticket',
    tab:'tab4-tab'
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
