import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Checkbox } from 'primeng/checkbox';
import { ToastService } from '../shared/services/toast/toast.service';
import { AuthService } from './auth.service';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";


export interface Auth {
  email: string;
  password: string;
  macAddress: string;
  admin: boolean;
  Rememberme:boolean;
}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  providers: [
    AuthService
  ]
})
export class AuthComponent {
  hide = true;
  date = Date();
  onLoading = false;
  loginForm = this.fb.group({
  /* email: ['demouser.s@vrnaplex.com',[Validators.required, Validators.email]],
    password: ['demouser123', [Validators.required, Validators.minLength(6)]]*/
    
    email: ['chidambararaj.j@vrnaplex.com', [Validators.required, Validators.email]],
    password: ['Sathesh123', [Validators.required, Validators.minLength(6)]]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toast: ToastService,
    
    
  ) { }
  /*signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }*/

  onSubmit() {
    if (this.loginForm.valid) {
      this.onLoading = true;
      const macId: any = this.authService.uniqueID();
      const pwd = btoa(this.loginForm.value.password);
      const data: Auth = {
        email: this.loginForm.value.email,
        password: pwd,
        Rememberme:true,
        macAddress: macId,
        admin: true
      };
      this.authService.authenticate(data).subscribe({
        next: (res: any) => {
          if (res?.status?.toLowerCase() === 'success' && res?.statusCode == 200) {
            const userData = res.data;
            const token = res.token;
            this.authService.afterLogin(userData, macId, token);
          } else {
            console.log(res);
            this.toast.show('error', res.status, res.message)
            
            ;
          }
        },
        error: error => {
          this.onLoading = false;
          console.error(error);
          this.toast.show('error', 'Failed', error.statusText);
        },
        complete: () => this.onLoading = false
      });
    } else {
      this.toast.show('error', 'Invalid Request', 'Email (or) Password invalid. Please try with valid input.');
    }
  }

}
