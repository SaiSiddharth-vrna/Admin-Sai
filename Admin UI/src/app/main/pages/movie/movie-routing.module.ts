import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie.component';

const routes: Routes = [
    {
        path: '',
        component: MovieComponent,
        children: [
            {
                path: '',
                redirectTo: 'approve',
                pathMatch: 'full'
            },
            {
                path: 'approve',
                loadChildren: () => import('./movie-approve/movie-approve.module').then(m => m.MovieApproveModule),
            },
            {
                path: 'add',
                loadChildren: () => import('./movie-add/movie-add.module').then(m => m.MovieAddModule),
            },
            {
                path: 'active',
                loadChildren: () => import('./movie-active/movie-active.module').then(m => m.MovieActiveModule),
            },
            {
                path: 'rejected',
                loadChildren: () => import('./movie-rejected/movie-rejected.module').then(m => m.MovieRejectedModule),
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MovieRoutingModule { }