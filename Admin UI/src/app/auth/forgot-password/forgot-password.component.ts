import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { AuthService } from '../auth.service';







export interface Auth {
  email: string;
  password: string;
  macAddress: string;
  admin: boolean;
}


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  providers: [
    AuthService
  ]
})
export class ForgotPasswordComponent implements OnInit {

  hide = true;
  date = Date();
  onLoading = false;
  loginForm: any;
  

  constructor(
    private fb: FormBuilder,
    private toast: ToastService,
    private authService: AuthService,


  ) { }

  ngOnInit(): void {
  }






  

}
