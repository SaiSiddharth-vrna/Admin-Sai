import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';
import { SessionService } from 'src/app/shared/services/session/session.service';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { UserService } from 'src/app/shared/services/user.service';
import { UserAddComponent } from '../user-add/user-add.component';

@Component({
  selector: 'app-user-approve',
  templateUrl: './user-approve.component.html',
  styleUrls: ['./user-approve.component.scss'],
  providers: [
    ConfirmationService,
    ToastService,
    SessionService
  ]
})
export class UserApproveComponent implements OnInit {
  dataSource: any[] = [];
  loading = false;
  rejectionModal: boolean = false;
  selectedUser: any;
  rejectionComment = new FormControl('', [Validators.required, Validators.minLength(100)])

  @ViewChild('userApproveGrid') datagrid: Table;
  @ViewChild(UserAddComponent) addUserComponent: UserAddComponent;
  constructor(
    private userService: UserService,
    private toast: ToastService,
    private sessionService: SessionService,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnInit(): void {
    this.getDataSource();
  }

  getDataSource() {
    this.userService.getAllPendingUsers().subscribe({
      next: (res: any) => {
        console.log(res);
        if (res?.status?.toLowerCase() === 'success' && res?.statusCode == 200) {
          this.dataSource = res.data;
        } else {
         /* this.toast.show('error', res.status, res.message);*/
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

  confirmApproval(user: any) {
    this.confirmationService.confirm({
      message: `Are you sure that you want to Approve this Movie - ${user?.email}?`,
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.onApproval(user);
      },
      reject: () => {

      }
    });
  }

  onApproval(user: any) {
    const data = {
      userId: user.userId,
      workflowId: user.workflowId,
      approvedBy: this.sessionService.getUserId(),
      
        
    };
    this.userService.approveUser(data).subscribe({
      next: (res: any) => {
        console.log(res);
        if (res?.status?.toLowerCase() === 'success' && res?.statusCode == 200) {
          this.getDataSource();
          this.toast.show('success', 'Success', `You have successfully Approved ${user.email}`);
        } else {
          /*this.toast.show('error', res.status, res.message);*/
        }
      },
      complete: () => console.log('approval completed'),
      error: error => {
        console.error(error);
        /*this.toast.show('error', 'Failed', error.statusText);*/
      }
    })
  }

  confirmRejection(item: any) {
    this.rejectionModal = true;
    this.selectedUser = item;
  }

  onRejection() {
    const data = {
      userId: this.selectedUser.userId,
      workflowId: this.selectedUser.workflowId,
      comment: this.rejectionComment.value,
      approvedBy: this.sessionService.getUserId(),
    };
    this.userService.rejectUser(data).subscribe({
      next: (res: any) => {
        console.log(res);
        if (res?.status?.toLowerCase() === 'success' && res?.statusCode == 200) {
          this.getDataSource();
          this.toast.show('success', 'Success', `You have successfully rejected ${this.selectedUser.email}`);
        } else {
         /* this.toast.show('error', res.status, res.message);*/
        }
      },
      complete: () => this.rejectionModal = false,
      error: error => {
        console.error(error);
       /* this.toast.show('error', 'Failed', error.statusText);*/
      }
    })
  }
}
