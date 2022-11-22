import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/shared/services/account.service';
import { ToastService } from 'src/app/shared/services/toast/toast.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  providers: [
    ToastService,
    AccountService
  ]
})

export class AccountComponent implements OnInit {

  constructor(
    private accountService: AccountService,
    private toast: ToastService
  ) { }

  ngOnInit(): void {
    this.getAllTransactions();
  }

  getAllTransactions() {
    this.accountService.getAllRevenue().subscribe({
      next: (res: any) => {
        console.log(res);
        if (res?.status?.toLowerCase() === 'success' && res?.statusCode == 200) {
          
        } else {
         this.toast.show('error', res.status, res.message);
        }
      },
      complete: () => console.log('completed'),
      error: error => {
        console.error(error);
       this.toast.show('error', 'Failed', error.statusText);
      }
    })
  }
 subMenu:any[]=[

  {
    label: 'User Hierarchy',
    icon: 'playlist_add',
    link: '/account/user-hierarchy',
    tab: 'tab1-tab'
  }
 ]
}
