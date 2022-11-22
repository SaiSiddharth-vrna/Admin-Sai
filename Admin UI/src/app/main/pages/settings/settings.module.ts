import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { SettingsComponent } from './settings.component'; 
import { SettingsRoutingModule } from './settings.routing.module';
import { RouterModule } from '@angular/router';
import { TabMenuModule } from 'primeng/tabmenu';
const SettingsRouting = RouterModule.forChild([
    {
        path:'',
        component:SettingsComponent
    }
]);
@NgModule({
    declarations:[
        SettingsComponent
    ],
    imports:[
        CommonModule,
        SettingsRoutingModule,
        TabViewModule,
        TabMenuModule,
        RouterModule
    ]
})
export class SettingsModule{}
