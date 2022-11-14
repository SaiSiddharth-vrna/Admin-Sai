import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieService } from 'src/app/shared/services/movie.service';
import { ConfirmationService } from 'primeng/api';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { SessionService } from 'src/app/shared/services/session/session.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { Table } from 'primeng/table';


@Component({
  selector: 'app-movie-rejected',
  templateUrl: './movie-rejected.component.html',
  styleUrls: ['./movie-rejected.component.scss'],
  providers: [
    ConfirmationService,
    ToastService,
    SessionService
  ]
})
export class MovieRejectedComponent implements OnInit {
  dataSource: any[] = [];
  
  loading: boolean = true;
  rejectionModal: boolean = false;
  selectedMovie: any;
  rejectionReason: string;
  rejectionComment = new FormControl('', [Validators.required, Validators.minLength(20)])

  @ViewChild('movieRejectedGrid') datagrid: Table;
  data: Object;
  
  item: any;
  constructor(
    private movieService: MovieService,
    private confirmationService: ConfirmationService,
    private sessionService: SessionService,
    private toast: ToastService,
    private router: Router,
    private route:ActivatedRoute,
    private primengConfig: PrimeNGConfig
  ) { }

  ngOnInit(): void {
    this.getDatasource();
    this.primengConfig.ripple = true;
  
  }

 

  getDatasource() {
    this.movieService.getAllRejectedMovies().subscribe(
      (res: any) => {
        console.log(res);
        if (res.statusCode === '200' && res.status.toLowerCase()) {
          this.dataSource = res.data;
          this.dataSource.map((_movie: any) => {
          })
          console.log(this.dataSource);
        } else {

        }
        this.loading = false;
      },
      (_err: any) => {
        this.loading = false;
        
      })
  }


  confirmApproval(movie: any) {
    this.confirmationService.confirm({
      message: `Are you sure that you want to Edit this Movie - ${movie?.moviename}?`,
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
    this.movieService.create(data).subscribe({
      next: (res: any) => {
        console.log(res);
        if (res?.status?.toLowerCase() === 'success' && res?.statusCode == 200) {
          this.getDataSource();
          this.toast.show('success', 'Success', `You have successfully edited ${movie.moviename}`);
        } else {
          this.toast.show('error', res.status, res.message);
        }
      },
      complete: () => console.log('edit completed'),
      error: error => {
        console.error(error);
        this.toast.show('error', 'Failed', error.statusText);
      }
    })
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


  onGlobalFilter(e: any) {
    this.datagrid.filterGlobal(e.target.value, 'contains')
  }

}

// removemovie(item){
//   console.log(item);
//   this.movieService.removemovie(this.dataSource).subscribe({
//     next: (res: any) => {
//       console.log(res);
//       if (res?.status?.toLowerCase() === 'success' && res?.statusCode == 200) {
//         this.dataSource = res.data;
//         console.log(this.dataSource);
//       } else {
//         this.toast.show('error', res.status, res.message);
//       }
//     },
//     complete: () => this.loading = false,
//     error: error => {
//       console.error(error);
//       this.loading = false;
//       this.toast.show('error', 'Failed', error.statusText);
//     }
//   })


 



















