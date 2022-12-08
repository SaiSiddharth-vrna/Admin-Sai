/*import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth.routing.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';





import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';


const authRouting = RouterModule.forChild([
  {
    path: '',
    component: AuthComponent
  }
]);

@NgModule({
  declarations: [
    AuthComponent,
    ForgotPasswordComponent
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    authRouting,
    InputTextModule,
    AuthRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,

  ]
})
export class AuthModule { }*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth.routing.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
const authRouting = RouterModule.forChild([
  {
    path: '',
    component: AuthComponent
  }
]);
@NgModule({
  declarations: [
    AuthComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    authRouting,
    InputTextModule,
    AuthRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule
  ]
}) 
export class AuthModule { }
