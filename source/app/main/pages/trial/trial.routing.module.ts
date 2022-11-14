
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrialComponent } from './trial.component';
const routes: Routes = [
    {
        path: '',
        component: TrialComponent,
        children: [
            {
                path:'',
                redirectTo: 'approve',
                pathMatch: 'full'
            },
            {
                path:'trial-active',
                loadChildren: () => import('./trial-active/trial-active.module').then(m => m.TrialActiveModule),
            },
            {
                path: 'trial-add',
                loadChildren: () => import('./trial-add/trial-add.module').then(m => m.TrialAddModule),
            },
            {
                path: 'trial-approve',
                loadChildren: () => import('./trial-approve/trial-approve.module').then(m => m.TrialApproveModule),
            },
            {
                path: 'trial-rejected',
                loadChildren: () => import('./trial-rejected/trial-rejected-.module').then(m => m.TrialRejectedModule),
            }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes),],
    exports: [RouterModule],
    
})
export class TrialRoutingModule { }