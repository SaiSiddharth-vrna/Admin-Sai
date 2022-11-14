import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserApproveComponent } from './user-approve.component';
import { UserAddModule } from '../user-add/user-add.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ReactiveFormsModule } from '@angular/forms';

const userApproveRouting = RouterModule.forChild([
  {
    path: '',
    component: UserApproveComponent
  }
]);

@NgModule({
  declarations: [
    UserApproveComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    userApproveRouting,
    UserAddModule,
    TableModule,
    ButtonModule,
    TagModule,
    ConfirmDialogModule
  ]
})
export class UserApproveModule { }
