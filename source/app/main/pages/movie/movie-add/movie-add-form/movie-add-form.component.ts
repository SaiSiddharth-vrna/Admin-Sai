import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { max, min } from 'rxjs';

import { MovieService } from 'src/app/shared/services/movie.service';
import { COUNTRIES_KEY, GENRES_KEY } from 'src/app/shared/services/orch.service';

@Component({
  selector: 'app-movie-add-form',
  templateUrl: './movie-add-form.component.html',
  styleUrls: ['./movie-add-form.component.scss'],
  providers: [
    MessageService
  ]
})

export class MovieAddFormComponent implements OnInit  {
  @Output() bannerUpload = new EventEmitter();
  @Output() videoUpload = new  EventEmitter();
  @Input() posterUrl: string;
  @Input() bannerUrl: string;
  @Input() videoUrl: string;

  bannerUploadModal: boolean = false;
  videoUploadModal: boolean = false;
  countries: any[] = [];
  genres: any[] = [];
  years: string[] = [];
  maxDate: Date = new Date();
  detailsForm: FormGroup = this.fb.group({
    partnerId: [25319],
    status: 'N',
    isBanner: false,
    isFeatured: false,
    isTrending: false,
    moviename: ['Prince', Validators.required],
    movieyear: ['2020', Validators.required],
    certificate: ['A'],
    country: ['IN'],
    language: ['Tamil'],
    countriesAccess: [['IN', 'UK', 'US']],
    genre: [[1, 2]],
    director: [['Siva']],
    musicdirector: [['Aniruth']],
    producer: [['Vijay', 'Sivakarthikeyan']],
    artist: [['Neeraja viswanathan', 'Siva', 'prabu', 'Naveen', 'Sai']],
    description: ['Due to a fatal accident, Krishna, a basketball player moves to a new college. There he locks horns with a Vamsi, a cricket maniac, who does not let other sports gain importance.'],
    moviebannerurl: [''],
    posterurl: ['']
  });
    selectedCountries1: any;
  imgUrl:string;
  videourl:string;

  constructor(
    private fb: FormBuilder,
    private movieService: MovieService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getCountries();
    this.getYear();
  }

  getYear() {
    const currentYear = this.maxDate.getFullYear();
    this.years = [];
    for (let i = 2000; i <= currentYear; i++) {
      const tempYear = i.toString();
      this.years.push(tempYear);
    }
  }

  

   getCountries() {
     const countries: any = localStorage.getItem(COUNTRIES_KEY);
     const genres: any = localStorage.getItem(GENRES_KEY);
     this.countries = JSON.parse(countries);
     this.genres = JSON.parse(genres);
     console.log(this.genres);
   }

  onSubmit() {
    console.log(this.detailsForm.value);
    this.detailsForm.controls['posterurl'].setValue(this.posterUrl);
    this.detailsForm.controls['moviebannerurl'].setValue(this.bannerUrl);
    this.movieService.create(this.detailsForm.value).subscribe(res => {
      console.log(res);
     /* this.router.navigate(['/movies/approve']);*/
      //this.router.navigate(['orch-service/vrnaflow/approvemovie'])
      //this.router.navigate(['/movie-approve'])
    })
  }

  sk(){
    
     this.router.navigate(['/movie-approve'])
  }

  moveToApprove() {
    this.messageService.addAll([
      {severity:'info', summary:'Message 1', detail:'Message Content'},
      {severity:'info', summary:'Message 2', detail:'Message Content'},
      {severity:'info', summary:'Message 3', detail:'Message Content'}
  ]);
    console.log('test dialog');
  }

  onBannerUpload() {
    this.bannerUpload.emit();
  }

  onBannerLink(bannerUrl: string) {
    this.bannerUrl = bannerUrl;
  }
  onVideoUpload(){
    this.videoUpload.emit();
  }

  onvideoLink(videoUrl: string) {
    this.videoUrl = videoUrl;
  }

//   getCountries(){
    
//     this.countries = [
//      {country_name: 'Australia', code: 'AU'},
//      {country_name: 'Brazil', code: 'BR'},
//      {country_name: 'China', code: 'CN'},
//      {country_name: 'Egypt', code: 'EG'},
//      {country_name: 'France', code: 'FR'},
//      {country_name: 'Germany', code: 'DE'},
//      {country_name: 'India', code: 'IN'},
//      {country_name: 'Japan', code: 'JP'},
//      {country_name: 'Spain', code: 'ES'},
//      {country_name: 'United States', code: 'US'}
// ];
// }
}











