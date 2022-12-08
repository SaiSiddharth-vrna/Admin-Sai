import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
   
  menuActive: number = 0;
  toggled = false;
  menus = [
    {
      id: 1,
      label: 'Home',
      icon: 'dashboard',
      link: '/dashboard'
    },
    {
      id: 2,
      label: 'Movies',
      icon: 'live_tv',
      link: '/movies',
      childMenu: [
        {
          label: 'Approve Movie',
          icon: 'playlist_add_check',
          link: '/movies/approve'
        },
        {
          label: 'Active Movies',
          icon: 'video_library',
          link: '/movies/active'
        },
        {
          label: 'Rejected Movies',
          icon: 'not_interested',
          link: '/movies/rejected'
        },
        {
          label: 'Add Movie',
          icon: 'playlist_add',
          link: '/movies/add'
        },
        
      ]
    },
    {
      id: 3,
      label: 'Users',
      icon: 'manage_accounts',
      link: '/users',
      childMenu: [
        {
          label: 'Approve Users',
          icon: 'assignment',
          link: '/users/approve'
        },
        {
          label: 'Active Users',
          icon: 'post_add',
          link: '/users/active'
        },
        {
          label: 'Rejected Users',
          icon: 'post_add',
          link: '/users/rejected'
        }
      ]
    },
    {
      id: 4,
      label: 'Account',
      icon: 'account_balance_wallet',
      link: '/account',
      childMenu:[
        {
          label:'user hierarchy',
          icon:'post_add',
          link:'/account/user-heirarchy'
        }
     
      ]
    },
    {
      id:5,
      label:'Help & Support',
      icon:'local_post_office',
      link:'/support',
      childMenu:[{
        label:'add-ticket',
        icon:'add_box',
        link:'/support/add-ticket'
      },
      {
        label:'edit ticket',
        icon:'edit_note',
        link:''
      },
      {
        label:'view ticket',
        icon:'local_activity',
        link:''
      },
      {
        label:'close ticket',
        icon:'disabled_by_default',
        link:''
      }
       
      ]
    }

    /*{
      label:'User-profile table',
      icon:'manage_accounts',
      link:'/user-profile/user-profiletable.component.html'
    }*/
    
   
  
  ]

  constructor(
    private authService: AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  onMenuClick(e: number) {
    if (this.menuActive === e) {
      this.menuActive = 0;
    } else {
      this.menuActive = e;
    }
  }

  onToggle() {
    this.toggled = !this.toggled;
    console.log(this.toggled);
  }

  onLogout() {
    this.authService.logout();
  }
}
