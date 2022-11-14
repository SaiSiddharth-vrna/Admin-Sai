import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit,AfterViewInit,
  
  ElementRef,
  EventEmitter,
  OnDestroy,
  
  Output,
  ViewChild, } from '@angular/core';




export interface UploadVideo {
  videoUrl: string;
  name: string;
  size: number;
  type: string;
  lastModifiedDate: Date;
  objectURL: string;
  
}

@Component({
  selector: 'app-play-videos',
  templateUrl: './play-videos.component.html',
  styleUrls: ['./play-videos.component.scss']
})
export class PlayVideosComponent implements  OnInit, AfterViewInit, OnDestroy {
  

  posterurl:string;
  videoUploadModal: boolean = false;
  objectURL:string;
  
  videoUrl:string;
  

  constructor(
    
  ) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {

  }
  ngOnDestroy() {
    
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
  upload(data:any) {
    if (data && data.files[0]) {
      const file: UploadVideo = data.files[0];
      const video = this.objectURL ;
      const type = file.type;
      console.log(file);
      console.log(video);
      console.log(type);
      if (video) {
        this.videoUrl =video;
        
       
      }
    }
  }
  
  


}


  


