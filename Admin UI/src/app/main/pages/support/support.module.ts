import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { SupportComponent } from './support.component';
import { SupportRoutingModule } from './support.routing.module';
import { RouterModule } from '@angular/router';
import { TabMenuModule } from 'primeng/tabmenu';
const SupportRouting = RouterModule.forChild([
    {
        path:'',
        component:SupportComponent
    }
]);
@NgModule({
    declarations:[
        SupportComponent
    ],
    imports:[
        CommonModule,
        SupportRoutingModule,
        TabViewModule,
        TabMenuModule,
        SupportRouting
       
    ]
})
export class SupportModule{}
