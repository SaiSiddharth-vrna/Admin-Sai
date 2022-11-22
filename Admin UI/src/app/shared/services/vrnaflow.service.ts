import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { USER_KEY } from 'src/app/auth/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VrnaflowService {

  vrnaFlowUrl: string = environment.vrnaFlowUrl;

  constructor(
    private http: HttpClient
  ) { }

  getConfigurations() {
    const user = localStorage.getItem(USER_KEY);
    const url = this.vrnaFlowUrl + 'masterdata' + `?userId=${user}`;
    return this.http.get(url);
  }

  changeCategoryStatus(category: String, movieId: Number) {
    const url = environment.baseUrl+ this.vrnaFlowUrl + `category?category=${category}&movieId=${movieId}`;
    return this.http.post(url, null);
  }

}
