import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';

const routes: Routes = [
    {
        path: '',
        component: UsersComponent,
        children: [
            {
                path: '',
                redirectTo: 'approve',
                pathMatch: 'full'
            },
            {
                path: 'approve',
                loadChildren: () => import('./user-approve/user-approve.module').then(m => m.UserApproveModule),
            },
            {
                path: 'active',
                loadChildren: () => import('./user-active/user-active.module').then(m => m.UserActiveModule),
            },
            {
                path: 'rejected',
                loadChildren: () => import('./user-rejected/user-rejected.module').then(m => m.UserRejectedModule),
            },
            {
                path: 'add',
                loadChildren: () => import('./user-add/user-add.module').then(m => m.UserAddModule),
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UsersRoutingModule { }