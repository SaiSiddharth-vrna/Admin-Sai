import {Component,ElementRef,EventEmitter,OnDestroy,OnInit,Output,ViewChild} from '@angular/core';
import Cropper from 'cropperjs';
import { MessageService } from 'primeng/api';
import { finalize, from, Subscription } from 'rxjs';
import { UploadService } from 'src/app/shared/services/upload.service';

export interface UploadImage {
  name: string;
  size: number;
  type: string;
  lastModifiedDate: Date;
  objectURL: string;
}

@Component({
  selector: 'app-upload-banner-img',
  templateUrl: './upload-banner-img.component.html',
  styleUrls: ['./upload-banner-img.component.scss'],
  providers: [
    MessageService
  ]
})
export class UploadBannerImgComponent implements OnInit, OnDestroy {
  @Output() bannerLink: EventEmitter<string> = new EventEmitter();

  bannerUploadModal: boolean = false;
  imgUrl: string;
  cropperImg: any;
  exportSubscription: Subscription;
  cropper: Cropper;
  bannerWidth: number = 1280;
  bannerHeight: number = 475;
  val: number;
  bannerImgBlob: string;
  dummy: any;

  @ViewChild('image', { static: false }) image: ElementRef;

  constructor(
    private uploadService: UploadService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void { }

  imageLoaded() {
    this.initializeCropper(this.image.nativeElement);
  }

  initializeCropper(image: HTMLImageElement) {
    const cropperOptions: Cropper.Options = {
      autoCrop: true,
      center: false,
      cropBoxResizable: false,
      dragMode: 'move',
      guides: true,
      rotatable: true,
      scalable: false,
      viewMode: 0,
      zoomable: true,
      zoomOnTouch: false,
      zoomOnWheel: true,
      ready: () => {
        const cropData: Cropper.SetCropBoxDataOptions = {
          width: this.bannerWidth,
          height: this.bannerHeight
        };
        this.cropper.setCropBoxData(cropData);
      },
      crop: async () => {
        const canvas = this.cropper.getCroppedCanvas();
        const bannerCanvas = await this.bannerSizeCanvas(canvas);
        this.cropperImg = bannerCanvas.toDataURL('image/jpeg');
        this.getJpeg();
      }
    };
    this.destroyCropper();
    this.cropper = new Cropper(image, cropperOptions);
  }

  async getJpeg() {
    fetch(this.cropperImg)
      .then(res => res.blob())
      .then(blob => {
        this.bannerImgBlob = window.URL.createObjectURL(blob);
      });
  }

  async bannerSizeCanvas(sourceCanvas: any) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext("2d");
    const width = this.bannerWidth,
      height = this.bannerHeight;
    canvas.width = width;
    canvas.height = height;
    context.imageSmoothingEnabled = false;
    context.drawImage(sourceCanvas, 0, 0, width, height);
    context.globalCompositeOperation = "destination-in";
    context.beginPath();
    context.fill();
    return canvas;
  }

  rotateLeft() {
    this.cropper.rotate(90);
  }

  rotateRight() {
    this.cropper.rotate(-90);
  }

  upload(data: any) {
    if (data && data.files[0]) {
      const file: UploadImage = data.files[0];
      const image = file.objectURL;
      if (image) {
        this.imgUrl = image;
        this.showDialog();
      }
    }
  }

  showDialog() {
    this.bannerUploadModal = true;
  }

  onSubmit() {
    this.uploadService.uploadBanner().subscribe(async (res: any) => {
      if (res.statusCode === '200' && res.status.toLowerCase() === 'success') {
        const bannerUrl = res.data.s3Path;
        const uploadUrl = res.data.uploadUrl;
        const url = uploadUrl.replace('https://s3.ap-south-1.amazonaws.com', 'http://localhost:4200');
        this.s3Upload(url, bannerUrl);
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error in generating S3 upload url' });
      }
    });
  }

  s3Upload(url: string, bannerUrl: string) {
    const base64Index = this.cropperImg.indexOf(';base64,') + ';base64,'.length;
    const base64 = this.cropperImg.substring(base64Index);
    const raw = window.atob(base64);
    const rawLength = raw.length;
    let binaryImg = new Uint8Array(new ArrayBuffer(rawLength));

    for (let i = 0; i < rawLength; i++) {
      binaryImg[i] = raw.charCodeAt(i);
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "image/jpeg");

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: binaryImg
    };

    fetch(url, requestOptions)
      .then(response => response.text())
      .then(result => {
        this.bannerUploadModal = false;
        this.bannerLink.emit(bannerUrl);
      })
      .catch(error => console.log('error', error));
  }

  private destroyCropper() {
    if (!this.cropper) return;
    this.cropper.destroy();
    this.cropper = null;
  }

  ngOnDestroy() {
    this.destroyCropper();
  }
}
