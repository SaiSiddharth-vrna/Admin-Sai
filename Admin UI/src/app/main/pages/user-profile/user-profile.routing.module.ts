import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { UserProfileComponent } from './user-profile.component';
const routes: Routes = [
    {
        path: '',
        component: UserProfileComponent,
        children: [
            {
                path:'',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes),],
    exports: [RouterModule],
})

export class UserProfileRoutingModule{ }