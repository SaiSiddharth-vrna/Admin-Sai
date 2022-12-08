import { Component, OnInit,ViewChild } from '@angular/core';
import { Router,ActivatedRoute, Route, RouterLink } from '@angular/router';
import {ConfirmationService} from 'primeng/api';
import { MovieService } from 'src/app/shared/services/movie.service';
import { PrimeNGConfig } from 'primeng/api';
import { Message } from 'primeng/api';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { SessionService } from 'src/app/shared/services/session/session.service';
import { Table } from 'primeng/table';



@Component({
  selector: 'app-approve-movies-widget',
  templateUrl: './approve-movies-widget.component.html',
  styleUrls: ['./approve-movies-widget.component.scss'],
  providers: [ ConfirmationService,
  
  ToastService,
  SessionService]
  
})


   
export class ApproveMoviesWidgetComponent    {
  msgs: Message[] = [];
  position: string;
  name:any;
  movie:any;
  dataSource: any[] = [];
  loading: boolean = true;
  rejectionModal: boolean = false;
  selectedMovie: any;
  rejectionReason: string;

  
  

  @ViewChild('movieApproveGrid') datagrid: Table;
  constructor(
     private confirmationService: ConfirmationService,private primengConfig: PrimeNGConfig,
     private movieService: MovieService,
     private sessionService: SessionService,
     private toast: ToastService,

     private router:Router) {}
    


  ngOnInit():void {
    this.primengConfig.ripple = true;
  }

  getDataSource() {
    this.movieService.getAllPendingMovies().subscribe({
      next: (res: any) => {
        console.log(res);
        if (res?.status?.toLowerCase() === 'success' && res?.statusCode == 200) {
          this.dataSource = res.data;
          console.log(this.dataSource);
        } else {
          this.toast.show('error', res.status, res.message);
        }
      },
      complete: () => this.loading = false,
      error: error => {
        console.error(error);
        this.loading = false;
        this.toast.show('error', 'Failed', error.statusText);
      }
    })
  }


/*confirm1() {
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
}*/


/*confirm2(){

  this.router.navigate(['/movie-approve'])
}*/

confirmApproval(movie: any) {
  this.confirmationService.confirm({
    message: `Are you sure that you want to Approve this Movie - ${movie?.moviename}?`,
    header: 'Confirmation',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
      this.onApproval(movie);
    },
    reject: () => {

    }
  });
}

  onApproval(movie: any) {
    const data = {
      movieId: movie.movieId,
      workflowId: movie.workflowId,
      approvedBy: this.sessionService.getUserId(),
    };
    this.movieService.approveMovie(data).subscribe({
      next: (res: any) => {
        console.log(res);
        if (res?.status?.toLowerCase() === 'success' && res?.statusCode == 200) {
          this.getDataSource();
          this.toast.show('success', 'Success', `You have successfully Approved ${movie.moviename}`);
        } else {
          this.toast.show('error', res.status, res.message);
        }
      }, 
      complete: () => console.log('approval completed'),
      error: error => {
        console.error(error);
        this.toast.show('error', 'Failed', error.statusText);
      }
    })
  }

  confirmRejection(item: any) {
    this.rejectionModal = true;
    this.selectedMovie = item;
  }

  onRejection() {
    const data = {
      movieId: this.selectedMovie.movieId,
      workflowId: this.selectedMovie.workflowId,
      comment: this.rejectionReason,
      approvedBy: this.sessionService.getUserId(),
    };
    this.movieService.rejectMovie(data).subscribe({
      next: (res: any) => {
        console.log(res);
        if (res?.status?.toLowerCase() === 'success' && res?.statusCode == 200) {
          this.getDataSource();
          this.toast.show('success', 'Success', `You have successfully rejected ${this.selectedMovie.moviename}`);
        } else {
          this.toast.show('error', res.status, res.message);
        }
      },
      complete: () => this.rejectionModal = false,
      error: error => {
        console.error(error);
        this.toast.show('error', 'Failed', error.statusText);
      }
    })
  }
}