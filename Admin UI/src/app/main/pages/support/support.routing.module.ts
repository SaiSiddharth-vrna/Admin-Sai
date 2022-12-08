import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { SupportComponent } from "./support.component"; 
const routes: Routes = [
    {
        path: '',
        component: SupportComponent,
        children: [
            {
                path:'',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path:'add-ticket',
                loadChildren:()=>import('./add-ticket/add-ticket.module').then(m=>m.addTicketModule)
            }
            
    ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes),],
    exports: [RouterModule],
})
export class SupportRoutingModule{}