import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserActiveComponent } from './user-active.component';
import { UserAddModule } from '../user-add/user-add.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

const userActiveRouting = RouterModule.forChild([
  {
    path: '',
    component: UserActiveComponent
  }
]);

@NgModule({
  declarations: [
    UserActiveComponent
  ],
  imports: [
    CommonModule,
    userActiveRouting,
    FormsModule,
    UserAddModule,
    TableModule,
    ButtonModule,
    DropdownModule
  ]
})
export class UserActiveModule { }
