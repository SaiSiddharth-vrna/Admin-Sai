import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  baseUrl = environment.awsUrl;
  constructor(private http: HttpClient) { }

  uploadBanner() {
    const url = this.baseUrl + `banner/upload?fileType=jpg`;
    return this.http.get(url);
  }

  uploadPoster() {
    const url = this.baseUrl + `poster/upload?fileType=jpg`;
    return this.http.get(url);
  }

  uploadvideo() {
    const url = environment.vrnaFlowUrl+ this.baseUrl + `video/upload?fileType=mp4`;
    return this.http.get(url);
  }
  
  awsUpload(url: string, data: any) {
    return this.http.put(url, data, {headers:{skip:"true"}});
  }
}
