import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
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
  selector: 'app-upload-poster-img',
  templateUrl: './upload-poster-img.component.html',
  styleUrls: ['./upload-poster-img.component.scss'],
  providers: [
    UploadService,
    MessageService
  ]
})
export class UploadPosterImgComponent implements OnInit, AfterViewInit, OnDestroy {
  @Output() posterLink: EventEmitter<string> = new EventEmitter();

  posterUploadModal: boolean = false;
  imgUrl: string;
  cropperImg: any;
  exportSubscription: Subscription;
  cropper: Cropper;
  posterWidth: number = 350;
  posterHeight: number = 550;
  val: number;
  posterImgBlob: string;
  dummy: any;


  @ViewChild('image', { static: false }) image: ElementRef;

  constructor(
    private uploadService: UploadService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

  }

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
          width: this.posterWidth,
          height: this.posterHeight
        };
        this.cropper.setCropBoxData(cropData);
      },
      crop: async () => {
        const canvas = this.cropper.getCroppedCanvas();
        const posterCanvas = await this.posterSizeCanvas(canvas);
        this.cropperImg = posterCanvas.toDataURL('image/jpeg');
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
        this.posterImgBlob = window.URL.createObjectURL(blob);
      });
  }

  async posterSizeCanvas(sourceCanvas: any) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext("2d");
    const width = this.posterWidth,
      height = this.posterHeight;
    canvas.width = width;
    canvas.height = height;
    context.imageSmoothingEnabled = true;
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
      const type = file.type;
      console.log(file);
      console.log(image);
      console.log(type);
      if (image) {
        this.imgUrl = image;
        this.showDialog();
      }
    }
  }

  showDialog() {
    this.posterUploadModal = true;
  }

  onSubmit() {
    console.log(this.cropperImg);
    this.myUploader();
  }

  myUploader() {
    this.uploadService.uploadPoster().subscribe(async (res: any) => {
      console.log(res)
      if (res.statusCode === '200' && res.status.toLowerCase() === 'success') {
        const posterUrl = res.data.s3Path;
        const uploadUrl = res.data.uploadUrl;
        const url = uploadUrl.replace('https://s3.ap-south-1.amazonaws.com', 'http://localhost:4200');
        this.s3Upload(url, posterUrl);
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error in generating S3 upload url' });
      }
    });
  }

  s3Upload(url: string, posterUrl: string) {
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
        this.posterUploadModal = false;
        this.posterLink.emit(posterUrl);
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
