import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { UserProfileComponent } from './user-profile.component';
import { UserProfileRoutingModule } from './user-profile.routing.module';
import { RouterModule } from '@angular/router';
import { TabMenuModule } from 'primeng/tabmenu';
const UserProfileRouting = RouterModule.forChild([
    {
        path:'',
        component:UserProfileComponent
    }
]);
@NgModule({
    declarations:[
        UserProfileComponent
    ],
    imports:[
        CommonModule,
        UserProfileRoutingModule,
        TabViewModule,
        TabMenuModule,
        RouterModule
    ]
})



export class UserProfileModule{}
