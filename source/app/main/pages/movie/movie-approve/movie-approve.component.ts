import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { Table } from 'primeng/table';
import { MovieService } from 'src/app/shared/services/movie.service';
import { ConfirmationService } from 'primeng/api';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { SessionService } from 'src/app/shared/services/session/session.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-approve',
  templateUrl: './movie-approve.component.html',
  styleUrls: ['./movie-approve.component.scss'],
  providers: [
    ConfirmationService,
    ToastService,
    SessionService
  ]
})
export class MovieApproveComponent implements OnInit {
  dataSource: any[] = [];
  loading: boolean = true;
  rejectionModal: boolean = false;
  selectedMovie: any;
  rejectionReason: string;
  rejectionComment = new FormControl('', [Validators.required, Validators.minLength(20)])

  @ViewChild('movieApproveGrid') datagrid: Table;
  constructor(
    private movieService: MovieService,
    private sessionService: SessionService,
    private confirmationService: ConfirmationService,
    private toast: ToastService,
    private router: Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getDataSource();
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

  onAddMovie() {
    this.router.navigate(['/movies/add']);
  }

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

play(){
  const btn= document.querySelector( '.btn');
  const videoContainer= document.querySelector( '.video-container');
  const close = document.querySelector('.close');

  btn.addEventListener('click',()=>{
      videoContainer.classList.add('show');
  })

  close.addEventListener('click',()=>{
      videoContainer.classList.remove('show');
  })

}
}

