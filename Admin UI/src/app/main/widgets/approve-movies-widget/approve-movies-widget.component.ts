import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Route, } from '@angular/router';
import {ConfirmationService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { Message } from 'primeng/api';



@Component({
  selector: 'app-approve-movies-widget',
  templateUrl: './approve-movies-widget.component.html',
  styleUrls: ['./approve-movies-widget.component.scss'],
  providers: [ ConfirmationService]
})


   
export class ApproveMoviesWidgetComponent    {
  msgs: Message[] = [];
  
 
  position: string;
  name:any;
  
  


  constructor(
     private confirmationService: ConfirmationService,private primengConfig: PrimeNGConfig,
     private router:Router) {}
    


  ngOnInit():void {
    this.primengConfig.ripple = true;
  }

  

confirm1() {
    this.confirmationService.confirm({
        message: 'Are you sure that you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.msgs = [{severity:'info', summary:'Confirmed', detail:'You have accepted'}];
        },
        reject: () => {
            this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
        }
    });
}


confirm2(){

  this.router.navigate(['/movie-approve'])
}
}