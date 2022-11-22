import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UploadService } from 'src/app/shared/services/upload.service';
import Cropper from "cropperjs";

export interface CroppResult {
  imageData: Cropper.ImageData;
  cropData: Cropper.CropBoxData;
  blob?: Blob;
  dataUrl?: string;
}

//https://stackblitz.com/edit/angular-9-cropperjs?file=src%2Fapp%2Fcropper%2Fcropper.component.ts

@Component({
  selector: 'app-movie-add-banner',
  templateUrl: './movie-add-banner.component.html',
  styleUrls: ['./movie-add-banner.component.scss'],
  providers: [
    UploadService,
    MessageService
  ]
})
export class MovieAddBannerComponent implements OnInit {
  imgUrl: string = "https://fengyuanchen.github.io/cropperjs/images/picture.jpg";
  src:any;
  constructor(
    private uploadService: UploadService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  fileChangeEvent(e: any) {
    console.log(e)
  }

  myUploader(event: any) {
    const image = event.files[0].objectURL.changingThisBreaksApplicationSecurity;
    console.log(event);
    console.log(event.files[0]);
    console.log(event.files[0].objectURL.changingThisBreaksApplicationSecurity);
    let awsPath = null;
    this.uploadService.uploadBanner().subscribe((res: any) => {
      console.log(res)
      if (res.statusCode === '200' && res.status.toLowerCase() === 'success') {
        awsPath = res.data.s3Path;
        const uploadUrl = res.data.uploadUrl;
        this.uploadService.awsUpload(uploadUrl, image).subscribe(
          (res: any) => {
            console.log(res)
            if (res.statusCode === '200' && res.status.toLowerCase() === 'success') {

            } else {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error in uploading content to S3' });
            }
          }, (err: any) => {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error in connecting' });
          })
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error in generating S3 upload url' });
      }
    });
  }

  showCroppResult($event){
    this.createImageFromBlob($event.blob);
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.src = reader.result;
    }, false);
    if (image) {
      reader.readAsDataURL(image);
    }
  }
}
