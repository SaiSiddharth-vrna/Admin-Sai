import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserRejectedComponent } from './user-rejected.component';
import { UserAddModule } from '../user-add/user-add.module';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';

const userRejectedRouting = RouterModule.forChild([
  {
    path: '',
    component: UserRejectedComponent
  }
]);

@NgModule({
  declarations: [
    UserRejectedComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    userRejectedRouting,
    UserAddModule,
    TableModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
  ]
})
export class UserRejectedModule { }
