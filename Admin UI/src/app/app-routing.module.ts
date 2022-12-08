import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieApproveComponent } from './main/pages/movie/movie-approve/movie-approve.component';
import { ApproveMoviesWidgetComponent } from './main/widgets/approve-movies-widget/approve-movies-widget.component';
import { AuthLoginGuard } from './shared/gaurds/auth-login.guard';
import { AuthGuard } from './shared/gaurds/auth.gaurd';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { UserProfileComponent } from './main/pages/user-profile/user-profile.component';
import { SettingsComponent } from './main/pages/settings/settings.component';
import { SupportComponent } from './main/pages/support/support.component';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [AuthLoginGuard]
  },
  {
    path: '',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule),
    canActivate: [AuthGuard]
  },
  {
    path:'approve-movies-widget',component:ApproveMoviesWidgetComponent
  },
  
  { path: 'forgot-password', component: ForgotPasswordComponent },
    
  
  {
    path:'movie-approve',component:MovieApproveComponent
  },
  {
    path:'settings',component:SettingsComponent
  },
  {
    path:'user-profile',component:UserProfileComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
