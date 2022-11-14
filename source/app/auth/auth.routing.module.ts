import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


const routes: Routes = [
  {
    path: '', component:AuthComponent,
    children: [
      { path: '', redirectTo: 'auth', pathMatch: 'full' },
      { path:'auth',component: AuthComponent},
      { path: 'forgot-password', component: ForgotPasswordComponent }
    ]
  }

];
 
@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule]
})
export class AuthRoutingModule {}

