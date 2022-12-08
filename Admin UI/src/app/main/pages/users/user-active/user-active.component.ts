import { Component, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { ROLES_KEY } from 'src/app/shared/services/orch.service';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { UserService } from 'src/app/shared/services/user.service';
import { UserAddComponent } from '../user-add/user-add.component';

@Component({
  selector: 'app-user-active',
  templateUrl: './user-active.component.html',
  styleUrls: ['./user-active.component.scss']
})
export class UserActiveComponent implements OnInit {
  dataSource: any[] = [];
  loading = false;
  roles: any[] = [];
  clonedUsers: { [s: string]: any; } = {};

  @ViewChild('userActiveGrid') datagrid: Table;
  @ViewChild(UserAddComponent) addUserComponent: UserAddComponent;
  constructor(
    private userService: UserService,
    private toast: ToastService
  ) { }

  ngOnInit(): void {
    this.getDataSource();
    this.roles = JSON.parse(localStorage.getItem(ROLES_KEY));
  }

  getDataSource() {
    this.userService.getAllActiveUsers().subscribe({
      next: (res: any) => {
        console.log(res);
        if (res?.status?.toLowerCase() === 'success' && res?.statusCode == 200) {
          this.dataSource = res.data;
          this.dataSource?.map((user: any) => {
            this.roles?.forEach((role: any) => {
              if (user.roleId === role.roleId) {
                user['role'] = role.roleName;
              }
            });
          });
        } else {
          /*this.toast.show('error', res.status, res.message);*/
        }
      },
      complete: () => console.log('approval completed'),
     error: error => {
        console.error(error);
       /* this.toast.show('error', 'Failed', error.statusText);*/
      }
    })
  }

  onGlobalFilter(e: any) {
    this.datagrid.filterGlobal(e.target.value, 'contains')
  }

  addUser() {
    this.addUserComponent.showDialog();
  }

  onRowEditInit(user: any) {
    this.clonedUsers[user.userId] = { ...user };
    console.log(user)
  }

  onRowEditSave(user: any) {
    if (user.roleId) {
      delete this.clonedUsers[user.userId];
      this.toast.show('success', 'Success', 'role is assigned successfully!');
    }
    else {
      this.toast.show('error', 'Error', 'Please assign role!');
    }
    console.log(user)
  }

  onRowEditCancel(user: any, index: number) {
    this.dataSource[index] = this.clonedUsers[user.userId];
    delete this.clonedUsers[user.userId];
    console.log(user)
  }
}
