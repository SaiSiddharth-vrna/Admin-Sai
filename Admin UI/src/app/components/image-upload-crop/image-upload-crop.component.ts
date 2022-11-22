import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import Cropper from 'cropperjs';
import { Subscription, from, finalize } from 'rxjs';
import { CroppResult } from 'src/app/main/pages/movie/movie-add/movie-add-banner/movie-add-banner.component';

@Component({
  selector: 'app-image-upload-crop',
  templateUrl: './image-upload-crop.component.html',
  styleUrls: ['./image-upload-crop.component.scss'],
})
export class ImageUploadCropComponent implements AfterViewInit, OnDestroy {
  @Input() aspectRatio: number = NaN;
  @Input() cropHeight: number = 553;
  @Input() cropWidth: number = 376;
  @Input() imgUrl: string = "https://fengyuanchen.github.io/cropperjs/images/picture.jpg";
  @Output() cropped = new EventEmitter<CroppResult>();
  @Output() closed = new EventEmitter<void>();

  processing: boolean;
  cropper: Cropper;
  initZoomValue: number = 0.2651515;
  zoomValue: number = 0.2651515;
  zoomStep: number = 0.01;
  exportSubscription: Subscription;

  @ViewChild("image") image: ElementRef;

  ngAfterViewInit() {
    this.image.nativeElement.addEventListener(
      "zoom",
      e => this.syncZoomRange(e),
      false
    );
  }

  private syncZoomRange($event) {
    if (!$event) return;
    const { ratio } = $event.detail;
    if (ratio > 1.1 || ratio < 0) {
      $event.preventDefault();
      return;
    }
    this.zoomValue = ratio;
  }

  imageLoaded($event: Event) {
    if (!$event) return;
    const image = $event.target as HTMLImageElement;
    this.initCropper(image);
  }

  private initCropper(image: HTMLImageElement) {
    if (!image) return;
    image.crossOrigin = "anonymous";
    const cropperOptions: Cropper.Options = {
      dragMode: "move",
      restore: false,
      guides: false,
      center: false,
      minCropBoxHeight: this.cropHeight,
      minCropBoxWidth: this.cropWidth,
      highlight: true,
      cropBoxMovable: false,
      cropBoxResizable: false,
      minContainerWidth: 400,
      minContainerHeight: 550,
      toggleDragModeOnDblclick: false,
      checkCrossOrigin: true,
      viewMode: 3,
      background: false
    };

    this.destroyCropper();
    this.cropper = new Cropper(image, cropperOptions);
  }

  setZoom($event) {
    if (!$event) return;
    this.zoomValue = $event;
    this.cropper.zoomTo(this.zoomValue);
  }

  close() {
    this.zoomValue = this.initZoomValue;
    this.cropper.reset();
    this.closed.emit();
  }

  exportCanvas(base64?: any) {
    const imageData = this.cropper.getImageData();
    const cropData = this.cropper.getCropBoxData();
    const canvas = this.cropper.getCroppedCanvas();
    const roundedCanvas = this.getRoundedCanvas(canvas);
    const data = { imageData, cropData };

    const promise = new Promise(resolve => {
      if (base64) {
        return resolve({
          dataUrl: roundedCanvas.toDataURL("image/png")
        });
      }
      roundedCanvas.toBlob(blob => resolve({ blob }));
    });
    this.toggleProcessingState();
    const observable = from(promise);
    this.exportSubscription = observable
      .pipe(finalize(() => this.toggleProcessingState()))
      .subscribe((res: any) => {
        console.log(res);
        this.cropped.emit({ ...data, ...res });
        this.close();
      });
  }

  private toggleProcessingState() {
    this.processing = !this.processing;
  }

  private getRoundedCanvas(sourceCanvas) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const width = this.cropWidth,
      height = this.cropHeight;

    canvas.width = width;
    canvas.height = height;
    context.imageSmoothingEnabled = true;
    context.drawImage(sourceCanvas, 0, 0, width, height);
    context.globalCompositeOperation = "destination-in";
    context.beginPath();
    context.fill();
    return canvas;
  }

  private destroyCropper() {
    if (!this.cropper) return;
    this.cropper.destroy();
    this.cropper = null;
  }
  
  fileChangeEvent(e: any) {
    console.log(e);
    console.log(e.target.files);
    const files = e.target.files;
    const formData = new FormData()
    const value = e.target.value;
    console.log(value);
  }
  myUploader(event: any) {
    const image = event.files[0].objectURL;
    console.log(event);
    console.log(image);
    this.imgUrl = image;
  }
  ngOnDestroy() {
    this.destroyCropper();
    if (this.exportSubscription) this.exportSubscription.unsubscribe();
    if (this.image) {
      this.image.nativeElement.removeEventListener(
        "zoom",
        e => this.syncZoomRange(e),
        false
      );
    }
  }
}
