import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
            },
            {
                path: 'users',
                loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule),
            },
            {
                path: 'movies',
                loadChildren: () => import('./pages/movie/movie.module').then(m => m.MovieModule),
            },
            {
                path: 'account',
                loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule),
            },
            {
                path:'settings',
                loadChildren:() =>import('./pages/settings/settings.module').then(m => m.SettingsModule)
            },
            {
                path:'user-profile',
                loadChildren: () =>import('./pages/user-profile/user-profile.module').then(m => m.UserProfileModule)
            },
            {
                path:'support',
                loadChildren:()=>import('./pages/support/support.module').then(m=>m.SupportModule)
            },
           
           
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MainRoutingModule { }