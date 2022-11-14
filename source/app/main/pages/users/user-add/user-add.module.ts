import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAddComponent } from './user-add.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    UserAddComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    RadioButtonModule,
    CheckboxModule,
    InputNumberModule,
    DropdownModule
  ],
  exports: [
    UserAddComponent,
    ButtonModule,
    DialogModule,
    InputTextModule,
    RadioButtonModule,
    CheckboxModule,
    InputNumberModule,
    DropdownModule
  ]
})
export class UserAddModule { }
