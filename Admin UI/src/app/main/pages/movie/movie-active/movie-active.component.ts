import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { MovieService } from 'src/app/shared/services/movie.service';
import { ToastService } from 'src/app/shared/services/toast/toast.service';
import { VrnaflowService } from 'src/app/shared/services/vrnaflow.service';

enum MovieStatus {
  published = 'Published',
  planned = 'Release Planned',
  unplanned = 'Not Published'
}

@Component({
  selector: 'app-movie-active',
  templateUrl: './movie-active.component.html',
  styleUrls: ['./movie-active.component.scss'],
  providers: [
    MovieService,
    ToastService,
    VrnaflowService
  ]
})
export class MovieActiveComponent implements OnInit {
  dataSource: any[] = [];
  loading: boolean = true;
  stateOptions = [{ label: 'Off', value: false }, { label: 'On', value: true }];
  today = new Date();

  @ViewChild('movieActiveGrid') datagrid: Table;
  constructor(
    private movieService: MovieService,
    private flowService: VrnaflowService,
    private router: Router,
    private toast: ToastService
  ) { }

  ngOnInit(): void {
    this.getDataSource();
  }

  getDataSource() {
    this.loading = true;
    this.movieService.getAllActiveMovies().subscribe(
      {
        next: (res: any) => {
          console.log(res);
          if (res?.status?.toLowerCase() === 'success' && res?.statusCode == 200) {
            this.dataSource = res.data;
            this.dataSource.map((movie: any) => {
              movie['isFeatured'] = (movie.isFeatured == "true");
              movie['isBanner'] = (movie.isBanner == "true");
              movie['isTrending'] = (movie.isTrending == "true");
              movie['releaseStatus'] = this.getReleaseStatus(movie);
            })
            console.log(this.dataSource);
          } else {
            this.toast.show('error', res.status, res.message);
          }
        },
        complete: () => this.loading = false,
        error: error => {
          console.error(error);
          this.loading = false;
        }
      })
  }

  getReleaseStatus(movie: any): string {
    if (movie.effectiveDate === null && movie.expiryDate === null) {
      return MovieStatus.unplanned;
    } else if (movie.effectiveDate > this.today) {
      return MovieStatus.planned;
    } else {
      return MovieStatus.published;
    }
  }

  onCategoryToggle(category: String, movieId: Number) {
    this.flowService.changeCategoryStatus(category, movieId).subscribe({
      next: (res: any) => {
        console.log(res);
        if (res?.status?.toLowerCase() === 'success' && res?.statusCode == 200) {
          this.toast.show('success', 'Success', `Updated ${category} successfully`);
        } else {
          this.toast.show('error', res.status, res.message);
          this.datagrid.reset();
        }
      },
      complete: () => console.error('completed'),
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

}
