import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuItem } from 'primeng/api';
import { COUNTRIES_KEY } from 'src/app/shared/services/orch.service';


@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.scss'],
  providers: [],
  encapsulation: ViewEncapsulation.None
})
export class MovieAddComponent implements OnInit {
  items: MenuItem[] = [];
  activeIndex: number = 0;

  showDetails = false;
  showUpload = true;
  isLinear = false;
  posterUrl: string;
  bannerUrl: string;

  firstFormGroup: FormGroup = this.fb.group({
    firstCtrl: ['', Validators.required],
  });

  uploadForm = this.fb.group({
    title: ['', Validators.required],
    year: ['', Validators.required],
    certificate: [''],
    country: [''],
    category: [''],
    language: [''],
    countryAccess: [''],
    producer: [''],
    director: [''],
    musician: [''],
    artist: [''],
    description: ['']
  });

  display: boolean = false;

  constructor(
    private fb: FormBuilder,
    
  ) { }

  ngOnInit(): void {

    
    this.stepperLoad();
    const countries: any = localStorage.getItem(COUNTRIES_KEY);
    

    
  }

  showDialog() {
    this.display = true;
  }

  stepperLoad() {
    this.items = [{
      label: 'Poster',
      command: (event: any) => {
        this.activeIndex = 0;
        console.log(0);
      }
    },
    {
      label: 'Details',
      command: (event: any) => {
        this.activeIndex = 1;
        console.log(1);
      }
    },
    {
      label: 'Upload',
      command: (event: any) => {
        this.activeIndex = 2;
        console.log(2);
      }
    },
    {
      label: 'Submit',
      command: (event: any) => {
        this.activeIndex = 3;
        console.log(3);
      }
    }
    ];
  }

  onPosterLink(posterUrl: string) {
    this.activeIndex = 1;
    this.posterUrl = posterUrl;
  }

  bannerUpload() {
    this.activeIndex = 0;
  }

  onSubmit() {
    console.log(this.uploadForm.value);
  }
}
