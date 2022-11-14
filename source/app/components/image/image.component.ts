import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() src: string | undefined;
  @Input() width: string = 'auto';
  @Input() height: string = 'auto';
  @Input() loaderHeight: string = 'auto';
  @Input() alt!: string;
  @Input() type: 'poster' | 'banner';
  isLoading = true;

  constructor() { }

  ngOnInit(): void {
  }
  onLoad() {
    console.log('imaged loaded');
    this.isLoading = false;
  }
  onErrorLoad() {
    this.isLoading = true;
    if(this.type === 'poster'){
      this.src = 'assets/img/poster-placeholder.jpg'
    } else if('banner'){
      this.src = 'assets/img/placeholder-banner.jpg'
    }
  }
}
