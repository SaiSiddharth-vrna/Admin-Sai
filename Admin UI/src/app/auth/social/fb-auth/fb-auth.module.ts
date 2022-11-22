import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLoginModule } from '@abacritt/angularx-social-login';
import { SocialAuthService } from '@abacritt/angularx-social-login/socialauth.service';


@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    SocialLoginModule,
  
  ]
})
export class FbAuthModule { }
