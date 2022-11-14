import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { ROLES_KEY } from 'src/app/shared/services/orch.service';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { UserService } from 'src/app/shared/services/user.service';
import { UserAddComponent } from '../user-add/user-add.component';

@Component({
  selector: 'app-user-rejected',
  templateUrl: './user-rejected.component.html',
  styleUrls: ['./user-rejected.component.scss'],
  providers: [
    ToastService
  ]
})
export class UserRejectedComponent implements OnInit {
  dataSource: any[] = [];
  loading = false;
  clonedProducts: { [s: string]: any; } = {};
  roles: any[] = []

  @ViewChild('userRejectedGrid') datagrid: Table;
  @ViewChild(UserAddComponent) addUserComponent: UserAddComponent;
  constructor(
    private toast: ToastService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.roles = JSON.parse(localStorage.getItem(ROLES_KEY));
    this.getDataSource();
  }

  getDataSource() {
    this.userService.getAllRejectedUsers().subscribe({
      next: (res: any) => {
        console.log(res);
        if (res?.status?.toLowerCase() === 'success' && res?.statusCode == 200) {
          this.dataSource = res.data;
        } else {
          /*this.toast.show('error', res.status, res.message);*/
        }
      },
      complete: () => console.log('approval completed'),
      error: error => {
       /* console.error(error);
        this.toast.show('error', 'Failed', error.statusText);*/
      }
    })
  }

  onGlobalFilter(e: any) {
    this.datagrid.filterGlobal(e.target.value, 'contains')
  }

  onRowEditInit(product: any) {
    this.clonedProducts[product.id] = { ...product };
    console.log(product)
  }

  onRowEditSave(product: any) {
    if (product.price > 0) {
      delete this.clonedProducts[product.id];
      this.toast.show('success', 'Success', 'yes success!');
    }
    else {
      /*this.toast.show('error', 'Error', 'Invalid Price');*/
    }
    console.log(product)
  }

  onRowEditCancel(product: any, index: number) {
    this.dataSource[index] = this.clonedProducts[product.id];
    delete this.clonedProducts[product.id];
    console.log(product)
  }

  addUser() {
    this.addUserComponent.showDialog();
  }
}
