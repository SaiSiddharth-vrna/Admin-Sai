import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddTicketComponent } from './add-ticket.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

const addticketrouting = RouterModule.forChild([
    {
        path:'',
        component:AddTicketComponent
    }
]);

@NgModule({
    declarations:[
      AddTicketComponent,
      

    ],
    imports:[
        CommonModule,
        FormsModule,
        TableModule,
        ButtonModule,
        DialogModule,
        InputTextModule,
        addticketrouting,
        
    ]

})
export class addTicketModule{}